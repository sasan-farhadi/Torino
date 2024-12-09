"use client"

import styles from "@/components/layout/Header.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [show, setShow] = useState("none")

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.menu_right}>
                        <Image src="/images/logo.png" alt="logo" width={800} height={1000} />
                        <Link href="/" className={styles.active}> صفحه اصلی </Link>
                        <Link href="#"> خدمات گردشگری </Link>
                        <Link href="#"> درباره ما </Link>
                        <Link href="#"> تماس با ما </Link>
                    </div>
                    <div className={styles.menu_left}>
                        {
                            !true ? (<button>
                                <Image src="/images/user-icon.png" alt="user-icon" width={800} height={1000} />
                                <Link href="/auth/signin">ورود | ثبت نام</Link>
                            </button>) : (
                                <>
                                    <div className={styles.menuprofile} onMouseOver={() => setShow("block")} onMouseLeave={() => setShow("none")}  >
                                        <Image alt="image" src="/images/user-icon.png" width={1000} height={800} />
                                        <p> 09179212443 </p>
                                        <Image alt="image" src="/images/arrow-down.png" width={1000} height={800} />
                                        <div className={styles.showprofile} style={{ display: show }}>
                                            <ul>
                                                <li>
                                                    <div>
                                                        <Image alt="image" src="/images/user-icon1.png" width={1000} height={800} />
                                                    </div>
                                                    <p> 09179212443 </p>
                                                </li>
                                                <li>
                                                    <Image alt="image" src="/images/user-icon3.png" width={1000} height={800} />
                                                    <p> اطلاعات حساب کاربری </p>
                                                </li>
                                                <li>
                                                    <Image alt="image" src="/images/logout.png" width={1000} height={800} />
                                                    <p> خروج از حساب کاربری </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </>
                            )
                        }
                    </div>
                </div>
            </div></header >

    )
}

export default Header
