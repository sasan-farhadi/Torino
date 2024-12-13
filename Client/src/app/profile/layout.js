"use client"
import LayoutProfile from "@/components/layout/LayoutProfile"
import { getCookie } from "@/core/utils/cookie"
import { redirect } from "next/navigation"

const Layouts = ({ children }) => {
    const token = getCookie("accessToken")
    if (!token) redirect("/")
    return (
        <div>
            <LayoutProfile >
                {children}
            </LayoutProfile>
        </div>
    )
}

export default Layouts
