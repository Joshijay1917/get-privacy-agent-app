import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

interface User {
  _id: string;
  email: string;
  plan: 'free' | 'pro';
};

export interface AuthState {
    user: User | null;
    loading: boolean;
    refreshUser: () => Promise<void>;
    setShowAlert: Dispatch<SetStateAction<boolean>>;
    showAlert: boolean
};

export const AuthContext = createContext<AuthState | null>(null);

export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};