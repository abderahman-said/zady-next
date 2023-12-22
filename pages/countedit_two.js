
import React from "react";
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';
import Link from "next/link";



function countedit_two() {

  return (
    <>
      <Meta title='countedit_two' />

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
          <h2>العناوين</h2>
          <h3> تفاصيل الحساب</h3>
          <div className="countedit-left-one" style={{ display: "flex", gap: "5rem" }}>
            <div className="">
              <p style={{ color: "#cbcbcb", fontWeight: "700" }}>المنزل</p>
              <h6 style={{ paddingRight: '20px' }}>3 شارع الترعه المنشية المحلة الكبرى</h6>
            </div>

            <div className="">
              <p style={{ color: "#cbcbcb", fontWeight: "700" }}>العمل </p>
              <h6 style={{ paddingRight: '20px' }}> 3 شارع الترعه المنشية المحلة الكبرى </h6>

            </div>

          </div>
          < Link href="/countedit_four" className={styles.countedit_left_icon}>
            <i className="fa-solid fa-pen-to-square"></i>
            <h5> إضافة عنوان</h5>

          </Link>
          <Link href="/Home" className={styles.countedit_center}>
            <h6>
              تصفح المنتجات



            </h6>
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
export default countedit_two





