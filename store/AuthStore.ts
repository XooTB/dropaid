import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  user: user | null;
  login: (email: string, token: string, username: string) => void;
  logout: () => void;
};

export type user = {
  email: string;
  username: string;
  token: string;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (email: string, token: string, username: string) => {
        set(() => ({ user: { email, token, username } }));
      },
      logout: () => {
        set(() => ({ user: null }));
      },
    }),
    { name: "user" }
  )
);

export default useAuthStore;
