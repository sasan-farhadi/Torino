import Image from "next/image"
import styles from "@/components/module/Banner.module.css"
const Banner = () => {
    return (
        <div className={styles.banner}>
            <Image src="/images/banner.jpg" alt="banner" width={3500} height={1600} />
        </div>
    )
}
export default Banner
