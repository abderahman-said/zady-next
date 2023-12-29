import styles from '../styles/Home.module.css';
import Meta from '../Components/Meta'

import React from "react";
import Link from 'next/link';
import Image from "next/image";
import salla from "../public/img/shopping-cart.png"
import { useEffect } from 'react';
import { addToCart, finishCart, getUserOrderDetails } from '../Components/redux/reducers/lorem/loremSlice';
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Container, Row } from 'react-bootstrap';

function sala() {
 
  const getUserOrderDetailsData = useSelector((state) => state.lorem.getUserOrderDetailsData);
  const finishCart = useSelector((state) => state.lorem.finishCartData);
  const id = typeof window !== 'undefined' && window.localStorage.getItem("ib_ID");

  const dispatch = useDispatch();
 const UserId = typeof window !== 'undefined' && window.localStorage.getItem("ib_ID") || 0;
  useEffect(() => {
    const id = window.localStorage.getItem("ib_ID");
      dispatch(getUserOrderDetails({ id:  id  }));
     Aos.init({ duration: 1000 });
console.log( localStorage)

  }, [dispatch]);

  useEffect(() => {
    const UserId = typeof window !== 'undefined' && window.localStorage.getItem("ib_ID") || 0;
    if (!getUserOrderDetails) {
      dispatch(getUserOrderDetails(UserId));
    }
  }, [dispatch ]);

   
const IncressHandeller = (e) => {
  const UserId = typeof window !== 'undefined'&&  window.localStorage.getItem("ib_ID");
  const data = {
    UserId,
    productId: e,
    count: 1,
  };
  dispatch(updateCart(data))
    .unwrap()
    .then(() => {
      dispatch(getUserOrderDetails(UserId));
    })
    .catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError);
    });
};

const DecressHandeller = (e) => {
  const UserId = typeof window !== 'undefined'&&  window.localStorage.getItem("ib_ID");
  const data = {
    UserId,
    productId: e,
    count: -1,
  };
  dispatch(updateCart(data))
    .unwrap()
    .then(() => {
      dispatch(getUserOrderDetails(UserId));
    })
    .catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError);
    });
};
const FinishCart = () => {
  const UserId = typeof window !== 'undefined' && window.localStorage.getItem("ib_ID") || 0;

  dispatch(finishCart({ id: UserId }))
    .unwrap()
    .then(() => {
      dispatch(getUserOrderDetails(id));
      // ShowSuccess();
    })
    .catch((error) => {
      console.log(error);
    });
};

const Data =
getUserOrderDetailsData &&
getUserOrderDetailsData?.lines?.map((ele, idx) => {
  return (
    <div key={idx}  className="item_product" >
      <div  className="item_info_container">
        <div className="Card_image">
          <LazyLoadImage
            src={`/api/images?id=${ele.image}`}
            alt={ele.productName}
            width={150}
            height={150}
          />
        </div>
        <div  className="item_info">
          <p>{ele.name}</p>
          {/* <p>{ele.total} ج</p> */}
          {/* <div className={styles.Product_Count}>
            <button onClick={() => IncressHandeller(ele.productId)}>
              +
            </button>
            <span>{ele.count}</span>
            <button onClick={() => DecressHandeller(ele.productId)}>
              -
            </button>
          </div> */}
        </div>
      </div>
      <div
        className={styles.delete_product}
        onClick={() => HandelerDelete(ele.productId)}
      >
        {/* <TiDelete className={styles.icon_delete} /> */}
      </div>
    </div>
  );
});

const TotalPrice = getUserOrderDetails && (
  <div    className="TotlaPrice">
    <h3>الملخص</h3>
    <div>
      <p>السعر ( {getUserOrderDetails.length} عناصر )</p>
      <p>0 ج</p>
    </div>
    <div>
      <p>الشحن</p>
      {/* <p>{delivaryPrice} ج</p> */}
    </div>
    <div>
      <p>السعر الكلي</p>
      <p>0</p>
    </div>
  </div>
);
  return (
    <Container dir='rtl'>
       {Data && Data.length > 0 ? (
       <div className='sala-data'>
  <div>
    <div className='h2-sala'> 
    <div  id='svgsala' >
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg>  
      </div>
    السلة
    </div>
    <Row>

<Col md={7} >
<div  className="item_info_gap">
 {Data}
 </div>
</Col>
<Col md={5} >

  {TotalPrice}
  <button
  className={styles.contaniue_to_Shop}
  onClick={() => FinishCart({ id: 2 })}  
>
  حفظ
</button>
</Col>
</Row>

  </div>
       </div>
) : (
  <div className='salaa'>
    <div className='h2-sala'> 
    <div  id='svgsala' >
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg>  
      </div>
    السلة
    </div>
    <div>
      <Image
        loading="lazy"
        alt=""
        src={salla}
        style={{ width: '500px', height: '100%' }}
        className={styles.salaimg}
      />
    </div>
    <p style={{ color: "#ccc" }}>لاتوجد منتجات في السلة حاليًا. تسوق الآن وأضف المنتجات.</p>
    <div style={{ padding: '20px 0 30px 0' }}>
      <button className={styles.salebtn}>
        <Link href="/Home">
          تسوق الآن
        </Link>
      </button>
    </div>
  </div>
)}

      
    </Container>
  )
}
export default sala       