import styles from "@/components/template/MyTorPage.module.css"
import Image from "next/image"
import Loader from "../module/Loader"
import { jalali } from "@/core/utils/jalaliDate"
import { cityConvertE2P } from "@/core/utils/cityConvert"
const MyTorPage = ({ data }) => {
    if (!data) return <Loader />

    return (
        <div className={styles.main}>
            {
                data?.data.map(x => (
                    < div className={styles.card} key={x.id} >
                        <div className={styles.mytor}>
                            <div className={styles.info}>
                                <Image alt="pics" src="/images/sun-fog1.png" width={1000} height={800} />
                                <h4> {x.title} </h4>
                            </div>
                            <div className={styles.info}>
                                <Image alt="pics" src="/images/airplane1.png" width={1000} height={800} />
                                <h4> {x.fleetVehicle} </h4>
                            </div>
                            <div className={styles.info}>
                                {
                                    x.availableSeats >= 1 ? <p style={{ background: "#D1B9004D" }}>در حال برگزاری</p> : <p> به اتمام رسیده </p>
                                }
                            </div>
                        </div>

                        <div className={styles.tor}>
                            <div>

                                <h3>{cityConvertE2P(x.origin["name"])} به {cityConvertE2P(x.destination["name"])} ، </h3>
                                <h4>{jalali(x.startDate)}</h4>
                            </div>
                            <div>
                                <h3>تاریخ برگشت ، </h3>
                                <h4>{jalali(x.endDate)}</h4>
                            </div>
                            <div></div>
                        </div>

                        <div className={styles.tornumber}>
                            <div>
                                <h3>شماره تور</h3>
                                <h4>{x.id}</h4>
                            </div>
                            <div className={styles.dash}></div>
                            <div>
                                <h3>مبلغ پرداخت شده کرایه</h3>
                                <h4>{x.price} <span>تومان</span></h4>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default MyTorPage
