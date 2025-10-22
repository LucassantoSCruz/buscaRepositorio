import { useUsers } from "@/context/UsersContext";
import { Users } from "@/types/userTypes";
import axios from "axios";

export function useGithubUsers() {
  const { setUsuarios, setLoading } = useUsers();

  const getUser = async (query: string) => {
    setLoading(true);
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${query}`
        );
        setUsuarios(response.data.items as Users[]);
      } catch (error) {
        console.log(error);
      }
    } else {
      setUsuarios([]);
    }
    setLoading(false);
  };

  return { getUser };
}
