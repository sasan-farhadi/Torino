import styles from "@/components/module/PersonalEditForm.module.css"
import Image from "next/image"
import Link from "next/link"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const PersonalEditForm = () => {
    return (
        <>
            <div className={styles.infopersonal}>
                <div className={styles.prsonal}>
                    <h3>اطلاعات شخصی</h3>
                </div>
                <div className={styles.infoname}>
                    <div>
                        <input type="text" placeholder="نام و نام خانوادگی" />
                    </div>
                    <div>
                        <input type="text" placeholder="کدملی" />
                    </div>
                    <div>
                        <DatePicker placeholder="تاریخ تولد" calendar={persian} locale={persian_fa} />
                    </div>
                    <div>
                        <select name="" id="">
                            <option value="gender" >جنسیت</option>
                            <option value="men">مرد</option>
                            <option value="women">زن</option>
                        </select>
                    </div>
                </div>
                <div className={styles.button}>
                    <button>تایید</button>
                    <button>انصراف</button>
                </div>
            </div>
        </>
    )
}

export default PersonalEditForm
