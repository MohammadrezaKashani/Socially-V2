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
  };
};
type UserResponse = {
  message: string;
  success: boolean;
  data: User;
};

const getUserProfile = async (userId: string) => {
  const response = await api.get<UserResponse>(`/api/users/${userId}`);
  return response.data.data;
};

export const useInformationUserId = (userId?: string) => {
  return useQuery({
    queryKey: ["user-profile", userId],
    queryFn: () => getUserProfile(userId as string),
    enabled: !!userId,
  });
};
