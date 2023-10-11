import axios from "axios";
import { useState } from "react";
import useAuthStore from "@/store/AuthStore";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuthStore();

  const userLogin = async (username: string, password: string) => {
    setIsLoading(true);

    const response = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/api/user/login`,
      data: {
        username,
        password,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      login(data.email, data.token);
    } else {
      setError(response.data);
    }

    setIsLoading(false);
  };

  return { isLoading, error, userLogin };
};

export default useLogin;
