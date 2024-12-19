import styles from "@/components/module/WhyTorino.module.css"
import Image from "next/image"
import { useState } from "react";

const WhyTorino = () => {
    const [imageClasses, setImageClasses] = useState([
        styles.firstImage,
        styles.secondImage,
        styles.thirdImage,
        styles.fourthImage
    ]);

    const handleNext = () => {
        setImageClasses(prevClasses => {
            const newClasses = [...prevClasses];
            newClasses.unshift(newClasses.pop());
            return newClasses;
        });
    };

    const handlePrev = () => {
        setImageClasses(prevClasses => {
            const newClasses = [...prevClasses];
            newClasses.push(newClasses.shift());
            return newClasses;
        });
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.why}>
                    <div>
                        <h1>؟</h1>
                    </div>
                    <h2>چرا <span>تورینو</span> ؟</h2>
                </div>
                <div className={styles.why_tour}>
                    <div className={styles.info_why}>
                        <div className={styles.why}>
                            <div>
                                <h1>؟</h1>
                            </div>
                            <h2>چرا <span>تورینو</span> ؟</h2>
                        </div>
                        <div className={styles.info_text}>
                            <h3>تور طبیعت گردی و تاریخی</h3>
                            <p>اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک
                                اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از
                                جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را
                                خریداری کنید.</p>
                        </div>
                    </div>
                    <div className={styles.slide_image}>
                        {imageClasses.map((className, index) => (
                            <Image
                                key={index}
                                src={`/images/slide${index + 1}.png`}
                                alt={`slide${index + 1}`}
                                width={1000}
                                height={800}
                                className={className}
                            />
                        ))}
                    </div>
                    <div className={styles.next_prev}>
                        <Image
                            src="/images/arrow-right.png"
                            width={36}
                            height={36}
                            alt="arrow-right"
                            onClick={handlePrev}
                            className={styles.arrow}
                        />
                        <p>{`${imageClasses.indexOf(styles.firstImage) + 1}/4`}</p>
                        <Image
                            src="/images/arrow-left.png"
                            width={36}
                            height={36}
                            alt="arrow-left"
                            onClick={handleNext}
                            className={styles.arrow}
                        />
                    </div>
                </div >
            </div>
            <div className={styles.hr} ></div>
        </>
    )
}

export default WhyTorino




// import styles from "@/components/module/WhyTorino.module.css";
// import Image from "next/image";
// import { useState } from "react";

// const WhyTorino = () => {
//     const [imageClasses, setImageClasses] = useState([
//         styles.firstImage,
//         styles.secondImage,
//         styles.thirdImage,
//         styles.fourthImage
//     ]);

//     const handleNext = () => {
//         setImageClasses(prevClasses => {
//             const newClasses = [...prevClasses];
//             newClasses.unshift(newClasses.pop());
//             return newClasses;
//         });
//     };

//     const handlePrev = () => {
//         setImageClasses(prevClasses => {
//             const newClasses = [...prevClasses];
//             newClasses.push(newClasses.shift());
//             return newClasses;
//         });
//     };

//     return (
//         <>
//             <div className={styles.slide_image}>
//                 {imageClasses.map((className, index) => (
//                     <Image
//                         key={index}
//                         src={`/images/slide${index + 1}.png`}
//                         alt={`slide${index + 1}`}
//                         width={1000}
//                         height={800}
//                         className={className}
//                     />
//                 ))}
//             </div>
//             <div className={styles.next_prev}>
//                 <Image
//                     src="/images/arrow-right.png"
//                     width={36}
//                     height={36}
//                     alt="arrow-right"
//                     onClick={handlePrev}
//                     className={styles.arrow}
//                 />
//                 <p>{`${imageClasses.indexOf(styles.firstImage) + 1}/4`}</p>
//                 <Image
//                     src="/images/arrow-left.png"
//                     width={36}
//                     height={36}
//                     alt="arrow-left"
//                     onClick={handleNext}
//                     className={styles.arrow}
//                 />
//             </div>
//         </>
//     );
// };

// export default WhyTorino;
