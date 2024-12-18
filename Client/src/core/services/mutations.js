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
};


const useGetBasketId = (id) => {
  const queryClient = useQueryClient();
  const mutationFn = async (data) => {
    const res = await api.put(`/basket/${id}`, data)
    return res.data
  }
  const onSuccess = () => queryClient.invalidateQueries({ queryKey: ["basket-id"] })

  return useMutation({ mutationFn, onSuccess })
};

const usePostOrder = () => {
  const queryClient = useQueryClient();
  const mutationFn = async (data) => {
    try {
      const res = await api.post("/order", data);
      return res.data;
    } catch (error) {
      // مدیریت ارورها
      console.error("Error posting order:", error);
      throw error;
    }
  };

  const onSuccess = () => queryClient.invalidateQueries({ queryKey: ["order-tour"] })

  return useMutation({ mutationFn, onSuccess })
};


export { useSendOtp, useCheckOtp, useUpdateProfile, useGetBasketId, usePostOrder };
