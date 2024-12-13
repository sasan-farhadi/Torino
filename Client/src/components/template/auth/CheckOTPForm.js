"use client";

import styles from "@/components/template/auth/CheckOTPForm.module.css"

import { useState } from "react";
import OtpInput from "react18-input-otp";

import { useCheckOtp } from "@/core/services/mutations";
import { setCookie } from "@/core/utils/cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function CheckOTPForm({ mobile, setStep, setIsOpen }) {
    const [code, setCode] = useState("");
    const router = useRouter()
    const { isPending, mutate } = useCheckOtp();

    const checkOtpHandler = (event) => {
        event.preventDefault();

        if (isPending) return;

        mutate(
            { mobile, code },
            {
                onSuccess: (data) => {
                    setCookie("accessToken", data?.data?.accessToken, 30);
                    setCookie("refreshToken", data?.data?.refreshToken, 365);
                    setIsOpen(false);
                    setStep(1);
                    router.refresh()
                },
                onError: (error) => {
                    toast.error(error.message)
                },
            }
        );
    };

    const changeHandler = (otp) => {
        setCode(otp);
    };

    return (
        <div className={styles.container}>
            <h4>کد تایید را وارد کنید.</h4>
            <form onSubmit={checkOtpHandler} className={styles.form} >
                <label>کد تایید به شماره موبایل {mobile} ارسال شد</label>
                <div style={{ direction: "ltr" }}>
                    <OtpInput
                        value={code}
                        onChange={changeHandler}
                        numInputs={6}
                        inputStyle={{
                            border: "1px solid silver",
                            borderRadius: "5px",
                            width: "49px",
                            height: "45px",
                            marginRight: "5px",
                        }}
                    />
                </div>
                <div className={styles.timer}> ارسال مجدد کد تا </div>
                <button className={styles.button} type="submit" >
                    ورود به تورینو
                </button>
            </form>
        </div>
    );
}

export default CheckOTPForm;
