import {createContext, useContext, useState} from 'react';

type AuthContextType = {
    role: string | null;
    setRole: (role: string | null) => void;
};

const AuthContext = createContext<AuthContextType>({role: null, setRole: () => {}});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<string | null>(null);
  return <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext); 