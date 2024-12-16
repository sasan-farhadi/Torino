import { useQuery } from "@tanstack/react-query"

import api from "../config/api"

const useGetUserData = (page) => {
    const queryFn = () => api.get(`/user/profile `)
    const queryKey = ["user-data"]

    return useQuery({ queryFn, queryKey })
}
export { useGetUserData }