import styles from "@/components/module/CustomDatePicker.module.css"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const CustomDatePicker = () => {
    return (
        <div className={styles.container}>
            <DatePicker calendar={persian} locale={persian_fa} />
        </div>
    )
}

export default CustomDatePicker
