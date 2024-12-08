import styles from "@/components/layout/Footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.about}>
                    <h2>تورینو</h2>
                    <Link href="#">درباره ما</Link>
                    <Link href="#">تماس با ما</Link>
                    <Link href="#">چرا تورینو</Link>
                    <Link href="#">بیمه مسافرتی</Link>
                </div>
                <div className={styles.customer}>
                    <h2>خدمات مشتریان</h2>
                    <Link href="#">پشتیبانی آنلاین</Link>
                    <Link href="#">راهنمای خرید</Link>
                    <Link href="#">راهنمای استرداد</Link>
                    <Link href="#">پرسش و پاسخ</Link>
                </div>
                <div className={styles.certificate}>
                    <div className={styles.contact}>
                        <Image alt="image" src="/images/logo.png" width={1000} height={800} />
                        <h4>تلفن پشتیبانی : 8574-021</h4>
                    </div>
                    <div className={styles.certificate_icon}>
                        <Image alt="image" src="/images/air.png" width={1000} height={800} />
                        <Image alt="image" src="/images/passenger.png" width={1000} height={800} />
                        <Image alt="image" src="/images/barcode.png" width={1000} height={800} />
                        <Image alt="image" src="/images/samandehi.png" width={1000} height={800} />
                        <Image alt="image" src="/images/aira.png" width={1000} height={800} />
                    </div>
                </div>
            </footer>
            <div className={styles.copy}>
                <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
            </div>
        </>
    )
}

export default Footer
