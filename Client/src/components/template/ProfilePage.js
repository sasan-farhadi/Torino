import styles from "@/components/template/ProfilePage.module.css"
import Image from "next/image"
import Link from "next/link"

const ProfilePage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.infoaccount}>
                <div>
                    <h3>اطلاعات حساب کاربری</h3>
                </div>
                <div className={styles.account}>
                    <p>شماره موبایل</p>
                    <p>09224521125</p>
                    <p></p>
                    <p></p>
                    <p>ایمیل</p>
                    <p>___</p>
                    <Link href="#">
                        <Image src="/images/edit-2.png" width={1000} height={800} alt="edit" />
                        <span>افزودن</span>
                    </Link>
                </div>
            </div>
            <div className={styles.infopersonal}>
                <div className={styles.prsonal}>
                    <h3>اطلاعات شخصی</h3>
                    <Link href="#">
                        <Image src="/images/edit-2.png" width={1000} height={800} alt="edit" />
                        <span>ویرایش اطلاعات</span>
                    </Link>
                </div>
                <div className={styles.infoname}>
                    <div>
                        <h4>نام و نام خانوادگی</h4>
                        <p>ساسان فرهادی</p>
                        <h4>کد ملی</h4>
                        <p> 2360021528 </p>
                    </div>
                    <div>
                        <h4>جنسیت</h4>
                        <p>زن</p>
                        <h4>تاریخ تولد</h4>
                        <p>1383/10/17</p>
                    </div>
                </div>
            </div>
            <div className={styles.infobank}>

            </div>
        </div>
    )
}

export default ProfilePage
