"use client"

import styles from "@/components/module/TorSearch.module.css"
import Image from "next/image"
import { useState } from "react"
import SelectOption from "./SelectOption"
import CustomDatePicker from "./CustomDatePicker"
import Card from "./Card"
import { useGetTour } from "@/core/services/queries"
import { cityConvertP2E } from "@/core/utils/cityConvert"
const TorSearch = () => {
    const { data } = useGetTour();

    const [showOrigin, setShowOrigin] = useState("none")
    const [showDest, setShowDest] = useState("none")

    const [originValue, setOriginValue] = useState("")
    const [destValue, setDestValue] = useState("")

    const originName = cityConvertP2E(originValue);
    const destinationName = cityConvertP2E(destValue);


    const [newData, setNewData] = useState({})
    const searchHandler = () => {
        const filteredTours = data?.data.filter(tour =>
            tour.origin.name === originName &&
            tour.destination.name === destinationName
        );
        setNewData(filter => ({ ...filter, filteredTours }))
    }

    return (
        <>
            <div className={styles.container_fluid}>
                <div className={styles.text_top_search}>
                    <h2> <span> تورینو </span> برگزار کننده بهترین تور های داخلی و خارجی </h2>
                </div>
                <div className={styles.search} >
                    <div className={styles.origin} onClick={() => setShowOrigin("block")} onMouseLeave={() => setShowOrigin("none")}>
                        <Image width={500} height={300} src="/images/location.png" alt="location" />
                        <h3 >مبدا</h3>
                        <h3 className={styles.selected} >{originValue}</h3>
                        <div className={styles.select_origin} style={{ display: showOrigin }}>
                            <SelectOption setOriginValue={setOriginValue} showOrigin={showOrigin} data={data} />
                        </div>
                    </div>


                    <div className={styles.destination} onClick={() => setShowDest("block")} onMouseLeave={() => setShowDest("none")}>
                        <Image width={1000} height={800} src="/images/global-search.png" alt="global-search" />
                        <h3>مقصد</h3>
                        <h3 className={styles.selected} >{destValue}</h3>
                        <div className={styles.select_destination} style={{ display: showDest }}>
                            <SelectOption setDestValue={setDestValue} showDest={showDest} data={data} />
                        </div>
                    </div>


                    <div className={styles.select_date}>
                        <Image width={1000} height={800} src="/images/calendar.png" alt="calendar" />
                        <span>تاریخ</span>
                        <CustomDatePicker />
                    </div>
                    <div>
                        <button className={styles.button} onClick={searchHandler}>جستجو</button>
                    </div>
                </div>
            </div >
            <Card data={data} newData={newData} />
        </>
    )
}
export default TorSearch
