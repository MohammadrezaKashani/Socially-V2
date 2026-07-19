import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: string;
  updatedAt: string;
};

export type SessionInfo = {
  expiresAt: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  ipAddress: string;
  userAgent: string;
  userId: string;
  id: string;
};

export type SessionResponse = {
  message: string;
  success: boolean;
  data: {
    session: SessionInfo;
    user: SessionUser;
  };
};

export const useSession = () => {
  return useQuery<SessionResponse>({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await api.get("/api/authentication/session");
      return res.data;
    },
  });
};
