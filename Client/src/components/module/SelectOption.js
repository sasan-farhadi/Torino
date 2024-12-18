"use client"

import styles from "@/components/module/SelectOption.module.css"
import { cityConvertE2P } from "@/core/utils/cityConvert"
import Image from "next/image"

const SelectOption = ({ setOriginValue, setDestValue, showOrigin, showDest, data }) => {
    const { data: torData } = data || {}

    const uniqueCities = new Set();

    torData?.forEach(item => {
        uniqueCities.add(item.origin["name"]);
    });

    torData?.forEach(item => {
        uniqueCities.add(item.destination["name"]);
    });

    const clickHandler = e => {
        if (showOrigin === "block") {
            setOriginValue(e.target.id)
        }

        if (showDest === "block") {
            setDestValue(e.target.id)
        }
    }

    return (
        <div>
            <ul className={styles.select_option} onClick={clickHandler}>
                <li>پر تردد </li>
                {
                    Array.from(uniqueCities)?.map((city, index) => (
                        <li id={cityConvertE2P(city)} key={index}>
                            <Image alt="location" width={1000} height={800} src="/images/location.png" />
                            {cityConvertE2P(city)}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SelectOption;