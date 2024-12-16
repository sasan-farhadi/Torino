"use client"

import TorDetails from '@/components/template/TorDetails'
import React from 'react'
import { allTour } from "@/core/services/mutations"
import { useSuspenseQuery } from "@tanstack/react-query"
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
