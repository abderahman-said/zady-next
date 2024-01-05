import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import("./NavBar" , { ssr: false }), {
  loading: () => <p>Loading ...</p>,
});
const Footer = dynamic(() => import("./Footer" , { ssr: false }), {
  loading: () => <p>Loading ...</p>,
});
const Header = dynamic(() => import("./Header" , { ssr: false }), {
  loading: () => <p>Loading ...</p>,
});
const Meta = dynamic(() => import("./Meta" , { ssr: false }), {
  loading: () => <p>Loading ...</p>,
});

 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "aos/dist/aos.css";
import 'swiper/css';
 
const Layout = ({ children }) => {
  return (
    <html lang='ar'>
     <NavBar/>
      <Meta />
        <main >
          <Header />
          {children}
          <Footer/>
        </main>
    </html>
  )
}

export default Layout;

















 