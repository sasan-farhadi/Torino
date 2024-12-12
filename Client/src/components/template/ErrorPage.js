import styles from "@/components/template/ErrorPage.module.css"
import Image from "next/image"
import Link from "next/link"

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.linktohomepage}>
                <h1>اتصال با سرور برقرار نیست!</h1>
                <h2><Link href="/">لطفا بعدا دوباره امتحان کنید.</Link></h2>
            </div>
            <div className={styles.erroricon}>
                <Image alt="pics" src="/images/ErrorLampRobot.png" width={1000} height={800} />
            </div>
        </div >
    )
}

export default ErrorPage
