import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../config/api";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient()
  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onSuccess = () => queryClient.invalidateQueries({ queryKey: ["user-data"] })

  return useMutation({ mutationFn, onSuccess });
};


const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const mutationFn = async (data) => {
    const res = await api.put("/user/profile", data)
    return res.data
  }

  const onSuccess = () => queryClient.invalidateQueries({ queryKey: ["profile-update"] })

  return useMutation({ mutationFn, onSuccess })

  // return useMutation(
  //   async (updatedData) => {
  //     const response = await api.put("/user/profile", updatedData);
  //     return response.data;
  //   },
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries("get-profile");
  //     },
  //   }
  // );
};


export { useSendOtp, useCheckOtp, useUpdateProfile };
