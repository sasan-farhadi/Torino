"use client"

import styles from "@/components/module/EmailConfirmInput.module.css"
import { useUpdateProfile } from "@/core/services/mutations"
import { useRouter } from "next/navigation"

import { useState } from "react"
import toast from "react-hot-toast"

const EmailConfirmInput = () => {
    const [email, setEmail] = useState("")
    const { data, mutate } = useUpdateProfile();

    const router = useRouter()

    console.log("$$$$$ res ", data)

    const editHandler = () => {
        mutate({ email }, {
            onSuccess: (
                toast.success("تغییرات انجام شد"),
                router.push("/profile")
            )
        })
    }

    return (
        <>
            <div className={styles.infoaccount}>
                <div>
                    <h3>اطلاعات حساب کاربری</h3>
                </div>
                <div className={styles.account}>
                    <div>
                        <p>شماره موبایل</p>
                        <p>09224521125</p>
                    </div>
                    <div>
                        <input type="email" placeholder="آدرس ایمیل" value={email} onChange={e => setEmail(e.target.value)} />
                        <button onClick={editHandler}>تایید</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailConfirmInput