import api from "../lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function follow(userId: string) {
  const res = await api.patch(`/api/users/${userId}`);
  return res.data;
}

export function useToggleFollow() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: follow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recommendedUsers"] });
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
  });
}
