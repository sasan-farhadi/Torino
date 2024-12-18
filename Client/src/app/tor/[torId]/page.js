"use client"

import TorDetails from '@/components/template/TorDetails'
import { useGetBasketId } from '@/core/services/mutations'
import { useGetTourId } from '@/core/services/queries'

const TorId = ({ params }) => {
    const id = params.torId
    const { data } = useGetTourId(id)
    const { data: basket, mutate } = useGetBasketId(id)

    return (
        <>
            <TorDetails data={data} basket={basket} mutate={mutate} />
        </>
    )
}

export default TorId
