import styles from "@/components/module/select.module.css"
import Image from "next/image"

export const select = <ul className={styles.select_option}>
    <li>پر تردد </li>
    <li>
        <Image alt="location" width={1000} height={800} src="/images/location.png" />
        <p>شیراز</p>
    </li>
    <li>
        <Image alt="location" width={1000} height={800} src="/images/location.png" />
        <p>تهران</p>
    </li>
    <li>
        <Image alt="location" width={1000} height={800} src="/images/location.png" />
        <p>سنندج</p>
    </li>
</ul>