
import React from "react";
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';
import Image from "next/image";
import shahn4 from "../public/img/photo_6012363210176445248_x.jpg";
import shahn5 from "../public/img/Group 41409.png";
import shahn3 from "../public/img/35a18503-a6a0-4825-9e47-80e2e29690f4.png";
import Link from "next/link";

function countedit() {

  return (
    <>
       

      <div className={styles.counteditsix} style={{ minHeight: "83vh" }}>
        <div className={`${styles.countedit_right} ${styles.counteditsix_right}`}>
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
          <h2 style={{ paddingRight: "15px" }}>طلبات  مكتملة</h2>

          <div style={{ borderRadius: '30px', }}>
            <div className={styles.countsix_left_mobil} style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }}>
              <Image loading="lazy"alt=""  src={shahn3} style={{
                height: '100%', width: "100px", boxShadow: " 1px 3px 5px rgb(209, 209, 209)", padding: "10px"
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
                  <h6 style={{ color: '#0059ff', fontWeight: "bold" }}>15,555</h6>
                </div>
                <button className={styles.counteditfive_BTN}>
                  تقيم المنتج
                </button>
              </div>
            </div>

          </div>

          <div style={{ borderRadius: '30px', }}>
            <div className={styles.countsix_left_mobil} style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }}>
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
                  <h6 style={{ color: '#0059ff', fontWeight: "bold" }}>15,555</h6>
                </div>
                <button className={styles.counteditfive_BTN}>
                  تقيم المنتج
                </button>
              </div>
            </div>

          </div>







        </div>
        <div className={styles.salal_contant} style={{ padding: "20px 10px 60px" }}  >
          <h2 style={{ textAlign: 'center', color: '#000', paddingBottom: "20px" }}>تفاصيل الدفع</h2>
          <div style={{ display: 'flex', flexDirection: "column", gap: '.5rem', width: '100%' }} >
            <div style={{ display: "flex", justifyContent: 'space-between' }}  >
              <h6>سعر المنتجات</h6>
              <h6>1000ج.م </h6>

            </div >
            <div style={{ display: "flex", justifyContent: 'space-between' }}  >
              <h6 style={{ borderBottom: 'solid 1px #ccc' }} >سعر الشحن</h6>
              <h6 style={{ lineHeight: '2' }} >2ج.م </h6>
            </div>
            <div style={{ display: "flex", borderBottom: 'solid 1px black', justifyContent: 'space-between' }}  >
              <h6 style={{ color: 'black' }}> الاجمالى</h6>
              <h6 style={{ color: 'black' }}> 15,00,0ج.م </h6>
            </div>



          </div>

        </div>
      </div>
    </>
  )
}
export default countedit

