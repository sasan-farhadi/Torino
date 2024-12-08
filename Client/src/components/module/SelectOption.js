
import styles from "@/components/module/SelectOption.module.css"
import Image from "next/image"

const SelectOption = ({ setOriginValue, setDestValue, showOrigin, showDest }) => {
    const clickHandler = e => {
        if (showOrigin === "block") {
            setOriginValue(e.target.id)
        }

        if (showDest === "block") {
            setDestValue(e.target.id)
        }
    }
    return (
        <div>
            <ul className={styles.select_option} onClick={clickHandler} >
                <li>پر تردد </li>
                <li id="شیراز">
                    <Image alt="location" width={1000} height={800} src="/images/location.png" />
                    شیراز
                </li>
                <li id="تهران">
                    <Image alt="location" width={1000} height={800} src="/images/location.png" />
                    تهران
                </li>
                <li id="سنندج">
                    <Image alt="location" width={1000} height={800} src="/images/location.png" />
                    سنندج
                </li>
            </ul>
        </div>
    )
}

export default SelectOption
