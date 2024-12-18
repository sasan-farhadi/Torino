import styles from "@/components/module/BankEditForm.module.css"
import { useUpdateProfile } from "@/core/services/mutations"
import { useGetProfile } from "@/core/services/queries"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"

const BankEditForm = ({ setShowEditBank }) => {
    const { mutate } = useUpdateProfile()
    const { data: profiles } = useGetProfile()

    const [form, setForm] = useState({ shaba_code: profiles.data.shaba_code, debitCard_code: profiles.data.debitCard_code, accountIdentifier: profiles.data.accountIdentifier })

    const changeHandler = (e) => {
        const { name, value } = e.target
        setForm((data) => ({ ...data, [name]: value }))
    }

    const editHandler = (e) => {
        e.preventDefault();

        mutate(form, {
            onSuccess: (data) => {
                if (data?.message) {
                    toast.success("تغییرات با موفقیت انجام شد");
                    setShowEditBank(false);
                }
            },
            onError: (error) => {
                toast.error(`خطا : ${error.message}`);
            },
        });
    };

    return (
        <>
            <div className={styles.infopersonal}>
                <div className={styles.prsonal}>
                    <h3>اطلاعات حساب بانکی</h3>
                </div>
                <form onSubmit={editHandler}>
                    <div className={styles.infoname}>
                        <div>
                            <input type="text" placeholder="شماره شبا" name="shaba_code" value={form.shaba_code} onChange={changeHandler} />
                        </div>
                        <div>
                            <input type="text" placeholder="شماره کارت" name="debitCard_code" value={form.debitCard_code} onChange={changeHandler} />
                        </div>
                        <div>
                            <input type="text" placeholder="شماره حساب" name="accountIdentifier" value={form.accountIdentifier} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button type="submit">تایید</button>
                        <Link href="" onClick={() => setShowEditBank(false)}>انصراف</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BankEditForm
