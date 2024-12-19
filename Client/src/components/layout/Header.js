"use client"
import styles from "@/components/layout/Header.module.css";
import Image from "next/image";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import { useState, useEffect } from "react";
import HambergerMenu from "../module/HambergerMenu";
import AuthForm from "../template/auth";
import { logoutHandler } from "@/core/utils/cookie";
import { useGetBasket, useGetUserData } from "@/core/services/queries";

const Header = () => {
    const { data: basket } = useGetBasket();
    const [isBasket, setIsBasket] = useState(false);
    const [show, setShow] = useState("none");
    const [showHamberger, setShowHamberger] = useState("none");
    const { data } = useGetUserData();

    useEffect(() => {
        setIsBasket(!!basket);
    }, [basket]);

    return (
        <header className={styles.header}>
            <div onClick={() => setShowHamberger("none")} style={{ display: showHamberger }}>
                <HambergerMenu />
            </div>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.hambergerMenu}>
                        <div className={styles.hamber}>
                            <Image alt="hamberger" src="/images/Group 46.png" width={1000} height={800} onClick={() => setShowHamberger("block")} />
                        </div>
                    </div>
                    <div className={styles.menu_right}>
                        <Link href="/"><Image src="/images/logo.png" alt="logo" width={800} height={1000} /></Link>
                        <Link href="/" className={styles.active}> صفحه اصلی </Link>
                        <Link href="#"> خدمات گردشگری </Link>
                        <Link href="#"> درباره ما </Link>
                        <Link href="#"> تماس با ما </Link>
                    </div>
                    <div className={styles.menu_left}>
                        {
                            !data?.data ? (
                                <>
                                    <div className={styles.signin}>
                                        <AuthForm />
                                    </div>
                                    <div className={styles.login}>
                                        <AuthForm />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.menuprofile} onClick={() => setShow("block")} onMouseLeave={() => setShow("none")}>
                                        {isBasket && (<span> 1 </span>)}
                                        {!isBasket && (<Image alt="image" src="/images/user-icon.png" width={1000} height={800} />)}
                                        <p>{data?.data.mobile}</p>
                                        <Image alt="image" src="/images/arrow-down.png" width={1000} height={800} />
                                        <div className={styles.showprofile} style={{ display: show }}>
                                            <ul>
                                                <li>
                                                    <div>
                                                        <Image alt="image" src="/images/user-icon1.png" width={1000} height={800} />
                                                    </div>
                                                    <p>{data?.data.mobile}</p>
                                                </li>
                                                {basket && (
                                                    <li className={styles.basket}>
                                                        <SlBasket size={28} color="red" />
                                                        <Link href={`/tor/sale/${basket?.data.id}`}>
                                                            سبد خرید
                                                        </Link>
                                                        <span> 1 </span>
                                                    </li>
                                                )}
                                                <li>
                                                    <Image alt="image" src="/images/user-icon3.png" width={1000} height={800} />
                                                    <Link href="/profile"><p> اطلاعات حساب کاربری </p></Link>
                                                </li>
                                                <li onClick={logoutHandler}>
                                                    <Image alt="image" src="/images/logout.png" width={1000} height={800} />
                                                    <p> خروج از حساب کاربری </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
