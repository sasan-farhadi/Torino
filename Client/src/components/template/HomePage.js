"use client"

import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import Banner from "../module/Banner"
import Card from "../module/Card"
import Information from "../module/Information"
import Services from "../module/Services"
import TorSearch from "../module/TorSearch"
import WhyTorino from "../module/WhyTorino"
import { useEffect } from "react"
import { allTour } from "@/core/services/mutations"

const HomePage = () => {
    const { isLoading, data } = useSuspenseQuery({
        queryKey: ['tour', allTour],
        queryFn: () => allTour(),
    })

    return (
        <div>
            <Banner />
            <TorSearch />
            <Card data={data} isLoading={isLoading} />
            <Information />
            <WhyTorino />
            <Services />
        </div>
    )
}

export default HomePage
