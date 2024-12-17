"use client"

import TorSalePage from "@/components/template/TorSale"
import { useGetBasketId } from "@/core/services/mutations"

const Sale = ({ params }) => {
    const id = params.saleId
    const { data, mutate } = useGetBasketId(id)


    return (
        <div>
            <TorSalePage data={data} mutate={mutate} />
        </div>
    )
}

export default Sale
