"use client"

import styles from "@/components/template/TorDetails.module.css"
import { sp } from "@/core/utils/number"

import Image from "next/image"
import Link from "next/link"

import { dateCalc, jalali } from "@/core/utils/jalaliDate"
import Loader from "../module/Loader"

const TorDetails = ({ data }) => {

    if (!data) return <Loader />

    const { id, title, startDate, origin, endDate, fleetVehicle, availableSeats, price, insurance, image } = data
    const { name } = origin
    const res = dateCalc(startDate, endDate)
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <div className={styles.head}>
                    <div className={styles.imagetor}>
                        <Image src={image} width={1000} height={800} alt="torimage" />
                    </div>
                    <div className={styles.torname}>
                        <div className={styles.tor_tite}>
                            <h1>{title}</h1>
                            <p> {res} روز و {res - 1} شب </p>
                        </div>
                        <div className={styles.infotor}>
                            <div>
                                <Image src="/images/user-tick.png" width={1000} height={800} alt="toricon" />
                                <h3>تورلیدر از مبدا</h3>
                            </div>
                            <div>
                                <Image src="/images/map.png" width={1000} height={800} alt="toricon" />
                                <h3>برنامه سفر</h3>
                            </div>
                            <div>
                                <Image src="/images/medal-star.png" width={1000} height={800} alt="toricon" />
                                <h3>تضمین کیفیت</h3>
                            </div>
                        </div>
                        <div className={styles.reservebtn}>
                            <p>{sp(price)} <span>تومان</span></p>
                            <Link href="/tor/sale">
                                <button>
                                    رزرو و خرید
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className={styles.information}>
                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/routing-2.png" width={1000} height={800} />
                            <p>مبدا</p>
                        </div>
                        <h4>{name}</h4>
                    </div>

                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/calendar1.png" width={1000} height={800} />
                            <p>تاریخ رفت</p>
                        </div>
                        <h4>{jalali(startDate)}</h4>
                    </div>

                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/calendar1.png" width={1000} height={800} />
                            <p> تاریخ برگشت </p>
                        </div>
                        <h4>{jalali(endDate)}</h4>
                    </div>

                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/bus.png" width={1000} height={800} />
                            <p>حمل و نقل</p>
                        </div>
                        <h4>{fleetVehicle}</h4>
                    </div>
                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/profile-2user.png" width={1000} height={800} />
                            <p>ظرفیت</p>
                        </div>
                        <h4>حداکثر {availableSeats} نفر</h4>
                    </div>
                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/security.png" width={1000} height={800} />
                            <p>بیمه</p>
                        </div>
                        {
                            insurance ? <h4>بیمه دارد</h4> : <h4>بیمه ندارد</h4>
                        }
                    </div>
                </div>
                <div className={styles.reservebtnres}>
                    <Link href="/tor/sale">
                        <button>
                            رزرو و خرید
                        </button>
                    </Link>
                    <p>17.500.000 <span>تومان</span></p>
                </div>
            </div>
        </div>
    )
}

export default TorDetails
