
import React from "react";
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';
import Image from "next/image";
import shahn5 from "../public/img/Group 41409.png";
import shahn3 from "../public/img/35a18503-a6a0-4825-9e47-80e2e29690f4.png";
import Link from "next/link";

function countedit() {

    return (
        <>
 
            <div className={styles.countedit}>
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
                <div className={styles.countedit_left}  >
                    <h3 style={{ paddingRight: "15px" }}>منتجات تم شرائها</h3>
                    <div className={styles.salar_contant} style={{
                        display: 'flex',
                        flexDirection: "column",
                        gap: '2rem'
                    }}>
                        <div style={{ borderRadius: '30px', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }} className='counteditFive_FLEX'>
                                <Image loading="lazy"alt=""  src={shahn3} style={{
                                    width: "100px", height: '100%', boxShadow: " 1px 3px 5px rgb(209, 209, 209)", padding: "10px"
                                    , borderRadius: '20px'
                                }}></Image>
                                <div className={styles.sala_contantp}>
                                    <div style={{ display: 'flex', gap: '1rem', float: 'left', paddingRight: "10px" }}>
                                        <Image loading="lazy"alt=""  src={shahn5}></Image>
                                    </div>
                                    <h4 style={{ padding: '0 20px 10px 20px' }}>  تلفزيون 50 بوصه فائق الجوده4kشاشه
                                        فائق الجوده والسرعه
                                    </h4>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <h6 style={{ color: '#0059ff', fontWeight: "bold" }}>15,555</h6>
                                    </div>

                                    <button className={styles.counteditfive_BTN}>
                                        <Link href='/countedit_eight'>
                                            تقيم المنتج
                                        </Link>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div style={{ borderRadius: '30px', }}>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }} className='counteditFive_FLEX'>
                                <Image loading="lazy"alt=""  src={shahn3} style={{
                                    height: '100%', width: "100px", boxShadow: " 1px 3px 5px rgb(209, 209, 209)", padding: "10px"
                                    , borderRadius: '20px'
                                }}></Image>
                                <div className={styles.sala_contantp}>
                                    <div style={{ display: 'flex', gap: '1rem', float: 'left', paddingRight: "10px" }}>
                                        <Image loading="lazy"alt=""  src={shahn5}></Image>
                                    </div>
                                    <h4 style={{ padding: '0 20px 10px 20px' }}>  تلفزيون 50 بوصه فائق الجوده4kشاشه
                                        فائق الجوده والسرعه
                                    </h4>

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <h6 style={{ color: '#0059ff', fontWeight: "bold" }}>15,555</h6>
                                    </div>
                                    <button className={styles.counteditfive_BTN}>
                                        <Link href='/countedit_eight'>
                                            تقيم المنتج
                                        </Link>
                                    </button>
                                </div>

                            </div>

                        </div>
                        <Link href="/Home" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '1rem',
                            padding: '20px 0'
                        }}>
                            <h4 >
                                تصفح المنتجات



                            </h4>
                            <i className="fa-solid fa-angles-left " style={{
                                background: "rgb(48, 168, 248)", fontSize: "13px", borderRadius: '10px', color: '#fff', padding: '10px 13px',
                                fontSize: '15px'
                            }}></i>
                        </Link>
                    </div>


                </div>

            </div>
        </>
    )
}
export default countedit

