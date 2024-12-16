"use client"

import LayoutProfile from "@/components/layout/LayoutProfile"
import Loader from "@/components/module/Loader"
import { useGetUserData } from "@/core/services/queries"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Layouts = ({ children }) => {
    const router = useRouter()
    const { isPending, data } = useGetUserData()

    useEffect(() => {
        if (!isPending && !data?.data) router.push("/")
    }, [isPending])

    if (isPending) return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
        <Loader />
    </div>

    return (
        <div>
            <LayoutProfile >
                {children}
            </LayoutProfile>
        </div>
    )
}

export default Layouts
