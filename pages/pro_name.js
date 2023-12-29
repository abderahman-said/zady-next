 import React, { useState, useEffect } from 'react';
 import Link from 'next/link';
import styles from "../styles/Home.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getproductJson } from '../Components/redux/reducers/lorem/loremSlice';
const pro_name = (props) => {
  const dispatch = useDispatch();
   const getproductJsonData = useSelector((state) => state.lorem.getproductJsonData);  
   useEffect(() => {
     dispatch(getproductJson({ id: props.id }));
  }, [dispatch, props.id]);


  
  if (!getproductJsonData) {
    return (
    <div  style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"55.7vh"}}>
      <div  className={styles.ui_abstergo}>
  <div  className={styles.abstergo_loader}>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div  className={styles.ui_text}>
    Loading  
    <div className={styles.ui_dot}></div>
    <div className={styles.ui_dot}></div>
    <div className={styles.ui_dot}></div>
  </div>
</div>
    </div>
    );
  }
  return (
    <>

      {getproductJsonData && (
        <div>
          {getproductJsonData?.products
            ?.filter(cat => cat.id !== 0)
            .slice(0, 3)
            .map((cat) => (
              <ul key={cat.id} >
                {cat.id}
                  <li className=''>
                  <Link    href={`/product/id/${cat.id}`}  as={`/product/${cat.id}/${encodeURIComponent(cat.name.replace(/\s+/g, '-'))}`} className={styles.pro_name}>
                  {cat.name.substring(0, 30) + "...."}
                    </Link>
                  </li>
              </ul>

            ))}
        </div>
      )}


    </>

  )
}

export default pro_name
 