import React ,{ useState ,useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from "react-redux";
import { getLorems, searchProducts } from "./redux/reducers/lorem/loremSlice";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../public/img/logo.png";
import abdo from '../public/img/asset-6.png';
import allleft2 from "../public/img/tv.png";
import allleft4 from "../public/img/82b3ae3b-00a4-42ed-be22-36c362df4c25.png";
import allleft5 from "../public/img/35a18503-a6a0-4825-9e47-80e2e29690f4.png";
import allleft6 from "../public/img/Group 41300.png";
import allleft7 from '../public/img/asset-12.png';
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
    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, dispatch]);
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
        <Button  onClick={handleShow} className={styles.m}>
        <i  className="fa-solid fa-bars icon"></i>
      </Button>
      <div className={styles.footerIconButtom}><i className="fa-solid fa-cart-shopping"></i></div>
      <div className={styles.footerIconButtom}><i className="fa-regular fa-heart"></i></div>
      <div className={styles.footerIconButtom}><i className="fa-solid fa-retweet"></i></div>
      <div className={styles.footerIconButtom}><i className="fa-regular fa-user"></i></div>
      <div className={styles.footerIconButtom}><i className="fa-solid fa-earth-oceania"></i></div>
      </div>
      
      </div>








      <Offcanvas show={show} onHide={handleClose} {...props} >
        <Offcanvas.Header closeButton style={{ backgroundColor: '#1a7dce'}}>
          <Offcanvas.Title><Image loading="lazy"alt="" src={logo} width={130} height={60}></Image></Offcanvas.Title>
        </Offcanvas.Header>
         <Offcanvas.Body>
         
        
          <div className={styles.acroHeader } style={{paddingTop:'20px'}}>
      <Accordion className={styles.accordion }>
      <Accordion.Item eventKey="0" >
        <Accordion.Header><a href="" style={{fontSize:'1.2rem'}}>كل المنتجات</a></Accordion.Header>
        <Accordion.Body >
        <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}>{
                      loremsData?.cats?.find((e) => e.id === 29  ).name
                    }</a></Accordion.Header>
        <Accordion.Body >
        <div id='' style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
          <div>
            <Image loading="lazy"alt="" src={allleft7} style={{textDecoration:"center"}}></Image>
            <h5 style={{ color:' #1aaaec', padding:'15px 0px' , fontSize:'1.2rem' ,borderBottom:'solid 1px #ccc' }}>
               </h5>
            <ul style={{ padding:'0px 20px' ,gap:'1rem'}}>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            
            </ul>
          </div>
          <div>
            <Image loading="lazy"alt="" src={allleft7} style={{textDecoration:"center"}}></Image>
            <h5 style={{ color:' #1aaaec', padding:'15px 0px' , fontSize:'1.1rem'  ,borderBottom:'solid 1px #ccc' }}>شاشات وتلفزيونات</h5>
            <ul style={{ padding:'0px 20px'}}>
              
            <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
          <div>
            <Image loading="lazy"alt="" src={allleft7} style={{textDecoration:"center"}}></Image>
            <h5 style={{ color:' #1aaaec', padding:'15px 0px' , fontSize:'1.1rem' , borderBottom:'solid 1px #ccc' }}>شاشات وتلفزيونات</h5>
            <ul style={{ padding:'0px 20px'}}>
              
           
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}>
                    {
                      loremsData?.cats?.find((e) => e.id === 28  ).name
                    }</a></Accordion.Header>
        <Accordion.Body>
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            
            <ul style={{ padding:'0px 20px' }}>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" >
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}>
        {
                      loremsData?.cats?.find((e) => e.id === 42  ).name
                    }
          </a></Accordion.Header>
        <Accordion.Body>
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            
            <ul style={{ padding:'0px 20px' }}>
             
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" >
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}>
        {
                      loremsData?.cats?.find((e) => e.id === 39  ).name
                    }
                    </a></Accordion.Header>
        <Accordion.Body>
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            
            <ul style={{ padding:'0px 20px' }}>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" >
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}> 
        {
                      loremsData?.cats?.find((e) => e.id === 31  ).name
                    }
                    </a></Accordion.Header>
        <Accordion.Body>
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            
            <ul style={{ padding:'0px 20px' }}>
             
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" >
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}>
        {
                      loremsData?.cats?.find((e) => e.id === 34  ).name
                    }
                    </a></Accordion.Header>
        <Accordion.Body>
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            
            <ul style={{ padding:'0px 20px' }}>
             
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" >
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}>   
        {
                      loremsData?.cats?.find((e) => e.id === 49  ).name
                    }   </a></Accordion.Header>
        <Accordion.Body>
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            
            <ul style={{ padding:'0px 20px' }}>
             
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" >
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}>{
                      loremsData?.cats?.find((e) => e.id === 33  ).name
                    } </a></Accordion.Header>
        <Accordion.Body>
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            <Image loading="lazy"alt="" src={allleft5} style={{textDecoration:"center"}}></Image>
            
            <ul style={{ padding:'0px 20px' }}>
              
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8" >
        <Accordion.Header><a style={{ color:' #1aaaec', fontWeight:"600"}}>{
                      loremsData?.cats?.find((e) => e.id === 7  ).name
                    } </a></Accordion.Header>
        <Accordion.Body>
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
          
            
            <ul style={{ padding:'0px 20px' }}>
              
         
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      
</Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <Accordion.Header><a href="#" style={{fontSize:'1.2rem'}}>الماركات </a></Accordion.Header>
        <Accordion.Body>
      
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
        <Image loading="lazy"alt="" src={allleft2} style={{textDecoration:"center" , width:"100%"}}></Image>
        <Image loading="lazy"alt="" src={allleft2} style={{textDecoration:"center" , width:"100%"}}></Image>
        <Image loading="lazy"alt="" src={allleft2} style={{textDecoration:"center" , width:"100%"}}></Image>
        <Image loading="lazy"alt="" src={allleft2} style={{textDecoration:"center" , width:"100%"}}></Image>
        <Image loading="lazy"alt="" src={allleft2} style={{textDecoration:"center" , width:"100%"}}></Image>
            
            <ul style={{ padding:'0px 20px' }}>
            
              
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
              <li style={{paddingTop:"10px"}}><a>oled</a></li>
            </ul>
          </div>
              
              
               
            
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" >
        <Accordion.Header><a href="#" style={{fontSize:'1.2rem'}}>العروض </a></Accordion.Header>
        <Accordion.Body>
      
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
                  <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold", textAlign:"center" , paddingTop:"30px" , borderBottom:" solid 1px #ccc"}}>عروض على الشاشات</h3>
                   <Image loading="lazy"alt="" src={allleft5}  ></Image>
                   <Image loading="lazy"alt="" src={allleft6}  ></Image>
                   <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold", textAlign:"center" , paddingTop:"30px" , borderBottom:" solid 1px #ccc"}}>عروض على الشاشات</h3>
                   <Image loading="lazy"alt="" src={allleft5}  ></Image>
                   <Image loading="lazy"alt="" src={allleft6} ></Image> <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold", textAlign:"center" , paddingTop:"30px"  , borderBottom:" solid 1px #ccc"}}>عروض على الشاشات</h3>
                   <Image loading="lazy"alt="" src={allleft5}  ></Image>
                   <Image loading="lazy"alt="" src={allleft6}  ></Image>
        </div>
                 
              
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" >
        <Accordion.Header> <a href="#" style={{fontSize:'1.2rem'}}>اجهزه كبيره </a></Accordion.Header>
        <Accordion.Body>
      
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
                   <h3 style={{color:"#107eec", fontSize:"1.4rem", fontWeight:"bold"}}> شاشات سامسونج</h3>
                   <p>  شاشات lg </p>
                   <p> شاشات توشيبا</p>
                   <p> شاشات تورنيدو</p>
                   <p> شاشات سونى</p>
                   <p> شاشات سونى </p>
                   <p> شاشات سارى</p>
                   <p> Castle TV</p>
                   <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>
                   <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                 </div>
                   <div className={styles.allright2 }>
                    

                   </div>
                   <div className={styles.allright3 }>
                    
                   </div>
                
                
                 
              
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" >
        <Accordion.Header><a href="#" style={{fontSize:'1.2rem'}}>اجهزه صغيره </a> </Accordion.Header>
        <Accordion.Body>
        <Accordion.Body>
      
      <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
                 <h3 style={{color:"#107eec", fontSize:"1.4rem", fontWeight:"bold"}}> شاشات سامسونج</h3>
                 <p>  شاشات lg </p>
                 <p> شاشات توشيبا</p>
                 <p> شاشات تورنيدو</p>
                 <p> شاشات سونى</p>
                 <p> شاشات سونى </p>
                 <p> شاشات سارى</p>
                 <p> Castle TV</p>
                 <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>
                 <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
               </div>
                 <div className={styles.allright2 }>
                  

                 </div>
                 <div className={styles.allright3 }>
                  
                 </div>
              
              
               
            
      </Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" >
        <Accordion.Header><a href="#" style={{fontSize:'1.2rem'}}>الكترونيات  </a> </Accordion.Header>
        <Accordion.Body>
      
      <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
                 <h3 style={{color:"#107eec", fontSize:"1.4rem", fontWeight:"bold"}}> شاشات سامسونج</h3>
                 <p>  شاشات lg </p>
                 <p> شاشات توشيبا</p>
                 <p> شاشات تورنيدو</p>
                 <p> شاشات سونى</p>
                 <p> شاشات سونى </p>
                 <p> شاشات سارى</p>
                 <p> Castle TV</p>
                 <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>
                 <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
               </div>
                 <div className={styles.allright2 }>
                  

                 </div>
                 <div className={styles.allright3 }>
                  
                 </div>
              
              
               
            
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" >
        <Accordion.Header><a href="#" style={{fontSize:'1.2rem'}}>كمبيوتر  </a></Accordion.Header>
        <Accordion.Body>
      
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
                   <h3 style={{color:"#107eec", fontSize:"1.4rem", fontWeight:"bold"}}> شاشات سامسونج</h3>
                   <p>  شاشات lg </p>
                   <p> شاشات توشيبا</p>
                   <p> شاشات تورنيدو</p>
                   <p> شاشات سونى</p>
                   <p> شاشات سونى </p>
                   <p> شاشات سارى</p>
                   <p> Castle TV</p>
                   <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>
                   <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                 </div>
                 <div className={styles.allright2 }>
                    

                   </div>
                   <div className={styles.allright3 }>
                    
                   </div>
                
                
                 
              
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" >
        <Accordion.Header> <a href="#" style={{fontSize:'1.2rem'}}>الصحه والجمال </a>
        </Accordion.Header>
        <Accordion.Body>
      
        <div style={{ direction:'rtl', display:"flex", flexDirection:'column' , justifyContent:'flex-start',  padding:'10px 20px'}}>
                   <h3 style={{color:"#107eec", fontSize:"1.4rem", fontWeight:"bold"}}> شاشات سامسونج</h3>
                   <p>  شاشات lg </p>
                   <p> شاشات توشيبا</p>
                   <p> شاشات تورنيدو</p>
                   <p> شاشات سونى</p>
                   <p> شاشات سونى </p>
                   <p> شاشات سارى</p>
                   <p> Castle TV</p>
                   <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>
                   <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                 </div>
                 <div className={styles.allright2 }>
                    

                   </div>
                   <div className={styles.allright3 }>
                    
                   </div>
                
                
                 
              
        </Accordion.Body>
      </Accordion.Item>
  </Accordion>
            </div>
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


