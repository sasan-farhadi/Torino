"use client"

import TorSalePage from "@/components/template/TorSale"
import { useGetTourId } from "@/core/services/queries"

const Sale = ({ params }) => {
    const id = params.saleId
    const { data: torData } = useGetTourId(id)

    return (
        <div>
            <TorSalePage torData={torData} />
        </div>
    )
}

export default Sale
