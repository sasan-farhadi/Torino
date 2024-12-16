"use client"

import { useGetTour } from "@/core/services/queries"
import Banner from "../module/Banner"
import Card from "../module/Card"
import Information from "../module/Information"
import Services from "../module/Services"
import TorSearch from "../module/TorSearch"
import WhyTorino from "../module/WhyTorino"


const HomePage = () => {
    const { data } = useGetTour()

    return (
        <div>
            <Banner />
            <TorSearch />
            <Card data={data} />
            <Information />
            <WhyTorino />
            <Services />
        </div>
    )
}

export default HomePage
