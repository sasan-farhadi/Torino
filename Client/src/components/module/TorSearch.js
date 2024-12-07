import styles from "@/components/module/TorSearch.module.css"
import Image from "next/image"
const TorSearch = () => {
    return (
        <div className={styles.container_fluid}>
            <div className={styles.text_top_search}>
                <h2> <span> تورینو </span> برگزار کننده بهترین تور های داخلی و خارجی </h2>
            </div>
            <div className={styles.search}>
                <div className={styles.select}>
                    <Image width={1000} height={800} src="/images/location.png" alt="" />
                    <select name id>
                        <option value={1} disabled selected> مبدا </option>
                        <option value={1}> شیراز </option>
                        <option value={1}> تهران </option>
                    </select>
                </div>
                <div className={styles.select}>
                    <Image width={1000} height={800} src="/images/global-search.png" alt="" />
                    <select name id>
                        <option value={1} disabled selected> مقصد </option>
                        <option value={1}> شیراز </option>
                        <option value={1}> اصفهان </option>
                    </select>
                </div>
                <div className={styles.select}>
                    <Image width={1000} height={800} src="/images/calendar.png" alt="" />
                    <span>تاریخ</span>
                    <input type="date" />
                </div>
                <div>
                    <button>جستجو</button>
                </div>
            </div>
        </div>

    )
}

export default TorSearch
