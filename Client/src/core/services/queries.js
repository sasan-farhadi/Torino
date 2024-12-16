import { useQuery } from "@tanstack/react-query"

import api from "../config/api"

const useGetUserData = (page) => {
    const queryFn = () => api.get(`/user/profile `)
    const queryKey = ["user-data"]

    return useQuery({ queryFn, queryKey })
}

const useGetTour = () => {
    const queryFn = () => api.get("/tour")
    const queryKey = ["tour-data"]

    return useQuery({ queryFn, queryKey })
}

const useGetTourId = (id) => {
    const queryFn = async () => {
        const response = await api.get(`/tour/${id}`);
        return response.data;
    };

    const queryKey = ["tour-id", id];

    return useQuery({ queryFn, queryKey });
};


const useGetProfile = () => {
    const queryFn = () => api.get("/user/profile")
    const queryKey = ["get-profile"]

    return useQuery({ queryFn, queryKey })
}

export { useGetUserData, useGetTour, useGetTourId, useGetProfile }