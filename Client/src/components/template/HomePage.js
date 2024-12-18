"use client"

import Banner from "../module/Banner"
import Information from "../module/Information"
import Services from "../module/Services"
import TorSearch from "../module/TorSearch"
import WhyTorino from "../module/WhyTorino"


const HomePage = () => {

    return (
        <div>
            <Banner />
            <TorSearch />
            <Information />
            <WhyTorino />
            <Services />
        </div>
    )
}

export default HomePage
