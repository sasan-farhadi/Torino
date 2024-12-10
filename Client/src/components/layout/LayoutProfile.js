import styles from "@/components/layout/LayoutProfile.module.css"
import Image from "next/image"
import Link from "next/link"
const LayoutProfile = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <aside className={styles.aside}>

                    <ul>
                        <li>
                            <Image />
                            <Link href="/profile">پروفایل</Link>
                        </li>
                        <li>
                            <Image />
                            <Link href="/profile/mytor">تورهای من</Link>
                        </li>
                        <li>
                            <Image />
                            <Link href="/profile/transaction">تراکنش ها</Link>
                        </li>
                    </ul>
                </aside>
                <div className={styles.form}>
                    {children}
                </div>
            </div>
        </div >
    )
}
export default LayoutProfile
