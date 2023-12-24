import styles from '../styles/Home.module.css';
import Meta from '../Components/Meta'

import React from "react";
import Link from 'next/link';
import Image from "next/image";
import salla from "../public/img/shopping-cart.png"
import { useEffect } from 'react';
import { getUserOrderDetails } from '../Components/redux/reducers/lorem/loremSlice';
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';

function sala() {
 
  const getUserOrderDetailsData = useSelector((state) => state.lorem.getUserOrderDetailsData);
  const id = typeof window !== 'undefined' && window.localStorage.getItem("ib_ID");

  const dispatch = useDispatch();
 const UserId = typeof window !== 'undefined' && window.localStorage.getItem("ib_ID") || 0;
  useEffect(() => {
    // const id = window.localStorage.getItem("ib_ID");
    dispatch(getUserOrderDetails({ UserId }));
    // dispatch(addd({ UserId: "2" , id , count: 1 }));
    Aos.init({ duration: 1000 });
  }, [dispatch]);
// console.log("getUserOrderDetailsData" ,getUserOrderDetailsData)



// const IncressHandeller = (e) => {
//   const UserId = typeof window !== 'undefined'&&  window.localStorage.getItem("ib_ID");
//   const data = {
//     UserId,
//     productId: e,
//     count: 1,
//   };
//   dispatch(updateCart(data))
//     .unwrap()
//     .then(() => {
//       dispatch(getCarts(UserId));
//     })
//     .catch((rejectedValueOrSerializedError) => {
//       console.log(rejectedValueOrSerializedError);
//     });
// };




// const Data =
// getUserOrderDetailsData &&
// getUserOrderDetailsData?.lines?.map((ele, idx) => {
//   return (
//     <div key={idx} className={styles.item_product}>
//       <div className={styles.item_info_container}>
//         <div className={styles.Card_image}>
//           <Image
//             src={`/api/imgs?id=${ele.image}`}
//             alt={ele.productName}
//             width={150}
//             height={150}
//           />
//         </div>
//         <div className={styles.item_info}>
//           <p>{ele.name}</p>
//           {/* <p>{ele.total} ج</p> */}
//           <div className={styles.Product_Count}>
//             <button onClick={() => IncressHandeller(ele.productId)}>
//               +
//             </button>
//             <span>{ele.count}</span>
//             <button onClick={() => DecressHandeller(ele.productId)}>
//               -
//             </button>
//           </div>
//         </div>
//       </div>
//       <div
//         className={styles.delete_product}
//         onClick={() => HandelerDelete(ele.productId)}
//       >
//         {/* <TiDelete className={styles.icon_delete} /> */}
//       </div>
//     </div>
//   );
// });


  return (
    <>

      <div style={{
        display: "flex", paddingTop: '30px', flexDirection: 'column', justifyContent: 'center'
        , textAlign: 'center'
      }}>
        <h2>السله</h2>
        <div>
          {/* {Data} */}
          {/* <Image loading="lazy"alt=""  src={salla} style={{ width: '500px', height: '100%' }} className={styles.salaimg}></Image> */}
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