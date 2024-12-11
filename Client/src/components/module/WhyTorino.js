import styles from "@/components/module/WhyTorino.module.css"
import Image from "next/image"

const WhyTorino = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.why}>
                    <div>
                        <h1>؟</h1>
                    </div>
                    <h2>چرا <span>تورینو</span> ؟</h2>
                </div>
                <div className={styles.why_tour}>
                    <div className={styles.info_why}>
                        <div className={styles.why}>
                            <div>
                                <h1>؟</h1>
                            </div>
                            <h2>چرا <span>تورینو</span> ؟</h2>
                        </div>
                        <div className={styles.info_text}>
                            <h3>تور طبیعت گردی و تاریخی</h3>
                            <p>اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک
                                اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از
                                جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را
                                خریداری کنید.</p>
                        </div>
                    </div>
                    <div className={styles.slide_image}>
                        <Image src="/images/slide1.png" alt="slide1" width={1000} height={800} />
                        <Image src="/images/slide2.png" alt="slide2" width={1000} height={800} />
                        <Image src="/images/slide3.png" alt="slide3" width={1000} height={800} />
                        <Image src="/images/slide4.png" alt="slide4" width={1000} height={800} />
                    </div>
                    <div className={styles.next_prev}>
                        <Image src="/images/arrow-right.png" width={1000} height={800} alt="arrow-right" />
                        <p>1/4</p>
                        <Image src="/images/arrow-left.png" width={1000} height={800} alt="arrow-left" />
                    </div>
                </div >
            </div>
            <div className={styles.hr} ></div>
        </>
    )
}

export default WhyTorino
