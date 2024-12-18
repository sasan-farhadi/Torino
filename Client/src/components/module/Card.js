import styles from "@/components/module/Card.module.css"
import { sp } from "@/core/utils/number"
import Image from "next/image"
import Link from "next/link"

const Card = ({ data, newData }) => {
    if (!newData) {
        newData = null;
    }
    if (!data) {
        data = null;
    }

    return (
        <div className={styles.container}>
            <h3>همه تورها</h3>
            <div className={styles.cards}>
                {
                    Array.isArray(newData?.filteredTours) && newData.filteredTours.length > 0 ? (
                        newData.filteredTours.map(x => (
                            <Link href={`/tor/${x.id}`} key={x.id}>
                                <div className={styles.card}>
                                    <div className={styles.card_image}>
                                        <Image width={1000} height={800} src={x.image} alt={x.title} />
                                    </div>
                                    <div className={styles.card_content}>
                                        <h4>{x.title}</h4>
                                        <div>
                                            {
                                                x?.options.map((y, index) => (
                                                    <p key={index}>{y}</p>
                                                ))
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
                    ) : (
                        Array.isArray(data?.data) && data.data.length > 0 ? (
                            data.data.map(x => (
                                <Link href={`/tor/${x.id}`} key={x.id}>
                                    <div className={styles.card}>
                                        <div className={styles.card_image}>
                                            <Image width={1000} height={800} src={x.image} alt={x.title} />
                                        </div>
                                        <div className={styles.card_content}>
                                            <h4>{x.title}</h4>
                                            <div>
                                                {
                                                    x?.options.map((y, index) => (
                                                        <p key={index}>{y}</p>
                                                    ))
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
                        ) : (
                            <p>هیچ توری موجود نیست</p>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Card;
