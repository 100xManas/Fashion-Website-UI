import NavBar from './components/NavBar';
import Hero from './components/Hero';
import BestSelling from './components/BestSelling';
import OurProducts from './components/OurProducts';
import ExclusiveOffer from './components/ExclusiveOffer';
import DesignerClothes from './components/DesignerClothes';
import FeedbackCorner from './components/FeedbackCorner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='bg-[#C2EFD4] w-full h-screen px-32'>
        <NavBar />
        <Hero />
      </div>
      <div className='w-full px-32'>
        <BestSelling />
      </div>
      <div className='w-full px-32'>
        <OurProducts />
      </div>
      <div className='w-full flex items-center justify-center h-screen px-32'>
        <ExclusiveOffer/>
      </div>
      <div className='w-full px-32'>
        <DesignerClothes />
      </div>
      <div className='w-full px-32'>
        <FeedbackCorner/>
      </div>
     
      <Footer />
      
    </div>
  );
}

export default App;
