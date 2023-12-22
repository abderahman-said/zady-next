import Image from "next/image";
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';
import Link from "next/link";
import React from 'react';
import login from "../public/img/290922_06_lock_4-[Converted].png"
import line2 from "../public/img/sammy-online-payment.png"
import line3 from "../public/img/correct.png"

const loginthree = () => {
  return (
    <div>
      <Meta title='loginthree' />

      <div className={styles.baycucess}>
        <div className={styles.baycucess_right}>
          <Image loading="lazy"alt=""  src={line3} style={{ height: '100%', width: '100px' }}></Image>
          <h3 style={{ color: "#058dfc" }}>عملية الشراء تمت بنجاح</h3>
          <p style={{ color: "#cccc" }}>ستصلك رسالة عبر بريدك الالكترونى ببينات الشحنة</p>
          <p>رقم الشحنة هو <span>2334434</span></p>
          <button className={styles.shadow__btn}>
            <Link href="/Home">
              الرجوع للرئيسيه
            </Link>

          </button>
        </div>
        <div className={styles.baycucess_left}>
          <Image loading="lazy"alt=""  src={line2}></Image>

        </div>
      </div>
    </div>
  )
}

export default loginthree;

