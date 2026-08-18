"use client";

import { useSession, signOut as nextAuthSignOut } from "next-auth/react";
import { createContext, useContext, ReactNode } from "react";

// For backward compatibility with the old AuthContext shape
interface AuthContextType {
  session: any | null;
  user: any | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  
  const loading = status === "loading";
  
  const signOut = async () => {
    await nextAuthSignOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <AuthContext.Provider value={{ session, user: session?.user ?? null, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
