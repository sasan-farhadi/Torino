"use client"

import styles from "@/components/template/TransactionPage.module.css"
import { useGetMyTransaction } from "@/core/services/queries"

const TransactionPage = () => {
    const { data } = useGetMyTransaction()
    console.log("#### Transaction", data)
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.head}>
                    <p>تاریخ و ساعت</p>
                    <p>مبلغ(تومان)</p>
                    <p>نوع تراکنش</p>
                    <p>شماره سفارش</p>
                </div>

                <div className={styles.list}>
                    <p>1402/10/12 - 14:24</p>
                    <p>12.000.000</p>
                    <p>ثبت نام در تور گردشگری</p>
                    <p>سفارش12054902</p>
                </div>

            </div>
        </div>
    )
}

export default TransactionPage
