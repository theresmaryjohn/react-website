import React, { useEffect, useState } from "react";
import './HomePage.css'
import SplPrice from './componentsmob/SplPrice';
import Carousel from './componentsmob/Carousel';
import Categories from './componentsmob/Categories';
import Header from './componentsmob/Header';
import HeaderD from './componentsdesktop/HeaderD';
import SaleSec from './componentsmob/SaleSec';
import SeasonSale from './componentsmob/SeasonSale';
import OfferZone from './componentsmob/OfferZone';
import BestSelling from './componentsmob/BestSelling';
import LastDay from './componentsmob/LastDay';
import CategoriesD from "./componentsdesktop/CategoriesD";
import CarouselD from "./componentsdesktop/CarouselD";
import Electronics from "./componentsdesktop/Electronics";
import HealthData from "./componentsdesktop/HealthData";
import HomeandKitchen from "./componentsdesktop/HomeandKitchen";
import Fashion from "./componentsdesktop/Fashion";
import fetchData from "./fetchData";

function Homepage() {
  const [categories, setCategories] = useState([]);
  const [carousel,setCarousel]=useState([]);
  const [sale,setSale]=useState([]);
  const [price,setPrice]=useState([]);
  const [data,setData]=useState([]);
  const [seasonSale,setSeasonSale]=useState([]);
  const [offer,setOffer]=useState([]);
  const [selling,setSelling]=useState([]);
  const [lastDay,setLastDay]=useState([]);
  const [desktopHeader,setdesktopHeader]=useState([]);
  const [desktopCarousel,setDesktopCarousel]=useState([]);
  const [electronics,setElectronics]=useState([])
  const [healthData,setHealthData]=useState([]);
  const [home,setHome]=useState([]);
  const [fashion,setFashion]=useState([])

  useEffect(() => {
    async function Data() {
      const dataResponse = await fetchData();
      setCategories(dataResponse.mobilehead);
      setCarousel(dataResponse.carousel);
      setSale(dataResponse.sale);
      setPrice(dataResponse.offerpro);
      setData(dataResponse.splpricezone);
      setSeasonSale(dataResponse.endofseasonsale);
      setOffer(dataResponse.graborgone);
      setSelling(dataResponse.bestselling);
      setLastDay(dataResponse.lastdaysale);
      setdesktopHeader(dataResponse.desktophead);
      setDesktopCarousel(dataResponse.carouseldesktop);
      setElectronics(dataResponse.electronicsdata);
      setHealthData(dataResponse.healthdata);
      setHome(dataResponse.homeandkitchen);
      setFashion(dataResponse.fashiondeals);
    }
    Data();
  }, []);

  function OrderofItem(){

  }

  return (
    <div>
      <div className="mobContainer">
        <Header />
        <Categories categories={categories} />
        <Carousel carousel={carousel}/>
        <SaleSec sale={sale}/>
        <SplPrice data={data} price={price} />
        <SeasonSale seasonSale={seasonSale}/>
        <OfferZone offer={offer} />
        <BestSelling selling={selling} />
        <LastDay lastDay={lastDay}/>
      </div>
      <div className="desktopContainer">
        <HeaderD />
        <CategoriesD desktopHeader={desktopHeader}/>
        <div className="itemsContainer">
        <CarouselD desktopCarousel={desktopCarousel}/>
        <Electronics electronics={electronics}/>
        <HealthData healthData={healthData}/>
        <HomeandKitchen home={home}/>
        <Fashion fashion={fashion}/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
