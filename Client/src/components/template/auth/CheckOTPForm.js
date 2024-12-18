"use client";

import styles from "@/components/template/auth/CheckOTPForm.module.css"
import { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";
import { useSendOtp, useCheckOtp } from "@/core/services/mutations";
import { setCookie } from "@/core/utils/cookie";
import toast from "react-hot-toast";
import { useGetUserData } from "@/core/services/queries";
import Loader from "@/components/module/Loader";

function CheckOTPForm({ mobile, setStep, setIsOpen }) {
    const { refetch } = useGetUserData()
    const [code, setCode] = useState("");
    const { isPending: isPendingCheck, mutate: checkOtpMutate } = useCheckOtp();
    const { isPending: isPendingSend, mutate: sendOtpMutate } = useSendOtp();
    const [counter, setCounter] = useState(30);

    useEffect(() => {
        if (counter > 0) {
            const timer = setTimeout(() => setCounter(counter - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [counter]);

    const checkOtpHandler = (event) => {
        event.preventDefault();
        if (isPendingCheck) return;

        checkOtpMutate(
            { mobile, code },
            {
                onSuccess: (data) => {
                    setCookie("accessToken", data?.data?.accessToken, 30);
                    setCookie("refreshToken", data?.data?.refreshToken, 365);
                    setIsOpen(false);
                    setStep(1);
                    refetch()
                },
                onError: (error) => {
                    toast.error(error.message)
                },
            }
        );
    };

    const resendOtpHandler = () => {
        if (isPendingSend || counter > 0) return;

        sendOtpMutate(
            { mobile },
            {
                onSuccess: (data) => {
                    toast.success(data?.data?.message);
                    setCounter(30);
                },
                onError: (error) => {
                    toast.error(error.message);
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
                <div className={styles.timer}>
                    {counter > 0 ? (
                        <>ارسال مجدد کد تا {counter} ثانیه</>
                    ) : (
                        <button
                            type="button"
                            onClick={resendOtpHandler}
                            disabled={isPendingSend}
                            className={styles.resend}
                        >
                            ارسال مجدد کد
                        </button>
                    )}
                </div>
                {
                    isPendingCheck ? <Loader /> : (
                        <button className={styles.button} type="submit" >
                            ورود به تورینو
                        </button>
                    )
                }
            </form>
        </div>
    );
}

export default CheckOTPForm;
