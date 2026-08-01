import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

export interface RecommendedUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  bio: string | null;
  location: string | null;
  website: string | null;
  createdAt: string;
  updatedAt: string;
  _count: {
    followers: number;
  };
}

interface RecommendedUsersResponse {
  message: string;
  success: boolean;
  data: RecommendedUser[];
}

async function fetchRecommendedUsers(){
  const res = await api.get<RecommendedUsersResponse>("/api/users/recommend");
  return res.data;
}

export function useRecommendedUsers() {
  return useQuery({
    queryKey: ["recommendedUsers"],
    queryFn: fetchRecommendedUsers,
  });
}
