"use client";

import styles from "@/components/template/auth/CheckOTPForm.module.css"

import { useState } from "react";
import OtpInput from "react18-input-otp";

import { useCheckOtp } from "@/core/services/mutations";
import Counter from "@/core/utils/counter";
import Link from "next/link";

function CheckOTPForm({ mobile, setStep, setIsOpen }) {
    const [code, setCode] = useState("");
    const [disabled, setDisabled] = useState("none")

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
                },
                onError: (error) => {
                    console.log(error);
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
                <div className={styles.timer}> ارسال مجدد کد تا <Counter setDisabled={setDisabled} /> </div>
                <Link href="/" style={{ display: disabled }}> ارسال مجدد کد</Link>
                <button className={styles.button} type="submit" >
                    ورود به تورینو
                </button>
            </form>
        </div>
    );
}

export default CheckOTPForm;
