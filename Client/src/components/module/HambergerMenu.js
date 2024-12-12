import styles from "@/components/module/HambergerMenu.module.css"
import Image from "next/image"
import Link from "next/link"

const HambergerMenu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.right} >
                <Link href="/">
                    <div>
                        <Image alt="pics" src="/images/home-2.png" width={1000} height={800} />
                        <p> صفحه اصلی </p>
                    </div>
                </Link>
                <Link href="#">
                    <div>
                        <Image alt="pics" src="/images/airplane-square.png" width={1000} height={800} />
                        <p> خدمات گردشگری </p>
                    </div>
                </Link>
                <Link href="#">
                    <div>
                        <Image alt="pics" src="/images/volume-low.png" width={1000} height={800} />
                        <p> درباره ما </p>
                    </div>
                </Link>
                <Link href="#">
                    <div>
                        <Image alt="pics" src="/images/call.png" width={1000} height={800} />
                        <p> تماس با ما </p>
                    </div>
                </Link>
            </div>
            <div className={styles.left}>

            </div>
        </div >
    )
}

export default HambergerMenu
