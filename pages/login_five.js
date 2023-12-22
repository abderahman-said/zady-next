import React from 'react';                              
import logiin from "../public/img/290922_06_lock_4-[Converted].png"   
import line from "../public/img/Path 31034.png"  
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
 function Login_five() {
  

    return (
        <>
  
  <div className={styles.login} > 
<div className={styles.loginright}>
    <Image loading="lazy"alt=""  src={logiin}></Image>
</div>

<div className={styles.loginleft}>
   <h2 style={{color:"#0781f3"}}>تسجيل الدخول</h2>

<button className={styles.bottone1}>
    <strong>    التسجيل باستخدام جوجل
    <i className="fa-brands fa-google-plus" style={{paddingRight:"15px"}}></i> 
</strong>
</button>
<button className={styles.bottone1} style={{background:"#3A5998"}}>
    <strong>          التسجيل باستخدام الفيس بوك

         <i className="fa-brands fa-facebook" style={{paddingRight:"15px"}}></i> 
</strong>
</button>
<div style={{position:"relative" }}>
    <Image loading="lazy"alt=""  src={line}></Image>
    <h6 style={{position:'absolute' , left:"45%",top:"0", borderRadius:"50%" ,background:"#fff", padding:"5px 10px"}}>or</h6>
</div>
<input placeholder="البريد الالكترونى" className={styles.input} name="text" type="text"/>
<input placeholder="كلمة السر" className={styles.input} name="text" type="text"/>
    <button className={`${styles.salebtn} ${styles.login_b} `}> 

    تسجيل الدخول

    
    </button>
 <div> 
    <div style={{color:"#b9b9b9", marginBottom:"0px"}}>ليس لديك حساب؟ <Link  href='/loginfour' style={{fontWeight:"bold" , color:'#0781f3'}}>انشاء حساب</Link>
    <hr  style={{color:"#ccc"}}></hr>
    </div>
    
  

<p style={{color:"#b9b9b9"}}>قم بالدخول لحسابك ليمكنك اتمام عملية الشراء بسهوله</p>
</div>  
</div>


</div>


     </>
    )
}

export default  Login_five       