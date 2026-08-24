import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

export type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author?: {
    name?: string;
    email?: string;
    image?: string | null;
  };
  likes?: unknown[];
  comments?: unknown[];
  _count?: {
    likes?: number;
    comments?: number;
  };
};

export type PostsResponse = {
  data: Post[];
};

async function Posts(userId: string) {
  const res = await api.get<PostsResponse>(`/api/users/${userId}/posts`);
  return res.data;
}

export function useUserposts(userId?:string) {
    return useQuery<PostsResponse>({
        queryKey: ["userposts",userId],
        queryFn: ()=>Posts(userId!),
    })
  
}