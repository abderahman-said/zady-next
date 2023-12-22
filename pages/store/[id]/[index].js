import Image from 'next/image';
 import 'swiper/css';
import Aos from "aos";
import "aos/dist/aos.css";

import blogs from "../../../public/img/Untitled-3.png";
import mark1 from "../../../public/img/41c8e3e6-359d-4627-a835-d2b61ae36f45.png"
import mark2 from "../../../public/img/50b2c98d-4694-4e36-a872-79812d24a365.png"
import mark3 from "../../../public/img/82b3ae3b-00a4-42ed-be22-36c362df4c25.png"
import mark4 from "../../../public/img/693b0945-2737-419f-b1cb-8885f014a040.png"
import mark5 from "../../../public/img/9e323147-f5d2-428b-a69c-260b15842950.png"
import Accordion from 'react-bootstrap/Accordion';
import styles from '../../../styles/Home.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import React, { useState , useEffect} from 'react';
import SwiperCore, { Autoplay , Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getFullCategory } from "../../../Components/redux/reducers/lorem/loremSlice"
 import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
function LeftTabsExample(props) {
  const [searchValue, setSearchValue] = useState('');
  const [search_Value, setSearch_Value] = useState("");

  const [specs, setSpecs] = useState([]); 
  const [selectedSpecs, setSelectedSpecs] = useState([]);    
  const [show, setShow] = useState(false);
  //  const router = useRouter();
  //   const productId = router.query.id;
  const router = useRouter();
  const  prod   = router.query.id;
  const productId = parseInt(prod, 10);

 




  const handleAddSpec = (id, name) => {
    const existingSpec = selectedSpecs.find((spec) => spec.id === id);

    if (!existingSpec) {
      setSelectedSpecs([...selectedSpecs, { id, name }]);
    } else {
      const updatedSpecs = selectedSpecs.filter((spec) => spec.id !== id);
      setSelectedSpecs(updatedSpecs);
    }
  
    const existingSpecInAllSpecs = specs.find((spec) => spec.id === id);
    if (!existingSpecInAllSpecs && !existingSpec) {
      setSpecs([...specs, { id, name }]);
    } else if (!existingSpec) {
      const updatedAllSpecs = specs.filter((spec) => spec.id !== id);
      setSpecs(updatedAllSpecs);
    }
  
    if (productId) {
      let requestSpecsEmbty = specs; 
    
      if (requestSpecsEmbty.length === 0) {
        requestSpecsEmbty = null;  
      }
      const pathName = name.replace(/\s+/g, '-');
      const url = `/store?id=${productId}/${pathName}`;
      window.history.pushState({}, '', url);
    }
  };
  // axios
  // .post('https://zayady.deltawy.com/rest/test.categories/getFullCategory', {
  //   "catId": productId,
  //   "minPrice": 29,
  //   "maxPrice": 29,
  //   "specs": requestSpecsEmbty,  
  // })
  // .then((response) => {
  //   setStoreData(response.data);
  //   const newCats = response.data.cats;
  //   setCats(newCats);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  const getFullCategoryData = useSelector((state) => state.lorem.getFullCategoryData);

 
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(getFullCategory({ productId, specs }));
    }
    Aos.init({ duration: 1000 });
    SwiperCore.use([Navigation]);
  }, [productId, dispatch, specs]);

 


  function renderCategories() {
    return getFullCategoryData?.cats?.map((cat) => (
      <div key={cat.id} className={styles.article_blogs}>
        {renderProducts(cat)}
      </div>
    ));
  }
  
  function renderProducts(cat) {
     const filteredProducts = cat.products?.filter((product) => product.catId === cat.id);
  
    return filteredProducts?.map((product) => (
      <div className="card-store" key={product.id} data-aos="fade-up">
        <Link  key={product.catId} href={`/product/id/${product.id}`}  as={`/product/${product.id}/${encodeURIComponent(product.name.replace(/\s+/g, '-'))}`}>
          <div className='img'>
          <LazyLoadImage src={`/api/images?id=${product.image}`} alt={product.name} width={200} height={200}  />
          </div>
          <div className='div-back-top' >
            <p>{product.name}</p>
            <div class="flex-product-star">
            <p>علامته التجاريه</p>
            <div class="iconaboutcp">
              <i class="fa-solid fa-star iconpartt"></i>
              <i class="fa-solid fa-star iconpartt"></i>
          <i class="fa-solid fa-star iconpartt"></i>
          <i class="fa-regular fa-star iconpartt"></i>
          <i class="fa-regular fa-star iconpartt"></i>
          </div>
          </div>
            <div className='add-cart'>
              <i className="fa-solid fa-cart-shopping"></i>
              <p>اضافه الى السله </p>
            </div>
          </div>
        </Link>
      </div>
    ));
  }
  
  
 

  


   if (!getFullCategoryData) {
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
   
   < >

   {/* ==========================home=========================== */}

<section className={styles.hometwo}>
 
  <div style={{padding:"10px 30px" }} className={styles.padding_blog_phone}>
    <LazyLoadImage loading="lazy"src={blogs}  alt=""  style={{width:'100%'}}></LazyLoadImage>
  </div>
</section>
<div className={styles.padding_blog_phone}  style={{padding:" 20px 30px"}}>
   
  <Swiper
      breakpoints={{
        100: {
              slidesPerView: 2,
              spaceBetween: 20,
        },
        
        768: {
              slidesPerView: 2,
              spaceBetween: 30,
        },
        999: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1050: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
         1100: {
              slidesPerView: 8,
              spaceBetween: 10,
        },
        4100: {
          slidesPerView: 8,
          spaceBetween: 30,
    }

  }}
  loop
  autoplay
      spaceBetween={30}
      navigation
      slidesPerView={8}
    >
      {
        getFullCategoryData?.brands?.map((brand) => {
          return (
            <SwiperSlide> 
              <div key={brand.id} className="card-cat brands" data-aos="fade-up" >
                <Link    href={`/product/id/${brand.id}`}  as={`/product/${brand.id}/${encodeURIComponent(brand.name.replace(/\s+/g, '-'))}`} >
                 <div className='img-store-div' >
                  <LazyLoadImage loading="lazy"src={`/api/images?id=${brand.image}`} alt={brand.name} width={70} height={50} />
                  </div>
                  <h6>{brand.name}</h6>
                </Link>
              </div>
                
            </SwiperSlide>
            ) 
            })
      }
     
    
      
    </Swiper>
  </div>


{/* ==========================about=========================== */}
 
		

<section className={styles.page}>
<div className={`${styles.sildebar} ${styles.sildebar_labtop}`}>
  <div>
  <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header ><h3>السعر</h3></Accordion.Header>
        <Accordion.Body>
        <div className="flex-range-price">
       <div className='content' >
      <p>من </p>
       <input
        placeholder=""
        min={0}
        type="number"
      />
       </div>
       <div className='content' >
      <p>الى </p>
       <input
        placeholder=""
        type="number"
        min={0}
      />
       </div>
  </div>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
  </div>
   
  <div className={styles.blog_ist} >

















  <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header > <h3>التصنيفات</h3></Accordion.Header>
        <Accordion.Body>
        {getFullCategoryData?.subCats?.map((e) => (
        <div style={{ display: 'flex', flexDirection: 'column' }} key={e.id}>
          <input
            placeholder="بحث"
            type="text"
            className='search-subCats'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {e.name.includes(searchValue) && (
            <Link
              href={`/store/id/${e.id}`}
              as={`/store/${e.id}/${encodeURIComponent(e.name.replace(/\s+/g, '-'))}`}
            >
              <div className={styles.tas}>
                <p>{e.name}</p>
                <div>({e.count})</div>
              </div>
            </Link>
          )}
        </div>
      ))}

        </Accordion.Body>
      </Accordion.Item>
    </Accordion> 

    {getFullCategoryData?.productSpecs?.map((e, index) => {  
  const eventKey = index.toString();
  const uniqueSpecs = e.specs.filter((spec, specIndex) => {
    const index = e.specs.findIndex((s) => s.name === spec.name);
    return index === specIndex;
  });


  const handleSearchChange = (event) => {
    setSearch_Value(event.target.value);
  };

  return (
    <Accordion defaultActiveKey={[eventKey]} alwaysOpen key={e.specId}>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          <h3>{e.name}</h3>
        </Accordion.Header>
        <Accordion.Body>
          <input
            placeholder="بحث"
            type="text"
            className='search-subCats'
            value={search_Value}
            onChange={handleSearchChange}
          />
          {uniqueSpecs
            .filter((spec) => spec.name.includes(search_Value))
            .map((spec) => (
              <div key={spec.id} className='Specs-flex'>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  
                  <div className={styles.tas} onClick={() => { handleAddSpec(e?.specId , spec?.name); }}>
                    <p>{spec.name}</p>
                    <p>({spec.count})</p>
                  </div>
                </div>
              </div>
            ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
})}





    
  </div>
</div>


<div className={styles.article}>
    {renderCategories(getFullCategoryData?.cats)}
</div>

</section>






{/* ==========================bannertwo=========================== */}
<section className={`${styles.bannertwo} ${styles.padding_blog_phone}`}  >
  <h2 style={{fontWeight: "bold"}}>تسوق حسب الماركه</h2>
  <div>
    <a><Image loading="lazy"src={mark1} alt=""></Image></a>
    <a><Image loading="lazy"src={mark2}  alt="" ></Image></a>
    <a><Image loading="lazy"src={mark3}alt=""></Image></a>
    <a><Image loading="lazy"src={mark4}alt=""></Image></a>
    <a><Image loading="lazy"src={mark5}alt=""></Image></a>
  </div>
</section>
{/* ============= */}
       <Container style={{maxWidth: "1800px" }}>

       <section className={styles.padding_blog_phone} style={{display:"flex" , justifyContent:"space-around",flexWrap:"wrap" , gap:"1rem" , direction:"rtl" ,padding:"70px 30px", alignItems:"center"
}}>
  <div style={{display:'flex' , alignItems:'center' , gap:"1.5rem" , justifyContent:'center'}}>
 
  <div  style={{padding:"15px" ,display:'flex', fontSize:"1.7rem" , color:"#0293C8" , background:"#F6F6F6" , borderRadius:'10px'}}>
  <i className="fa-solid fa-gear"></i>
    </div>
    <div>
    <h5>الدعم الفنى</h5>
    <p style={{color:"#b6b6b6"}}>دعم فنى على مدار الساعه</p>
    </div>
  </div>
  <div style={{display:'flex' , alignItems:'center', gap:"1.5rem" , justifyContent:'center'}}>

  <div style={{padding:"15px" ,display:'flex', fontSize:"1.7rem" , color:"#0293C8" , background:"#F6F6F6" , borderRadius:'10px'}}>
  <i className="fa-brands fa-cc-visa"></i>
    </div>
    <div>
    <h5>الدعم الفنى</h5>

    <p style={{color:"#b6b6b6"}}>دعم فنى على مدار الساعه</p>
    </div>
  </div>
  <div style={{display:'flex' , alignItems:'center' , gap:"1.5rem", justifyContent:'center'}}>

  <div style={{padding:"15px" ,display:'flex', fontSize:"1.7rem" , color:"#0293C8" , background:"#F6F6F6" , borderRadius:'10px'}}>

  <i className="fa-solid fa-clock-rotate-left"></i>
    </div>
    <div>
    <h5>الدعم الفنى</h5>

    <p style={{color:"#b6b6b6"}}>دعم فنى على مدار الساعه</p>
    </div>
  </div>
  <div style={{display:'flex' , alignItems:'center', gap:"1.5rem" , justifyContent:'center'}}>

  <div style={{padding:"15px " ,display:'flex' , fontSize:"1.7rem" , color:"#0293C8" , background:"#F6F6F6" , borderRadius:'10px'}}>
  <i className="fa-solid fa-lock" ></i>
    </div>
    <div>
    <h5>الدعم الفنى</h5>

    <p style={{color:"#b6b6b6"}}>دعم فنى على مدار الساعه</p>
    </div>
  </div>
</section>
       </Container>
</ >
   );
 
}

export default LeftTabsExample;
