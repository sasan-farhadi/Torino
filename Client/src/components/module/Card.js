import styles from "@/components/module/Card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card = () => {
    return (
        <div className={styles.container}>
            <h3>همه تورها</h3>
            <div className={styles.cards}>
                <Link href={`/tor/${1}`}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <Image width={1000} height={800} src="/images/arbil.png" alt="" />
                        </div>
                        <div className={styles.card_content}>
                            <h4> اربیل </h4>
                            <p>مهر ماه . 3 روزه - پرواز - هتل 3 سفر به عراق و دیدندنی های زیاد در این مسیر </p>
                        </div>
                        <div className={styles.dash} />
                        <div className={styles.reserve_price}>
                            <button>رزرو</button>
                            <p><span>17.500.000</span> تومان</p>
                        </div>
                    </div>
                </Link>

                <Link href={`/tor/${1}`}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <Image width={1000} height={800} src="/images/arbil.png" alt="" />
                        </div>
                        <div className={styles.card_content}>
                            <h4> اربیل </h4>
                            <p>مهر ماه . 3 روزه - پرواز - هتل 3 سفر به عراق و دیدندنی های زیاد در این مسیر </p>
                        </div>
                        <div className={styles.dash} />
                        <div className={styles.reserve_price}>
                            <button>رزرو</button>
                            <p><span>17.500.000</span> تومان</p>
                        </div>
                    </div>
                </Link>

                <Link href={`/tor/${1}`}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <Image width={1000} height={800} src="/images/arbil.png" alt="" />
                        </div>
                        <div className={styles.card_content}>
                            <h4> اربیل </h4>
                            <p>مهر ماه . 3 روزه - پرواز - هتل 3 سفر به عراق و دیدندنی های زیاد در این مسیر </p>
                        </div>
                        <div className={styles.dash} />
                        <div className={styles.reserve_price}>
                            <button>رزرو</button>
                            <p><span>17.500.000</span> تومان</p>
                        </div>
                    </div>
                </Link>

                <Link href={`/tor/${1}`}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <Image width={1000} height={800} src="/images/arbil.png" alt="" />
                        </div>
                        <div className={styles.card_content}>
                            <h4> اربیل </h4>
                            <p>مهر ماه . 3 روزه - پرواز - هتل 3 سفر به عراق و دیدندنی های زیاد در این مسیر </p>
                        </div>
                        <div className={styles.dash} />
                        <div className={styles.reserve_price}>
                            <button>رزرو</button>
                            <p><span>17.500.000</span> تومان</p>
                        </div>
                    </div>
                </Link>

                <Link href={`/tor/${1}`}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <Image width={1000} height={800} src="/images/arbil.png" alt="" />
                        </div>
                        <div className={styles.card_content}>
                            <h4> اربیل </h4>
                            <p>مهر ماه . 3 روزه - پرواز - هتل 3 سفر به عراق و دیدندنی های زیاد در این مسیر </p>
                        </div>
                        <div className={styles.dash} />
                        <div className={styles.reserve_price}>
                            <button>رزرو</button>
                            <p><span>17.500.000</span> تومان</p>
                        </div>
                    </div>
                </Link>

                <Link href={`/tor/${1}`}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <Image width={1000} height={800} src="/images/arbil.png" alt="" />
                        </div>
                        <div className={styles.card_content}>
                            <h4> اربیل </h4>
                            <p>مهر ماه . 3 روزه - پرواز - هتل 3 سفر به عراق و دیدندنی های زیاد در این مسیر </p>
                        </div>
                        <div className={styles.dash} />
                        <div className={styles.reserve_price}>
                            <button>رزرو</button>
                            <p><span>17.500.000</span> تومان</p>
                        </div>
                    </div>
                </Link>

                <Link href={`/tor/${1}`}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <Image width={1000} height={800} src="/images/arbil.png" alt="" />
                        </div>
                        <div className={styles.card_content}>
                            <h4> اربیل </h4>
                            <p>مهر ماه . 3 روزه - پرواز - هتل 3 سفر به عراق و دیدندنی های زیاد در این مسیر </p>
                        </div>
                        <div className={styles.dash} />
                        <div className={styles.reserve_price}>
                            <button>رزرو</button>
                            <p><span>17.500.000</span> تومان</p>
                        </div>
                    </div>
                </Link>

                <Link href={`/tor/${1}`}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <Image width={1000} height={800} src="/images/arbil.png" alt="" />
                        </div>
                        <div className={styles.card_content}>
                            <h4> اربیل </h4>
                            <p>مهر ماه . 3 روزه - پرواز - هتل 3 سفر به عراق و دیدندنی های زیاد در این مسیر </p>
                        </div>
                        <div className={styles.dash} />
                        <div className={styles.reserve_price}>
                            <button>رزرو</button>
                            <p><span>17.500.000</span> تومان</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div >

    )
}

export default Card
