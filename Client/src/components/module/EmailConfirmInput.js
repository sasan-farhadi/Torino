import styles from "@/components/module/EmailConfirmInput.module.css"
const EmailConfirmInput = () => {
    return (
        <>
            <div className={styles.infoaccount}>
                <div>
                    <h3>اطلاعات حساب کاربری</h3>
                </div>
                <div className={styles.account}>
                    <div>
                        <p>شماره موبایل</p>
                        <p>09224521125</p>
                    </div>
                    <div>
                        <input type="text" placeholder="آدرس ایمیل" />
                        <button>تایید</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailConfirmInput
