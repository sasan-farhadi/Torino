"use client"

import TorDetails from '@/components/template/TorDetails'
import React from 'react'
import { allTour } from "@/core/services/mutations"
import { useSuspenseQuery } from "@tanstack/react-query"

const TorId = ({ params }) => {
    const id = params.torId
    const { data } = useSuspenseQuery({
        queryKey: [`tour`, id],
        queryFn: () => allTour(id),
    })
    console.log(data)
    return (
        <>
            <TorDetails data={data} />
        </>
    )
}

export default TorId
