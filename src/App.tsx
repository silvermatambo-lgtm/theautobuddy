import {useEffect} from 'react';
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';import Footer from './components/Footer';import FloatingWhatsApp from './components/FloatingWhatsApp';import MobileBottomMenu from './components/MobileBottomMenu';
import Home from './pages/Home';import About from './pages/About';import Services from './pages/Services';import HowItWorks from './pages/HowItWorks';import Catalogue from './pages/Catalogue';import Reports from './pages/Reports';import UploadDetails from './pages/UploadDetails';import UploadPictures from './pages/UploadPictures';import Testimonials from './pages/Testimonials';import Contact from './pages/Contact';import DealerLogin from './pages/DealerLogin';import Admin from './pages/Admin';import OfferAccepted from './pages/OfferAccepted';

function ScrollToTop(){
  const{pathname}=useLocation();
  useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'auto'});document.documentElement.scrollTop=0;document.body.scrollTop=0;},[pathname]);
  return null;
}

export default function App(){return <BrowserRouter><ScrollToTop/><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/how-it-works" element={<HowItWorks/>}/><Route path="/catalogue" element={<Catalogue/>}/><Route path="/reports" element={<Reports/>}/><Route path="/upload-details" element={<UploadDetails/>}/><Route path="/upload-pictures" element={<UploadPictures/>}/><Route path="/offer-accepted" element={<OfferAccepted/>}/><Route path="/testimonials" element={<Testimonials/>}/><Route path="/contact" element={<Contact/>}/><Route path="/dealer-login" element={<DealerLogin/>}/><Route path="/admin" element={<Admin/>}/></Routes><Footer/><FloatingWhatsApp/><MobileBottomMenu/></BrowserRouter>}
