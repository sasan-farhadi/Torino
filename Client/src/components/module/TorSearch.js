"use client"

import styles from "@/components/module/TorSearch.module.css"
import Image from "next/image"
import { select } from "@/components/module/select"
const TorSearch = () => {
    const changeHandler = () => {
        console.log("open")
    }
    return (
        <div className={styles.container_fluid}>
            <div className={styles.text_top_search}>
                <h2> <span> تورینو </span> برگزار کننده بهترین تور های داخلی و خارجی </h2>
            </div>
            <div className={styles.search}>
                <div className={styles.select} onClick={changeHandler}>
                    <Image width={1000} height={800} src="/images/location.png" alt="location" />
                    <h3>مبدا</h3>
                    <h3 className={styles.selected}>شیراز</h3>
                    <div className={styles.select_origin}>
                        {select}
                    </div>
                </div>
                <div className={styles.select}>
                    <Image width={1000} height={800} src="/images/global-search.png" alt="global-search" />
                    <h3>مقصد</h3>
                    <h3 className={styles.selected}>شیراز</h3>
                    <div className={styles.select_destination}>
                        {select}
                    </div>
                </div>
                <div className={styles.select}>
                    <Image width={1000} height={800} src="/images/calendar.png" alt="calendar" />
                    <span>تاریخ</span>
                    <input type="date" />
                </div>
                <div>
                    <button>جستجو</button>
                </div>
            </div>
        </div>

    )
}

export default TorSearch
