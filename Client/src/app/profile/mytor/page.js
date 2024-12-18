"use client"

import MyTorPage from "@/components/template/MyTorPage"
import { useGetMyTours } from "@/core/services/queries"

const MyTor = () => {
    const { data } = useGetMyTours()
    return (
        <div>
            <MyTorPage data={data} />
        </div>
    )
}

export default MyTor
