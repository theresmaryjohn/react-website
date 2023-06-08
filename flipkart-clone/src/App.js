import './App.css';
import SplPrice from './componentsmob/SplPrice';
import Carousel from './componentsmob/Carousel';
import Categories from './componentsmob/Categories';
import Header from './componentsmob/Header';
import SaleSec from './componentsmob/SaleSec';
import SeasonSale from './componentsmob/SeasonSale';
import OfferZone from './componentsmob/OfferZone';
import BestSelling from './componentsmob/BestSelling';

function App() {
  return (
    <div className="App">
      <div className='Mobcontainer'>
      <Header />
      <Categories />
      <Carousel/>
      <SaleSec/>
      <SplPrice/>
      <SeasonSale/>
      <OfferZone/>
      <BestSelling/>
      </div>
    </div>
  );
}

export default App;
