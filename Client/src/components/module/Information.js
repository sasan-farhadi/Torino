import styles from "@/components/module/Information.module.css"
import Image from "next/image"

const Information = () => {
    return (
        <div className={styles.container}>
            <div className={styles.information}>
                <div className={styles.banner_info}>
                    <div>
                        <h1>  خرید تلفنی از <span> تورینو  </span> </h1>
                        <p> به هر کجا که می خواهید! </p>
                    </div>
                    <div className={styles.image_man}>
                        <Image width={1000} height={800} src="/images/man.png" alt="man" />
                    </div>
                </div>
                <div className={styles.phone_info}>
                    <div className={styles.number}>
                        <h2> 021-1840 </h2>
                        <Image width={1000} height={800} src="/images/phone.png" alt="phone" />
                    </div>
                    <div className={styles.button}>
                        <button>اطلاعات بیشتر</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Information
