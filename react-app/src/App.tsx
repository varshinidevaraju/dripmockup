import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Blog5musthavepiecesforthisseasontrendsessentials from './pages/Blog5musthavepiecesforthisseasontrendsessentials';
import Blogdiscoverourlatestfashiontrendsexclusively from './pages/Blogdiscoverourlatestfashiontrendsexclusively';
import Blogfindyourperfectfittodaycomfort from './pages/Blogfindyourperfectfittodaycomfort';
import Bloghowtocareforyourwardrobeproperlyeasily from './pages/Bloghowtocareforyourwardrobeproperlyeasily';
import Blogshoptimelesspiecesforeveryoccasion from './pages/Blogshoptimelesspiecesforeveryoccasion';
import Blogsustainablefashionstyleresponsiblynow from './pages/Blogsustainablefashionstyleresponsiblynow';
import Blog from './pages/Blog';
import Collectionbestseller from './pages/Collectionbestseller';
import Collectionmens from './pages/Collectionmens';
import Collectionnewarrival from './pages/Collectionnewarrival';
import Collectionstyleessentials from './pages/Collectionstyleessentials';
import Collectionsummercollection from './pages/Collectionsummercollection';
import Collectionwomens from './pages/Collectionwomens';
import Contactus from './pages/Contactus';
import Faq from './pages/Faq';
import Homev2 from './pages/Homev2';
import Index from './pages/Index';
import Index0114 from './pages/Index0114';
import Ourstory from './pages/Ourstory';
import Shippingreturns from './pages/Shippingreturns';
import Shopadventurereadyboyssweater from './pages/Shopadventurereadyboyssweater';
import Shopchicembracesweater from './pages/Shopchicembracesweater';
import Shopcrispcomfortwomenstee from './pages/Shopcrispcomfortwomenstee';
import Shopexecutiveelitetailoredcoat from './pages/Shopexecutiveelitetailoredcoat';
import Shoplunaluxesatinjumpsuit from './pages/Shoplunaluxesatinjumpsuit';
import Shopmodernclassicderbyshoes from './pages/Shopmodernclassicderbyshoes';
import Shoppurewhimsybabytee from './pages/Shoppurewhimsybabytee';
import Shopridgeknitjacket from './pages/Shopridgeknitjacket';
import Shopsaddleluxeleatherboots from './pages/Shopsaddleluxeleatherboots';
import Shoptimelesswhitecottontee from './pages/Shoptimelesswhitecottontee';
import Shopultimatecomfortflexfitleggings from './pages/Shopultimatecomfortflexfitleggings';
import Shop from './pages/Shop';
import Termsconditions from './pages/Termsconditions';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/404' element={<Page404 />} />
          <Route path='/blog/5-must-have-pieces-for-this-season-trends-essentials' element={<Blog5musthavepiecesforthisseasontrendsessentials />} />
          <Route path='/blog/discover-our-latest-fashion-trends-exclusively' element={<Blogdiscoverourlatestfashiontrendsexclusively />} />
          <Route path='/blog/find-your-perfect-fit-today-comfort' element={<Blogfindyourperfectfittodaycomfort />} />
          <Route path='/blog/how-to-care-for-your-wardrobe-properly-easily' element={<Bloghowtocareforyourwardrobeproperlyeasily />} />
          <Route path='/blog/shop-timeless-pieces-for-every-occasion' element={<Blogshoptimelesspiecesforeveryoccasion />} />
          <Route path='/blog/sustainable-fashion-style-responsibly-now' element={<Blogsustainablefashionstyleresponsiblynow />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/collection/bestseller' element={<Collectionbestseller />} />
          <Route path='/collection/men-s' element={<Collectionmens />} />
          <Route path='/collection/new-arrival' element={<Collectionnewarrival />} />
          <Route path='/collection/style-essentials' element={<Collectionstyleessentials />} />
          <Route path='/collection/summer-collection' element={<Collectionsummercollection />} />
          <Route path='/collection/women-s' element={<Collectionwomens />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/homev2' element={<Homev2 />} />
          <Route path='/' element={<Index />} />
          <Route path='/index0114' element={<Index0114 />} />
          <Route path='/our-story' element={<Ourstory />} />
          <Route path='/shipping-returns' element={<Shippingreturns />} />
          <Route path='/shop/adventure-ready-boys-sweater' element={<Shopadventurereadyboyssweater />} />
          <Route path='/shop/chic-embrace-sweater' element={<Shopchicembracesweater />} />
          <Route path='/shop/crisp-comfort-women-s-tee' element={<Shopcrispcomfortwomenstee />} />
          <Route path='/shop/executive-elite-tailored-coat' element={<Shopexecutiveelitetailoredcoat />} />
          <Route path='/shop/luna-luxe-satin-jumpsuit' element={<Shoplunaluxesatinjumpsuit />} />
          <Route path='/shop/modern-classic-derby-shoes' element={<Shopmodernclassicderbyshoes />} />
          <Route path='/shop/pure-whimsy-baby-tee' element={<Shoppurewhimsybabytee />} />
          <Route path='/shop/ridge-knit-jacket' element={<Shopridgeknitjacket />} />
          <Route path='/shop/saddle-luxe-leather-boots' element={<Shopsaddleluxeleatherboots />} />
          <Route path='/shop/timeless-white-cotton-tee' element={<Shoptimelesswhitecottontee />} />
          <Route path='/shop/ultimate-comfort-flexfit-leggings' element={<Shopultimatecomfortflexfitleggings />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/terms-conditions' element={<Termsconditions />} />
          <Route path='/testimonials' element={<Testimonials />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;