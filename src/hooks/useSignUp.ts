import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";

type FormData = {
  email: string;
  password: string;
};

export function useSignUp() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  async function getData(formdata: FormData) {
    const res = await api.post("/api/authentication/register", formdata);
    return res.data;
  }

  return useMutation({
    mutationFn: getData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      navigate("/home");
    },
  });
}
