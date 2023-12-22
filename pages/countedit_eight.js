
import React from "react";
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';
import shahn3 from "../public/img/35a18503-a6a0-4825-9e47-80e2e29690f4.png";
import shahn5 from "../public/img/Group 41409.png";
import Image from "next/image";
import Link from "next/link";


function countedit() {

    return (
        <>
            <div className={`${styles.countedit} ${styles.countedit_eight}`}>
                <div className={styles.countedit_right}>
                    <div className={styles.countedit_right_flex1}>
                        <i className="fa-solid fa-user"></i>
                        <p>الملف الشخصى</p>
                    </div>
                    <Link href="/countedit_six" className={styles.countedit_right_flex1}>
                        <i className="fa-brands fa-shopify"></i><p> منتجات تم شرائها</p>

                    </Link>
                    <Link href="/countedit_five" className={styles.countedit_right_flex1}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p> الطلبيات</p>

                    </Link>
                    <Link href="/countedit_two" className={styles.countedit_right_flex1}>
                        <i className="fa-solid fa-location-dot"></i>
                        <p> العناوين </p>

                    </Link>
                    <div className={styles.countedit_right_flex1}>
                        <i className="fa-solid fa-comments"></i>
                        <p> تواصل معنا</p>

                    </div>
                </div>
                <div className={`${styles.countEditThree_width} ${styles.countedit_left}`} >
                    <div className={styles.logintwo_left} >
                        <h2 style={{ color: "#0781f3", paddingBottom: "20px" }}> تقيم المنتج</h2>
                        <div className={styles.salar_contant}>
                            <div style={{ borderRadius: '30px', }}>
                                <div className={styles.counteight_left_mobil} style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }}>
                                    <Image loading="lazy"alt=""  src={shahn3} style={{
                                        width: "100px", height: '100%', boxShadow: " 1px 3px 5px rgb(209, 209, 209)", padding: "10px"
                                        , borderRadius: '20px'
                                    }}></Image>
                                    <div className={styles.sala_contantp}>
                                        <div style={{ display: 'flex', gap: '1rem', float: 'left', paddingRight: "10px" }}>
                                            <Image loading="lazy"alt=""  src={shahn5}></Image>
                                        </div>
                                        <h4>  تلفزيون 50 بوصه فائق الجوده4kشاشه
                                            فائق الجوده والسرعه
                                        </h4>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <h6 style={{ color: '#0059ff' }}>15,555</h6>
                                        </div>

                                    </div>

                                </div>
                                <div style={{
                                    display: 'flex',
                                    padding: "1rem 0",
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <p>كيف كان المنتج</p>
                                    <div >
                                        <i className="fa-solid fa-star" style={{ color: "#ccc", fontSize: "1.3rem" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#ccc", fontSize: "1.3rem" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#e5f50e", fontSize: "1.3rem" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#e5f50e", fontSize: "1.3rem" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#e5f50e", fontSize: "1.3rem" }}></i>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div style={{ paddingTop: "32px" }}><textarea rows="4" cols="50" className={styles.textarea}>
                            اضف تعليقك</textarea></div>


                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <button className={styles.shadowBtn} >
                            ارسال
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default countedit

