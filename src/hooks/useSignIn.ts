import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";

type FormData = {
  email: string;
  password: string;
};

export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  async function login(formdata: FormData) {
    const res = await api.post("/api/authentication/login", formdata);
    return res.data;
  }

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      navigate("/home");
    },
  });
}
