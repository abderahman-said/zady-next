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

  return (
    <>

      {getproductJsonData && (
        <div>
          {getproductJsonData.products
            ?.filter(cat => cat.id !== 0)
            .slice(0, 4)
            .map((cat) => (

              <ul key={cat.id} >
                  <li className='pt-4'>
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
 