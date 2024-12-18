"use client"

import styles from "@/components/template/TransactionPage.module.css"
import { jalali } from "@/core/utils/jalaliDate"

const TransactionPage = ({ data }) => {
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.head}>
                    <p>تاریخ و ساعت</p>
                    <p>مبلغ(تومان)</p>
                    <p>نوع تراکنش</p>
                    <p>شماره سفارش</p>
                </div>
                {
                    data?.data.map(x => (
                        <div key={x.id} className={styles.list}>
                            <p>{jalali(x.createdAt)}</p>
                            <p>{x.amount}</p>
                            <p>{x.type}</p>
                            <p>سفارش {(x.id).split("-")[4]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TransactionPage
