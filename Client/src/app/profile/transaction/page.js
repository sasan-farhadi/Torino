"use client"

import TransactionPage from "@/components/template/TransactionPage"
import { useGetMyTransaction } from "@/core/services/queries"

const Transaction = () => {
    const { data } = useGetMyTransaction()
    return (
        <div>
            <TransactionPage data={data} />
        </div>
    )
}

export default Transaction
