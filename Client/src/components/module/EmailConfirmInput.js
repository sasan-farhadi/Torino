"use client"

import styles from "@/components/module/EmailConfirmInput.module.css"
import { useUpdateProfile } from "@/core/services/mutations"
import { useGetProfile } from "@/core/services/queries"

import { useState } from "react"
import toast from "react-hot-toast"

const EmailConfirmInput = ({ setShowEditEmail }) => {
    const { data: profiles } = useGetProfile()

    const [email, setEmail] = useState(profiles.data.email)
    const { mutate } = useUpdateProfile();

    const editHandler = () => {
        mutate(
            { email },
            {
                onSuccess: () => {
                    setShowEditEmail(false);
                    toast.success("ایمیل با موفقیت ثبت شد")
                },
                onError: (error) => {
                    toast.error("خطا :", error.message);
                },
            }
        );
    };


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