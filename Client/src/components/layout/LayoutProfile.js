import styles from "@/components/layout/LayoutProfile.module.css"
import Image from "next/image"
import Link from "next/link"
const LayoutProfile = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <aside className={styles.aside}>
                    <ul>
                        <li className={styles.active}>
                            <Image width={1000} height={800} alt="pics" src="/images/profile.png" />
                            <Link href="/profile">پروفایل</Link>
                        </li>
                        <li>
                            <Image width={1000} height={800} alt="pics" src="/images/sun-fog.png" />
                            <Link href="/profile/mytor">تورهای من</Link>
                        </li>
                        <li>
                            <Image width={1000} height={800} alt="pics" src="/images/convert-card.png" />
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
