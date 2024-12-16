import styles from "@/components/module/Card.module.css"
import { sp } from "@/core/utils/number"
import Image from "next/image"
import Link from "next/link"
const Card = ({ data }) => {
    return (
        <div className={styles.container}>
            <h3>همه تورها</h3>
            <div className={styles.cards}>
                {
                    data?.data.map(x => (
                        <Link href={`/tor/${x.id}`} key={x.id}>
                            <div className={styles.card}>
                                <div className={styles.card_image}>
                                    <Image width={1000} height={800} src={x.image} alt="" />
                                </div>
                                <div className={styles.card_content}>
                                    <h4> {x.title} </h4>
                                    <div>
                                        {
                                            x?.options.map((y, index) => (
                                                <p key={index}>{y}</p>
                                            )
                                            )
                                        }
                                    </div>
                                </div>
                                <div className={styles.dash} />
                                <div className={styles.reserve_price}>
                                    <button>رزرو</button>
                                    <p><span>{sp(x.price)}</span> تومان</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div >

    )
}

export default Card
