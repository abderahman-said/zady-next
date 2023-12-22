
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
                <div className={styles.countedit_left}>
                    <h2>حسابى</h2>
                    <h3> تفاصيل الحساب</h3>
                    <div className={styles.countedit_left_flex2}>
                        <div className={styles.countedit_left_name}>
                            <p>الاسم</p>
                            <h6> ahmed abdo</h6>
                        </div>
                        <div className={styles.countedit_left_name}>
                            <p>رقم التلفون</p>
                            <h6> 013239893298 </h6>

                        </div>
                        <div className={styles.countedit_left_name}>
                            <p>البريد الالكترونى</p>
                            <h6> 013239893298 </h6>

                        </div>

                    </div>
                    <Link href="/countedit_three" className={styles.countedit_left_icon}>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <h5> تعديل الحساب</h5>

                    </Link>

                    <Link href="/Home" className={styles.countedit_center}>

                        <h5 style={{ color: '#000' }}>
                            تصفح المنتجات



                        </h5>
                        <i className="fa-solid fa-angles-left" style={{
                            background: ' rgb(0, 140, 255)',
                            padding: '10px 12px',
                            borderRadius: '10px',
                            color: '#fff',
                        }} ></i>

                    </Link>

                </div>

            </div>
        </>
    )
}
export default countedit

