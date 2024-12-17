"use client"

import styles from "@/components/template/TorSale.module.css"
import Image from "next/image"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useState } from "react"

const TorSalePage = ({ data, mutate }) => {
    const [firstName, setFirstName] = useState("")

    const addHandler = () => {
        console.log(firstName)
        mutate({ firstName })
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.passenger}>
                    <div className={styles.details}>
                        <div>
                            <div className={styles.titr}>
                                <Image alt="frame" src="/images/frame.png" width={1000} height={800} />
                                <h3>مشخصات مسافر</h3>
                            </div>
                            <div className={styles.inputs}>
                                <input type="text" placeholder="نام و نام خانوادگی" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <input type="text" placeholder="کدملی" />
                                <DatePicker placeholder="تاریخ تولد" calendar={persian} locale={persian_fa} />
                                <select name="" id="">
                                    <option value="gender" >جنسیت</option>
                                    <option value="men">مرد</option>
                                    <option value="women">زن</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.torsale}>
                        <div className={styles.torname}>
                            <h1>تور هولیر</h1>
                            <p>5 روز و 4 شب</p>
                        </div>
                        <div className={styles.price}>
                            <h4>قیمت نهایی</h4>
                            <h2>17.500.000 <span>تومان</span></h2>
                            <button onClick={addHandler}>ثبت و خرید نهایی</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TorSalePage
