
import React from "react";
import Image from "next/image";
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';



import loggin from "../public/img/290922_06_lock_4-[Converted].png"

import Link from "next/link";

function loginfour() {

  return (
    <>
      <Meta title='loginfour' />

      <div className={styles.logintwo} >


        <div className={styles.logintwo_left}>
          <div className={styles.logintwo_home}>
            <Link href="/Home" style={{ color: '' }} >
              <i className="fa-solid fa-angles-right"></i>
              <h2>الرئيسيه </h2>
            </Link>

          </div>
          <h2 style={{ color: "#0781f3" }}> معلومات الحساب</h2>

          <div className={styles.logintwo_left1}>  <input placeholder=" الاسم " className={styles.input} name="text" type="text" /></div>
          <div className={styles.logintwo_left1}><input placeholder="البريد الالكترونى" className={styles.input} name="text" type="text" />  </div>
          <div className={styles.logintwo_left1}><input placeholder="رقم التلفون" className={styles.input} name="text" type="text" /></div>
          <p style={{
            color: "#ccc", padding: "10px ", fontSize: "small", marginBottom: '0rem'
          }}>

            سيرسل لك رقم التحقق لتاكيد رقمك</p>
          <div >

            <input placeholder="كلمة السر" className={styles.input} name="text" type="text" />
          </div>

          <p style={{ color: "#ccc", padding: "20px 10px", fontSize: "small" }}>

            يجب ان يحتوى كلمة المرور على اقل 8 احرف صغيره     </p>
          <button className={styles.shadow__btn}>
            انشاء حساب


          </button>
        </div>

        <div className={styles.logintwo_right}>
          <Image loading="lazy"alt=""  src={loggin} ></Image>
        </div>

      </div>


    </>
  )
}
export default loginfour

