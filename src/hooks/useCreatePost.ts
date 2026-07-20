import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/axios";

type CreatePostPayload = {
  content: string;
};

async function createPost(payload: CreatePostPayload) {
  const res = await api.post("/api/posts", payload);
  return res.data;
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
