import useAuthStore from "@/store/AuthStore";
import axios from "axios";
import { useState } from "react";

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuthStore();

  const signUp = async (username: string, email: string, password: string) => {
    setIsLoading(true);

    const reponse = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/api/user/signup`,
      data: {
        username,
        email,
        password,
      },
    });

    const data = await reponse.data;

    login(data.email, data.token);

    setIsLoading(false);
  };

  return { isLoading, error, signUp };
};

export default useSignup;
