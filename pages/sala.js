import styles from '../styles/Home.module.css';
import Meta from '../Components/Meta'

import React from "react";
import Link from 'next/link';
import Image from "next/image";
import salla from "../public/img/shopping-cart.png"

function sala() {

  return (
    <>

      <div style={{
        display: "flex", paddingTop: '30px', flexDirection: 'column', justifyContent: 'center'
        , textAlign: 'center'
      }}>
        <h2>السله</h2>
        <div>
          <Image loading="lazy"alt=""  src={salla} style={{ width: '500px', height: '100%' }} className={styles.salaimg}></Image>
        </div>

        <p style={{ color: "#ccc" }}>لاتوجد منتجات ف السله حاليا ,تسوق الان واضف المنتجات</p>
        <div style={{ padding: '20px 0 30px 0' }}>
          <button className={styles.salebtn}>
            <Link href="/Home">
              تسوق الان
            </Link>
          </button>
        </div>

      </div>
    </>
  )
}
export default sala       