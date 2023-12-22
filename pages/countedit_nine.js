
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
       

      <div className={`${styles.countedit} ${styles.countedit_nine}`}>
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
          <h2>متابعه الطلب</h2>
          <div>
            <h6 style={{ fontWeight: 'bold' }}> عنوان التوصيل </h6>
            <p>3 شارع الترعه المنشية المحلة الكبرى</p>
          </div>

          <div className={styles.countedit_nine_left_flex}>
            <div>
              <div><h4>مش هتستنى كتير !</h4>
                <h4>رقم الشحنة الخاصة بك هي <br /><span style={{ marginTop: '20px' }}>NAEE90026</span> </h4></div>

              <div className={styles.countsix_left_mobil} style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }}>
                <Image loading="lazy"alt=""  src={shahn3} style={{
                  width: "100px", height: '100%', boxShadow: " 1px 3px 5px rgb(209, 209, 209)", padding: "10px"
                  , borderRadius: '20px'
                }}></Image>
                <div className={styles.sala_contantp}>
                  <div style={{ display: 'flex', gap: '1rem', float: 'left', paddingRight: "10px" }}>
                    <Image loading="lazy"alt=""  src={shahn5}></Image>
                  </div>
                  <h5>  تلفزيون 50 بوصه فائق الجوده4kشاشه
                    فائق الجوده والسرعه
                  </h5>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <h6 style={{ color: '#0059ff', fontWeight: "bold" }}>15,555</h6>
                  </div>

                </div>
              </div>
            </div>



          </div>





        </div>
        <div style={{
          position: "relative", display: 'flex',
          alignItems: 'center'
        }}>

          <ul className={styles.timeline}>

            <li>
              <div className={styles.direction_l}>
                <div className={styles.flag_wrapper}>
                  <span className={styles.flag}>تم الطلب</span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.direction_l}>
                <div className={styles.flag_wrapper}>
                  <span className={styles.flag}> تم تأكيد الطلب
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.direction_l}>
                <div className={styles.flag_wrapper}>
                  <span className={styles.flag}>الطلب في الطريق
                  </span>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.direction_l}>
                <div className={styles.flag_wrapper}>
                  <span className={styles.flag}>تم التسليم
                  </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </>
  )
}
export default countedit

