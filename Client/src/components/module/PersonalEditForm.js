"use client"

import styles from "@/components/module/PersonalEditForm.module.css"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useUpdateProfile } from "@/core/services/mutations"
import { useState } from "react"
import toast from "react-hot-toast"
import { useGetProfile } from "@/core/services/queries"
import { useRouter } from "next/navigation"

const PersonalEditForm = ({ setShowEditPersonal }) => {
    const { data, mutate } = useUpdateProfile();
    const { data: profiles } = useGetProfile()
    const { data: profileData } = profiles

    const [firstName, setFirstName] = useState(profileData.firstName || "")
    const [nationalCode, setNationalCode] = useState(profileData.nationalCode || "")
    const [birthDate, setBirthDate] = useState("")
    const [gender, setGender] = useState(profileData.gender || "")


    const dateHandler = (e) => {
        const date = new Date(e)
        setBirthDate({ date })
    }

    const editHandler = () => {
        if (!gender) return toast.error("جنسیت را انتخاب کنید")
        if (nationalCode.length > 10) return toast.error("کد ملی اشتباه است")
        mutate({ firstName, nationalCode, birthDate, gender })
        if (data) {
            toast.success("ویرایش با موفقیت انجام شد")
        }
        setShowEditPersonal(false)
        location.reload()
    }

    return (
        <>
            <div className={styles.infopersonal}>
                <div className={styles.prsonal}>
                    <h3>اطلاعات شخصی</h3>
                </div>
                <div className={styles.infoname}>
                    <div>
                        <input type="text" placeholder="نام و نام خانوادگی" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" placeholder="کدملی" value={nationalCode} onChange={e => setNationalCode(e.target.value)} />
                    </div>
                    <div>
                        <DatePicker placeholder="تاریخ تولد" calendar={persian} locale={persian_fa} onChange={dateHandler} />
                    </div>
                    <div>
                        <select value={gender} onChange={e => setGender(e.target.value)}>
                            <option id="gender" >جنسیت</option>
                            <option value="male">مرد</option>
                            <option value="female">زن</option>
                        </select>
                    </div>
                </div>
                <div className={styles.button}>
                    <button onClick={editHandler}>تایید</button>
                    <button onClick={() => setShowEditPersonal(false)}>
                        انصراف
                    </button>
                </div>
            </div >
        </>
    )
}

export default PersonalEditForm