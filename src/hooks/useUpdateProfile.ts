import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/axios";

type ProfileData = {
  userId: string;
  name: string;
  bio: string;
  location: string;
  website: string;
};

async function updateProfileApi({
  userId,
  name,
  bio,
  location,
  website,
}: ProfileData) {
  const res = await api.put(`/api/users/${userId}`, {
    name,
    bio,
    location,
    website,
  });
  return res.data;
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userName-profile"] });
      queryClient.invalidateQueries({ queryKey: ["session"] });
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
  });
}
