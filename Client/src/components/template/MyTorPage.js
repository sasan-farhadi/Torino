import styles from "@/components/template/MyTorPage.module.css"
import Image from "next/image"
const MyTorPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.mytor}>
                    <div className={styles.info}>
                        <Image alt="pics" src="/images/sun-fog1.png" width={1000} height={800} />
                        <h4> تور شیراز </h4>
                    </div>
                    <div className={styles.info}>
                        <Image alt="pics" src="/images/airplane1.png" width={1000} height={800} />
                        <h4> سفر با هواپیما </h4>
                    </div>
                    <div className={styles.info}>
                        <p> به اتمام رسیده </p>
                    </div>
                </div>

                <div className={styles.tor}>
                    <div>
                        <h3>تهران به سلیمانیه ، </h3>
                        <h4>دوشنبه 15 شهریور 1402</h4>
                    </div>
                    <div>
                        <h3>تاریخ برگشت ، </h3>
                        <h4>جمعه 19 شهریور 1402</h4>
                    </div>
                    <div></div>
                </div>

                <div className={styles.tornumber}>
                    <div>
                        <h3>شماره موتور</h3>
                        <h4>102095404</h4>
                    </div>
                    <div className={styles.dash}></div>
                    <div>
                        <h3>مبلغ پرداخت شده کرایه</h3>
                        <h4>18.000.000 <span>تومان</span></h4>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.mytor}>
                    <div className={styles.info}>
                        <Image alt="pics" src="/images/sun-fog1.png" width={1000} height={800} />
                        <h4> تور شیراز </h4>
                    </div>
                    <div className={styles.info}>
                        <Image alt="pics" src="/images/airplane1.png" width={1000} height={800} />
                        <h4> سفر با هواپیما </h4>
                    </div>
                    <div className={styles.info}>
                        <p> به اتمام رسیده </p>
                    </div>
                </div>

                <div className={styles.tor}>
                    <div>
                        <h3>تهران به سلیمانیه ، </h3>
                        <h4>دوشنبه 15 شهریور 1402</h4>
                    </div>
                    <div>
                        <h3>تاریخ برگشت ، </h3>
                        <h4>جمعه 19 شهریور 1402</h4>
                    </div>
                    <div></div>
                </div>

                <div className={styles.tornumber}>
                    <div>
                        <h3>شماره تور</h3>
                        <h4>102095404</h4>
                    </div>
                    <div className={styles.dash}></div>
                    <div>
                        <h3>مبلغ پرداخت شده</h3>
                        <h4>18.000.000 <span>تومان</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTorPage
