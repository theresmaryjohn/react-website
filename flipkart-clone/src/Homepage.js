import React from "react";
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

function Homepage() {
  return (
    <div>
      <div className="mobContainer">
        <Header />
        <Categories />
        <Carousel />
        <SaleSec />
        <SplPrice />
        <SeasonSale />
        <OfferZone />
        <BestSelling />
        <LastDay />
      </div>
      <div className="desktopContainer">
        <HeaderD />
        <CategoriesD/>
        <CarouselD/>
        <div className="itemsContainer">
        <Electronics/>
        <HealthData/>
        <HomeandKitchen/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
