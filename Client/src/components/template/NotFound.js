import styles from "@/components/template/NotFound.module.css"
import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.linktohomepage}>
                <h1>صفحه مورد نظر یافت نشد!</h1>
                <button><Link href="/">بازگشت به صفحه اصلی</Link></button>
            </div>
            <div className={styles.erroricon}>
                <Image src="/images/error404.png" width={1000} height={800} />
            </div>
        </div>
    )
}

export default NotFound
