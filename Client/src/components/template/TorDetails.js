import styles from "@/components/template/TorDetails.module.css"
import Image from "next/image"
import Link from "next/link"

const TorDetails = () => {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <div className={styles.head}>

                    <div className={styles.imagetor}>
                        <Image src="/images/arbil1.png" width={1000} height={800} alt="torimage" />
                    </div>

                    <div className={styles.torname}>
                        <h1>تور هولیر</h1>
                        <p>5 روز و 4 شب</p>
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
                            <p>17.500.000 <span>تومان</span></p>
                            <button>
                                <Link href="/tor/sale">رزرو و خرید</Link>
                            </button>
                        </div>
                    </div>

                </div>
                <div className={styles.information}>
                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/routing-2.png" width={1000} height={800} />
                            <p>مبدا</p>
                        </div>
                        <h4>سنندج</h4>
                    </div>

                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/calendar1.png" width={1000} height={800} />
                            <p>تاریخ رفت</p>
                        </div>
                        <h4>23 مهر 1403</h4>
                    </div>

                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/calendar1.png" width={1000} height={800} />
                            <p> تاریخ برگشت </p>
                        </div>
                        <h4>28 مهر 1403</h4>
                    </div>

                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/bus.png" width={1000} height={800} />
                            <p>حمل و نقل</p>
                        </div>
                        <h4>اتوبوس</h4>
                    </div>
                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/profile-2user.png" width={1000} height={800} />
                            <p>ظرفیت</p>
                        </div>
                        <h4>حداکثر 30 نفر</h4>
                    </div>
                    <div className={styles.descriptions}>
                        <div>
                            <Image alt="pics" src="/images/security.png" width={1000} height={800} />
                            <p>بیمه</p>
                        </div>
                        <h4>بیمه 50 هزار دیناری</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TorDetails
