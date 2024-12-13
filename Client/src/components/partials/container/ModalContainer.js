import React from "react";
import styles from "@/components/partials/container/ModalContainer.module.css"

function ModalContainer({ children, isOpen, setIsOpen }) {
    if (!isOpen) return;
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.close} onClick={() => setIsOpen(false)}>X</div>
                <div>{children}</div>
            </div>
        </div >
    );
}

export default ModalContainer;
