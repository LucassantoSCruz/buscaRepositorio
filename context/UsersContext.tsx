import { Users } from "@/types/userTypes";
import { createContext, ReactNode, useContext, useState } from "react";

type UsersContextType = {
  usuarios: Users[];
  setUsuarios: React.Dispatch<React.SetStateAction<Users[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export function UsersProvider({ children }: { children: ReactNode }) {
  const [usuarios, setUsuarios] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <UsersContext.Provider
      value={{ usuarios, setUsuarios, loading, setLoading }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers deve ser usado dentro de um UsersProvider");
  }
  return context;
}
