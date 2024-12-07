import styles from "@/components/layout/Header.module.css"
import Image from "next/image"

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.menu_right}>
                        <Image src="/images/logo.png" alt="logo" width={800} height={1000} />
                        <a href="#" className={styles.active}> صفحه اصلی </a>
                        <a href="#"> خدمات گردشگری </a>
                        <a href="#"> درباره ما </a>
                        <a href="#"> تماس با ما </a>
                    </div>
                    <div className={styles.menu_left}>
                        <button>
                            <Image src="/images/user-icon.png" alt="user-icon" width={800} height={1000} />
                            <p>ورود | ثبت نام</p>
                        </button>
                    </div>
                </div>
            </div></header>

    )
}

export default Header
