"use client";
import styles from "@/components/template/auth/SendOTPForm.module.css"

import { useState } from "react";
import toast from "react-hot-toast";

import { useSendOtp } from "@/core/services/mutations";
import { isValidMobile } from "@/core/utils/validation";

function SendOTPForm({ mobile, setMobile, setStep }) {
    const [error, setError] = useState("");

    const { isPending, mutate } = useSendOtp();

    const sendOtpHandler = (event) => {
        event.preventDefault();

        if (isPending) return;
        if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
        setError("");

        mutate(
            { mobile },
            {
                onSuccess: (data) => {
                    toast.success(data?.data?.message);
                    toast(data?.data?.code);
                    setStep(2);
                },
                onError: (error) => {
                    console.log(error);
                },
            }
        );
    };

    return (
        <div className={styles.container}>
            <h4 >ورود به تورینو</h4>
            <form onSubmit={sendOtpHandler}   >
                <label>شماره موبایل خود را وارد کنید</label>
                <input type="text" placeholder="مثال : 1234***0912" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                {!!error && <p className="text-red-500">{error}</p>}
                <button type="submit" >
                    ارسال کد تایید
                </button>
            </form>
        </div>
    );
}

export default SendOTPForm;
