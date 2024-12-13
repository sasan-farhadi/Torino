"use client";

import styles from "@/components/template/auth/index.module.css"

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "@/components/partials/container/ModalContainer";
import Image from "next/image";

function AuthForm() {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={styles.signinbtn}>
                <button onClick={() => setIsOpen(true)}>
                    <Image src="/images/user-icon.png" alt="user-icon" width={800} height={1000} />
                    ورود | ثبت نام
                </button>
                <Image onClick={() => setIsOpen(true)} alt="hamberger" src="/images/sign in buttom.png" width={1000} height={800} />
            </div>
            {
                step === 1 && (
                    <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
                        <SendOTPForm
                            mobile={mobile}
                            setMobile={setMobile}
                            setStep={setStep}
                        />
                    </ModalContainer>
                )
            }
            {
                step === 2 && (
                    <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
                        <CheckOTPForm
                            mobile={mobile}
                            setStep={setStep}
                            setIsOpen={setIsOpen}
                        />
                    </ModalContainer>
                )
            }
        </div >
    );
}

export default AuthForm;
