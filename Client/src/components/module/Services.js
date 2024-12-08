import styles from "@/components/module/Services.module.css"
import Image from "next/image"

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.services}>
                    <div>
                        <Image src="/images/price.png" width={1000} height={800} alt="price" />
                    </div>
                    <div>
                        <h2>بصرفه ترین قیمت</h2>
                        <p>
                            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
                        </p>
                    </div>
                </div>


                <div className={styles.services}>
                    <div>
                        <Image src="/images/support.png" width={1000} height={800} alt="price" />
                    </div>
                    <div>
                        <h2> پشتیبانی </h2>
                        <p>
                            پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
                        </p>
                    </div>
                </div>


                <div className={styles.services}>
                    <div>
                        <Image src="/images/like.png" width={1000} height={800} alt="price" />
                    </div>
                    <div>
                        <h2> رضایت کاربران </h2>
                        <p>
                            رضایت بیش از 10هزار کاربر از تور های ما.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.hr}></div>
        </div>
    )
}

export default Services
