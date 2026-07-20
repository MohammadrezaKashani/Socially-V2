import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";

async function logoutApi() {
  const res = await api.post("/api/authentication/logout");
  return res.data;
}

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["session"] });
      queryClient.setQueryData(["session"], null);
      navigate("/", { replace: true });
    },
  });
}
