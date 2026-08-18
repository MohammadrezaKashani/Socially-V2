import api from "../lib/axios";
import { useQuery } from "@tanstack/react-query";

type User = {
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
    followings: number;
    posts: number;
  };
};
type UserResponse = {
  message: string;
  success: boolean;
  data: User;
};

async function getUserProfile(userName: string) {
  const res = await api.get<UserResponse>(`/api/users/${userName}/profile`);
  return res.data.data;
}

export const useInformationUserName = (userName?: string) => {
  return useQuery({
    queryKey: ["userName-profile", userName],
    queryFn: () => getUserProfile(userName as string),
    enabled: !!userName,
  });
};
