import React ,{ useState ,useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from "react-redux";
import { getLorems, getSubCategories, searchProducts } from "./redux/reducers/lorem/loremSlice";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../public/img/logo.png";
import menu from "../public/img/icons8-menu-bar-80.png";
 
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useRouter } from "next/router";
import { Logout } from './redux/reducers/AuthSlice';



function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const loremsData = useSelector((state) => state.lorem.loremsData);
   const getSubCategoriesData = useSelector((state) => state.lorem.getSubCategoriesData);  
  
 
  const { CartsArr } = useSelector((state) => state.ShopSlice);
console.log("CartsArr" ,CartsArr)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  const isFixed = scrollY > 300;
  const router = useRouter();
  const Log =
  typeof window !== "undefined" &&
    window.localStorage.getItem("ib_ID") === "0" ? (
    <Link href={"/Auth/auth"}  className={router.pathname === "/Auth/auth" ? styles.active : styles.link2} >
        تسجيل الدخول
    </Link>
  ) : (
    <Link href={"/Auth/auth"}  onClick={() => {
      dispatch(Logout());
    }}   className={router.pathname === "/Auth/auth" ? styles.active : styles.link2} >
        تسجيل الخروج
    </Link>
  );

 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(searchProducts(searchTerm));
  
        setSearchResults(response.payload);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    dispatch(getLorems());
    dispatch(getSubCategories({ id: props.id }));
    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, dispatch   , props.id]);
  return (
    <>
  <div className={`fixed-nav-div ${isFixed ? 'fixed-nav' : ''}`}>

    
<div className={styles.navbar}  >


       
      <Container  style={{maxWidth: "1800px" }} className={styles.container}>
         <div className='nav-flex-between'>
         <Link href='/Home'><Image loading="lazy"alt="" src={logo} width={130} height={60}></Image></Link> 

         <div className={styles.group}>
      <i className="fa-solid fa-magnifying-glass icon_g"></i>
      <input
        placeholder="ابحث"
        type="search"
        className={styles.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='result-search'>
        {searchResults.products?.slice(0, 5).map((result) => (
            <p className='flex-search-gap' key={result.id}>
            <Link   >
                 <LazyLoadImage loading="lazy"src={`/api/images?id=${result.mainImage}`} alt={result.name} width={50} height={50} />
                 {result.name}
            </Link>
            </p>
        ))}
      </div>
    </div>

       <div className="listmenu">

            <div  className={styles.navleft1} >
              <Link href='/sala'>
              <h6 > السله</h6>
              </ Link>
              <div className='sala'>
              <i className="fa-solid fa-cart-shopping"></i>
                 <div className='sala-span' ><span>{CartsArr ? CartsArr.lines.length : 0}</span> </div>  
              </div>
            </div>
            <div  className={styles.navleft1}> 
            {Log}
              <div className='sala'>
            <i className="fa-regular fa-user"  ></i>
            </div> 
      </div> 
           
         </div> 
             
             
         </div> 
      
     </Container>
    </div> 

    
 
    <div className={styles.navbuttom}>
        <div  onClick={handleShow} className={styles.m}>
        <Image loading="lazy"alt="" src={menu} width={25} height={25}></Image>
      </div>
      <div className={styles.footerIconButtom}><i className="fa-solid fa-cart-shopping"></i></div>
      <div className={styles.footerIconButtom}><i className="fa-regular fa-heart"></i></div>
      <div className={styles.footerIconButtom}><i className="fa-regular fa-user"></i></div>
      </div>
      
      </div>








      <Offcanvas show={show} onHide={handleClose} {...props} className="nav-mob" >
        <Offcanvas.Header closeButton >
            <Image loading="lazy"alt="" src={logo} width={130} height={60}></Image> 
        </Offcanvas.Header>
         <Offcanvas.Body>

 
        { 
  loremsData?.cats?.map((e) => { 
    return ( 
      <div key={e.id}>
      <Accordion defaultActiveKey="0" className={styles.accordion}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>{e.name}</p>
          </Accordion.Header>
          <Accordion.Body>
            {getSubCategoriesData && (
              <div className="">
                {getSubCategoriesData.cats
                  ?.map((cata) => (
                    <div className='' key={cata.id}>
                      <Link
                        href={`/store/id/${cata.id}`}
                        as={`/store/${cata.id}/${encodeURIComponent(
                          cata.name.replace(/\s+/g, '-')
                        )}`}
                      >
                        <div className={styles.name_head_sub}>
                          <h5>{cata.name}</h5>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            )}
            {dispatch(getSubCategories({ id: e.id }))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    );
  }) 
}
        
      
        </Offcanvas.Body>
        
      </Offcanvas>
      
    </>
  );
}

function Example() {
  return (
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Example;


