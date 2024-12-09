"use client"

import styles from "@/components/module/TorSearch.module.css"
import Image from "next/image"
import { useState } from "react"
import SelectOption from "./SelectOption"
import CustomDatePicker from "./CustomDatePicker"
const TorSearch = () => {
    const [showOrigin, setShowOrigin] = useState("none")
    const [showDest, setShowDest] = useState("none")
    const [originValue, setOriginValue] = useState("")
    const [destValue, setDestValue] = useState("")
    return (
        <div className={styles.container_fluid}>
            <div className={styles.text_top_search}>
                <h2> <span> تورینو </span> برگزار کننده بهترین تور های داخلی و خارجی </h2>
            </div>
            <div className={styles.search} >
                <div className={styles.origin} onClick={() => setShowOrigin("block")} onMouseLeave={() => setShowOrigin("none")}>
                    <Image width={500} height={300} src="/images/location.png" alt="location" />
                    <h3 >مبدا</h3>
                    <h3 className={styles.selected}>{originValue}</h3>
                    <div className={styles.select_origin} style={{ display: showOrigin }}>
                        <SelectOption setOriginValue={setOriginValue} showOrigin={showOrigin} />
                    </div>
                </div>


                <div className={styles.destination} onClick={() => setShowDest("block")} onMouseLeave={() => setShowDest("none")}>
                    <Image width={1000} height={800} src="/images/global-search.png" alt="global-search" />
                    <h3>مقصد</h3>
                    <h3 className={styles.selected} >{destValue}</h3>
                    <div className={styles.select_destination} style={{ display: showDest }}>
                        <SelectOption setDestValue={setDestValue} showDest={showDest} />
                    </div>
                </div>


                <div className={styles.select_date}>
                    <Image width={1000} height={800} src="/images/calendar.png" alt="calendar" />
                    <span>تاریخ</span>
                    <CustomDatePicker />
                </div>
                <div>
                    <button className={styles.button}>جستجو</button>
                </div>
            </div>
        </div >

    )
}
export default TorSearch
