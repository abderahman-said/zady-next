import React from 'react';
import shahn2 from "../public/img/security2.png";
import Link from "next/link";
import Image from 'next/image';
import shahn from "../public/img/fast-delivery.png";
import shahn3 from "../public/img/35a18503-a6a0-4825-9e47-80e2e29690f4.png";
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';


function loginone() {


    return (
        <>

            <Meta title='loginone' />

            <div style={{ padding: "50px 0px" }}>
                <div className={styles.pay_center} >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3> الدفع</h3>
                        <Image loading="lazy"alt=""  src={shahn2} ></Image>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>الشحن</h3>
                        <Image loading="lazy"alt=""  src={shahn} style={{ height: '65px' }}></Image>
                    </div>
                </div>
                <div className={styles.pay}>

                    <div className={styles.payleft}>
                        <h5>اضافه بطاقة الدفع</h5>
                        <input placeholder="الاسم فى الطاقه" className={styles.input} name="text" type="text"></input>
                        <input placeholder="رقم البطاقه" className={styles.input} name="text" type="text"></input>
                        <div className={styles.sanaa} >
                            <input placeholder="السنه" className={styles.input} name="text" type="text"></input>
                            <input placeholder="الشهر" className={styles.input} name="text" type="text"></input>

                        </div>
                        <input placeholder="cvv" className={styles.input} name="text" type="text"></input>

                        <p style={{ display: 'flex', gap: '1rem', color: "#ccc" }}>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className={styles.sanaa} />

                            اجعله العنوان الاساسى
                        </p>
                        <button className={`${styles.salebtn} ${styles.شراء}`}  >
                            <Link href="/loginone_sale"
                            > حفظ العنوان</Link>
                        </button>
                    </div>
                    <div className={styles.payright}>
                        <div className={styles.payright1} >
                            <h2 style={{ textAlign: 'center', color: '#000', paddingBottom: "20px" }}>تفاصيل الدفع</h2>
                            <div style={{ display: 'flex', flexDirection: "column", gap: '.5rem' }} >
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
                                <button className={`${styles.salebtn} ${styles.متابعه_الدفع}`}  >متابعه الدفع</button>


                            </div>

                        </div>
                        <div style={{ borderRadius: '30px', padding: "20px 10px", boxShadow: " 1px 3px 5px rgb(209, 209, 209)" }}>
                            <h2 style={{ textAlign: 'center', color: '#000', paddingBottom: "20px " }}>المنتجات</h2>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }}>
                                <Image loading="lazy"alt=""  src={shahn3} style={{
                                    width: "100px", height: "100%", boxShadow: " 1px 3px 5px rgb(209, 209, 209)", padding: "5px"
                                    , borderRadius: '20px'
                                }}></Image>
                                <div>
                                    <h6>  تلفزيون 50 بوصه فائق الجوده4kشاشه
                                        فائق الجوده والسرعه
                                    </h6>
                                    <p style={{ color: '#0099ff' }}>15,555</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>








        </>
    )
}

export default loginone
