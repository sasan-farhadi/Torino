"use client"

import styles from "@/components/template/ProfilePage.module.css"
import Image from "next/image"
import Link from "next/link"
import EmailConfirmInput from "../module/EmailConfirmInput"
import { useState } from "react"
import PersonalEditForm from "../module/PersonalEditForm"
import BankEditForm from "../module/BankEditForm"
import { useGetProfile } from "@/core/services/queries"
import { jalali } from "@/core/utils/jalaliDate"

const ProfilePage = () => {
    const { data } = useGetProfile()

    const [showEditEmail, setShowEditEmail] = useState(false)
    const [showEditPersonal, setShowEditPersonal] = useState(false)
    const [showEditBank, setShowEditBank] = useState(false)

    const birthDate = data?.data.birthDate?.date



    return (
        <div className={styles.main}>
            {!showEditEmail ? (
                <div className={styles.infoaccount}>
                    <div><h3>اطلاعات حساب کاربری</h3></div>
                    <div className={styles.account}>
                        <div>
                            <p>شماره موبایل</p>
                            <p>{data?.data.mobile}</p>
                        </div>
                        <div>
                            <p>ایمیل</p>
                            <p>{data?.data.email ? data?.data.email : "---"}</p>
                            <Link href="#" onClick={() => setShowEditEmail(true)}>
                                <Image src="/images/edit-2.png" width={1000} height={800} alt="edit" />
                                {
                                    data?.data.email ? <span>ویرایش</span> : <span>افزودن</span>

                                }
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <EmailConfirmInput setShowEditEmail={setShowEditEmail} />
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
                                <p>{data?.data.firstName}</p>
                            </div>
                            <div>
                                <h4>کد ملی</h4>
                                <p> {data?.data.nationalCode} </p>
                            </div>
                            <div>
                                <h4>جنسیت</h4>
                                <p>{data?.data.gender === "male" ? "مرد" : data?.data.gender === "female" ? "زن" : null}</p>
                            </div>
                            <div>
                                <h4>تاریخ تولد</h4>
                                <p>{birthDate ? jalali(birthDate) : null}</p>
                            </div>
                        </div>
                    </div>
                ) : (<PersonalEditForm setShowEditPersonal={setShowEditPersonal} />
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
                                <p>{data?.data.shaba_code}</p>
                            </div>
                            <div>
                                <h4>شماره کارت</h4>
                                <p> {data?.data.debitCard_code} </p>
                            </div>
                            <div>
                                <h4>شماره حساب</h4>
                                <p>{data?.data.accountIdentifier}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <BankEditForm setShowEditBank={setShowEditBank} />
                )
            }
        </div >
    )
}

export default ProfilePage
