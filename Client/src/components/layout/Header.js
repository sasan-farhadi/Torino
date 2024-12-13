"use client"

import styles from "@/components/layout/Header.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import HambergerMenu from "../module/HambergerMenu"
import AuthForm from "../template/auth"
import { getCookie, logoutHandler } from "@/core/utils/cookie"

const Header = () => {
    const token = getCookie("accessToken")

    const [show, setShow] = useState("none")
    const [showHamberger, setShowHamberger] = useState("none")
    return (
        <header className={styles.header}>
            <div onClick={() => setShowHamberger("none")} style={{ display: showHamberger }}>
                <HambergerMenu />
            </div>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.hambergerMenu}>
                        <div className={styles.hamber}>
                            <Image alt="hamberger" src="/images/Group 46.png" width={1000} height={800} onClick={() => setShowHamberger("block")} />
                        </div>
                    </div>
                    <div className={styles.menu_right}>
                        <Link href="/"><Image src="/images/logo.png" alt="logo" width={800} height={1000} /></Link>
                        <Link href="/" className={styles.active}> صفحه اصلی </Link>
                        <Link href="#"> خدمات گردشگری </Link>
                        <Link href="#"> درباره ما </Link>
                        <Link href="#"> تماس با ما </Link>
                    </div>
                    <div className={styles.menu_left}>
                        {
                            !token ? (
                                <>
                                    <div className={styles.signin}>
                                        <AuthForm>
                                        </AuthForm>
                                    </div>
                                    <div className={styles.login}>
                                        <AuthForm>
                                        </AuthForm>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.menuprofile} onClick={() => setShow("block")} onMouseLeave={() => setShow("none")}  >
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
                                                    <Link href="/profile"><p> اطلاعات حساب کاربری </p></Link>
                                                </li>
                                                <li onClick={logoutHandler} >
                                                    <Image alt="image" src="/images/logout.png" width={1000} height={800} />
                                                    <p onClick={logoutHandler}> خروج از حساب کاربری </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header
