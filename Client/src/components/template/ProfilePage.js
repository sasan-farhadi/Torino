"use client"
import styles from "@/components/template/ProfilePage.module.css"
import Image from "next/image"
import Link from "next/link"
import EmailConfirmInput from "../module/EmailConfirmInput"
import { useState } from "react"
import PersonalEditForm from "../module/PersonalEditForm"
import BankEditForm from "../module/BankEditForm"

const ProfilePage = () => {
    const [showEditEmail, setShowEditEmail] = useState(false)
    const [showEditPersonal, setShowEditPersonal] = useState(false)
    const [showEditBank, setShowEditBank] = useState(false)
    return (
        <div className={styles.main}>
            {!showEditEmail ? (
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
                            <p>ایمیل</p>
                            <p>___</p>
                            <Link href="#" onClick={() => setShowEditEmail(true)}>
                                <Image src="/images/edit-2.png" width={1000} height={800} alt="edit" />
                                <span>افزودن</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <EmailConfirmInput />
            )}


            {
                !showEditPersonal ? (
                    <div className={styles.infopersonal}>
                        <div className={styles.prsonal}>
                            <h3>اطلاعات شخصی</h3>
                            <Link href="#" onClick={() => setShowEditPersonal(true)}>
                                <Image src="/images/edit-2.png" width={1000} height={800} alt="edit" />
                                <span>ویرایش اطلاعات</span>
                            </Link>
                        </div>
                        <div className={styles.infoname}>
                            <div>
                                <h4>نام و نام خانوادگی</h4>
                                <p>ساسان فرهادی</p>
                            </div>
                            <div>
                                <h4>کد ملی</h4>
                                <p> 2360021528 </p>
                            </div>
                            <div>
                                <h4>جنسیت</h4>
                                <p>مرد</p>
                            </div>
                            <div>
                                <h4>تاریخ تولد</h4>
                                <p>1383/10/17</p>
                            </div>
                        </div>
                    </div>
                ) : (<PersonalEditForm />
                )
            }


            {
                !showEditBank ? (
                    <div className={styles.infobank}>
                        <div className={styles.prsonal}>
                            <h3>اطلاعات حساب بانکی</h3>
                            <Link href="#" onClick={() => setShowEditBank(true)}>
                                <Image src="/images/edit-2.png" width={1000} height={800} alt="edit" />
                                <span>ویرایش اطلاعات</span>
                            </Link>
                        </div>
                        <div className={styles.infoname}>
                            <div>
                                <h4>شماره شبا</h4>
                                <p>_</p>
                            </div>
                            <div>
                                <h4>شماره کارت</h4>
                                <p> 6037991752468520 </p>
                            </div>
                            <div>
                                <h4>شماره حساب</h4>
                                <p>_</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <BankEditForm />
                )
            }
        </div >
    )
}

export default ProfilePage
