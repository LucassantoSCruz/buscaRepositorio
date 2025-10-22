import { User } from "@/types/userTypes";
import axios from "axios";
import { useState } from "react";

export function useGithubUsers() {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getUser = async (query: string) => {
    setLoading(true);
    setError(null);
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${query}`
        );
        setUsuarios(response.data.items);
      } catch (err) {
        setError(err as Error);
      }
    } else {
      setUsuarios([]);
    }
    setLoading(false);
  };
  return { usuarios, loading, error, getUser };
}
