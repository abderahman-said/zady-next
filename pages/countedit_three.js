
import React from "react";
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';
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
                <div className={`${styles.countedit_left} ${styles.countEditThree_width}`}>
                    <div className={styles.logintwo_left} >
                        <h2 style={{ color: "#0781f3" }}> تعديل الحساب</h2>

                        <div className={styles.logintwo_left1}>  <input placeholder=" الاسم " className={styles.input} name="text" type="text" /></div>
                        <div className={styles.logintwo_left1}><input placeholder="البريد الالكترونى" className={styles.input} name="text" type="text" />  </div>
                        <div className={styles.logintwo_left1}><input placeholder="رقم التلفون" className={styles.input} name="text" type="text" /></div>

                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <button className={styles.shadowBtn} >
                            حفظ
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}
export default countedit

