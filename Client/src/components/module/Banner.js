import Image from "next/image"
import styles from "@/components/module/Banner.module.css"
const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.background}>
                <Image src="/images/7.jpg" alt="banner" width={3500} height={1600} />
            </div>
            <div className={styles.airplan}>
                <Image className={styles.airplan} src="/images/8.png" alt="banner" width={1000} height={800} />
            </div>
        </div>
    )
}
export default Banner
