import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

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

const allTour = async (id) => {
  if (id) {
    return await api.get(`/tour/${id}`)
  }

  return api.get("tour")

}



export { useSendOtp, useCheckOtp, allTour };
