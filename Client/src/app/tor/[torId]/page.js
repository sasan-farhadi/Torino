"use client"

import TorDetails from '@/components/template/TorDetails'
import { useGetTourId } from '@/core/services/queries'

const TorId = ({ params }) => {
    const id = params.torId
    const { data } = useGetTourId(id)
    return (
        <>
            <TorDetails data={data} />
        </>
    )
}

export default TorId
