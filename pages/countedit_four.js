
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
                <div className={styles.countedit_left} >
                    <div className={styles.payleft} style={{ gap: '1rem' }}>
                        <h4 style={{ color: "#0099ff" }}>اضافه عنوان جديد</h4>
                        <input placeholder="الاسم  " className={styles.input} name="text" type="text"></input>
                        <input placeholder="رقم التلفون" className={styles.input} name="text" type="text"></input>
                        <div className={styles.sanaa} style={{ gap: "1rem" }}>
                            <input placeholder="المحافظه" className={styles.input} name="text" type="text"></input>
                            <input placeholder="المنطقه" className={styles.input} name="text" type="text"></input>

                        </div>
                        <input placeholder="العنوان" className={styles.input} name="text" type="text"></input>

                        <p style={{ display: 'flex', gap: '1rem', color: "#ccc" }}>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className={styles.checkbox} />

                            اجعله العنوان الاساسى
                        </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <button className={styles.shadowBtn}  >
                                <Link href='/countedit_two'>
                                    حفظ العنوان

                                </Link>
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
export default countedit

