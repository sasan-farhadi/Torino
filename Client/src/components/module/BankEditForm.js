import styles from "@/components/module/BankEditForm.module.css"

const BankEditForm = () => {
    return (
        <>
            <div className={styles.infopersonal}>
                <div className={styles.prsonal}>
                    <h3>اطلاعات حساب بانکی</h3>
                </div>
                <div className={styles.infoname}>
                    <div>
                        <input type="text" placeholder="شماره شبا" />
                    </div>
                    <div>
                        <input type="text" placeholder="شماره کارت" />
                    </div>
                    <div>
                        <input type="text" placeholder="شماره حساب" />
                    </div>
                </div>
                <div className={styles.button}>
                    <button>تایید</button>
                    <button>انصراف</button>
                </div>
            </div>
        </>
    )
}

export default BankEditForm
