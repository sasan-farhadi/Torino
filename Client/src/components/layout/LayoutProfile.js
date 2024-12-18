
"use client"

import styles from "@/components/layout/LayoutProfile.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
const LayoutProfile = ({ children }) => {
    const [active, setActive] = useState("پروفایل")
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <aside className={styles.aside}>
                    <ul>
                        <Link href="/profile" onClick={() => setActive("پروفایل")}>
                            <li className={active === "پروفایل" ? styles.active : null}>
                                <Image width={1000} height={800} alt="pics" src="/images/profile.png" />
                                پروفایل
                            </li>
                        </Link>
                        <Link href="/profile/mytor" onClick={() => setActive("تورهای من")}>
                            <li className={active === "تورهای من" ? styles.active : null}>
                                <Image width={1000} height={800} alt="pics" src="/images/sun-fog.png" />
                                تورهای من
                            </li>
                        </Link>
                        <Link href="/profile/transaction" onClick={() => setActive("تراکنش ها")}>
                            <li className={active === "تراکنش ها" ? styles.active : null} >
                                <Image width={1000} height={800} alt="pics" src="/images/convert-card.png" />
                                تراکنش ها
                            </li>
                        </Link>
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
