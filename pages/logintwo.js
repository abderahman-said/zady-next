import shahn4 from "../public/img/photo_6012363210176445248_x.jpg";
import shahn5 from "../public/img/Group 41409.png";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import home1 from "../public/img/asset-12.png";
import home2 from "../public/img/asset-7.png";
import home4 from "../public/img/10015.png";
import home5 from "../public/img/asset-5.png";
import home6 from "../public/img/asset-3.png";
import heart from "../public/img/Group 41403.png";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Meta from '../Components/Meta'
import styles from '../styles/Home.module.css';
import Image from "next/image";
import Link from "next/link";
import shahn3 from "../public/img/35a18503-a6a0-4825-9e47-80e2e29690f4.png";
function logintwo() {
  return (
    <>
      <Meta title='logintwo' />

      <h2 style={{ textAlign: "center", padding: '20px' }}>السله</h2>
      <div className={styles.sala_contant}>
        <div className={styles.salar_contant}>
          <div style={{ borderRadius: '30px', }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }}>
              <Image loading="lazy"alt=""  src={shahn3} style={{
                width: "100px", height: '100%', boxShadow: " 1px 3px 5px rgb(209, 209, 209)", padding: "10px"
                , borderRadius: '20px'
              }}></Image>
              <div className={styles.sala_contantp}>
                <div style={{ display: 'flex', gap: '1rem', float: 'left', paddingRight: "10px" }}>
                  <Image loading="lazy"alt=""  src={shahn5}></Image>
                  <i className="fa-solid fa-basket-shopping" style={{ color: '#1f5592' }}></i>
                </div>
                <h4>  تلفزيون 50 بوصه فائق الجوده4kشاشه
                  فائق الجوده والسرعه
                </h4>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h6 style={{ color: '#0059ff' }}>15,555</h6>
                  <Image loading="lazy"alt=""  src={shahn4} style={{ width: "50px", height: '100%' }}></Image>
                </div>
                <p style={{ color: '#0099ff', fontSize: "small" }}>الكميه <span style={{ marginRight: '30px' }}>+1</span></p>

              </div>
            </div>

          </div>

          <div style={{ borderRadius: '30px', }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: "2rem", alignItems: 'center' }}>
              <Image loading="lazy"alt=""  src={shahn3} style={{
                width: "100px", height: '100%', boxShadow: " 1px 3px 5px rgb(209, 209, 209)", padding: "10px"
                , borderRadius: '20px'
              }} ></Image>
              <div className={styles.sala_contantp}>
                <div style={{ display: 'flex', gap: '1rem', float: 'left', paddingRight: "10px" }}>
                  <Image loading="lazy"alt=""  src={shahn5}></Image>
                  <i className="fa-solid fa-basket-shopping" style={{ color: '#1f5592' }}></i>
                </div>
                <h4>  تلفزيون 50 بوصه فائق الجوده4kشاشه
                  فائق الجوده والسرعه
                </h4>
                {/* <h1 >alo</h1> */}

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h6 style={{ color: '#0059ff' }}>15,555</h6>
                  <Image loading="lazy"alt=""  src={shahn4} style={{ width: "50px", height: '100%' }}></Image>
                </div>
                <p style={{ color: '#0099ff', fontSize: "small" }}>الكميه <span style={{ marginRight: '30px' }}>+1</span></p>
              </div>
            </div>

          </div>
        </div>


        <div className={styles.salal_contant}  >
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
            <button className={`${styles.salebtn} ${styles.متابعه_الدفع}`}>
              <Link href="/loginone                       " >
                متابعه الدفع
              </Link>
            </button>


          </div>

        </div>


      </div>


      <div className={styles.gal} style={{ padding: "50px 0" }}>
        <div className={styles.Gallarytext}>
          <h2>منتجات متشابهه</h2>


        </div>
        <Swiper
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

          }}
          loop={'true'}
          autoplay
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={styles.partt} >
              <div className={styles.heart}><Image loading="lazy"alt=""  src={heart} ></Image>
              </div>
              <Image loading="lazy"alt=""  src={home5}></Image>
              <h6>اسم المنتج</h6>
              <div className={styles.p}>
                <p>علامته التجاريه</p>
                <div className={styles.iconaboutcp}>
                  <i className="fa-solid fa-star iconpartt"></i>
                  <i className="fa-solid fa-star iconpartt"></i>
                  <i className="fa-solid fa-star iconpartt"></i>
                  <i className="fa-regular fa-star iconpartt"></i>
                  <i className="fa-regular fa-star iconpartt"></i>
                </div>
              </div>
              <div className={styles.pp}>
                <div className={styles.pp2}>
                  <p>AED 32.00</p>
                  <p>AED 25.60</p>
                </div>
                <button>
                  30$ OFF
                </button>
              </div>

            </div></SwiperSlide>
          <SwiperSlide>  <div className={styles.partt} >
            <div className={styles.heart}><Image loading="lazy"alt=""  src={heart} ></Image>
            </div>
            <Image loading="lazy"alt=""  src={home2}></Image>
            <h6>اسم المنتج</h6>
            <div className={styles.p}>
              <p>علامته التجاريه</p>
              <div className={styles.iconaboutcp}>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
              </div>
            </div>
            <div className={styles.pp}>
              <div className={styles.pp2}>
                <p>AED 32.00</p>
                <p>AED 25.60</p>
              </div>
              <button>
                30$ OFF
              </button>
            </div>

          </div> </SwiperSlide>
          <SwiperSlide>   <div className={styles.partt} >
            <div className={styles.heart}><Image loading="lazy"alt=""  src={heart} ></Image>
            </div>
            <Image loading="lazy"alt=""  src={home1}></Image>
            <h6>اسم المنتج</h6>
            <div className={styles.p}>
              <p>علامته التجاريه</p>
              <div className={styles.iconaboutcp}>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
              </div>
            </div>
            <div className={styles.pp}>
              <div className={styles.pp2}>
                <p>AED 32.00</p>
                <p>AED 25.60</p>
              </div>
              <button>
                30$ OFF
              </button>
            </div>

          </div></SwiperSlide>
          <SwiperSlide>   <div className={styles.partt} >
            <div className={styles.heart}><Image loading="lazy"alt=""  src={heart} ></Image>
            </div>
            <Image loading="lazy"alt=""  src={home1}></Image>
            <h6>اسم المنتج</h6>
            <div className={styles.p}>
              <p>علامته التجاريه</p>
              <div className={styles.iconaboutcp}>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
              </div>
            </div>
            <div className={styles.pp}>
              <div className={styles.pp2}>
                <p>AED 32.00</p>
                <p>AED 25.60</p>
              </div>
              <button>
                30$ OFF
              </button>
            </div>

          </div></SwiperSlide>

          <SwiperSlide>   <div className={styles.partt} >
            <div className={styles.heart}><Image loading="lazy"alt=""  src={heart} ></Image>
            </div>
            <Image loading="lazy"alt=""  src={home6}></Image>
            <h6>اسم المنتج</h6>
            <div className={styles.p}>
              <p>علامته التجاريه</p>
              <div className={styles.iconaboutcp}>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
              </div>
            </div>
            <div className={styles.pp}>
              <div className={styles.pp2}>
                <p>AED 32.00</p>
                <p>AED 25.60</p>
              </div>
              <button>
                30$ OFF
              </button>
            </div>

          </div></SwiperSlide>

          <SwiperSlide>   <div className={styles.partt} >
            <div className={styles.heart}><Image loading="lazy"alt=""  src={heart} ></Image>
            </div>
            <Image loading="lazy"alt=""  src={home4}></Image>
            <h6>اسم المنتج</h6>
            <div className={styles.p}>
              <p>علامته التجاريه</p>
              <div className={styles.iconaboutcp}>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-solid fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
                <i className="fa-regular fa-star iconpartt"></i>
              </div>
            </div>
            <div className={styles.pp}>
              <div className={styles.pp2}>
                <p>AED 32.00</p>
                <p>AED 25.60</p>
              </div>
              <button>
                30$ OFF
              </button>
            </div>

          </div></SwiperSlide>

        </Swiper>





      </div>
    </>
  )

};

export default logintwo;