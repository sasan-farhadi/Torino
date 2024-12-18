"use client"

import styles from "@/components/template/TorSale.module.css"
import Image from "next/image"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useState } from "react"
import { dateCalc } from "@/core/utils/jalaliDate"
import toast from "react-hot-toast"
import { usePostOrder } from "@/core/services/mutations"
import { useRouter } from "next/navigation"

const TorSalePage = ({ torData }) => {
    const [form, setForm] = useState({ fullName: "", nationalCode: "", birthDate: "", gender: "male" })
    const res = dateCalc(torData?.startDate, torData?.endDate)
    const router = useRouter()
    const { mutate } = usePostOrder()

    const dateHandler = (e) => {
        const birthDate = new Date(e)
        setForm((data) => ({ ...data, birthDate }))
    }

    const onchangeHandler = (e) => {
        const { name, value } = e.target
        setForm((data) => ({ ...data, [name]: value }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!form.fullName || !form.nationalCode || !form.birthDate) return toast.error("فرم را تکمیل کنید")

        mutate(form, {
            onSuccess: () => {
                toast.success("تور با موفقیت خریداری شد");
                router.push("/profile/mytor")
            },
            onError: (error) => {
                if (error.message === "Access token required") {
                    return toast.error("ابتدا وارد حساب کاربری شوید")
                }
                toast.error(error.message)
            },
        });
    };

    return (
        <div>
            <div className={styles.container}>
                <form onSubmit={submitHandler}>
                    <div className={styles.passenger}>
                        <div className={styles.details}>
                            <div>
                                <div className={styles.titr}>
                                    <Image alt="frame" src="/images/frame.png" width={1000} height={800} />
                                    <h3>مشخصات مسافر</h3>
                                </div>
                                <div className={styles.inputs}>
                                    <input type="text" name="fullName" placeholder="نام و نام خانوادگی" value={form.fullName} onChange={onchangeHandler} />
                                    <input type="text" name="nationalCode" placeholder="کدملی" value={form.nationalCode} onChange={onchangeHandler} />
                                    <DatePicker placeholder="تاریخ تولد" calendar={persian} locale={persian_fa} onChange={dateHandler} />
                                    <select name="gender" id="" value={form.gender} onChange={onchangeHandler}>
                                        <option value="gender" disabled>جنسیت</option>
                                        <option value="men">مرد</option>
                                        <option value="female">زن</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.torsale}>
                            <div className={styles.torname}>
                                <h1>{torData?.title}</h1>
                                <p> {res} روز و {res - 1} شب </p>
                            </div>
                            <div className={styles.price}>
                                <h4>قیمت نهایی</h4>
                                <h2>{torData?.price} <span>تومان</span></h2>
                                <button type="submit">ثبت و خرید نهایی</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TorSalePage
