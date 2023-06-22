import React, { useEffect, useState } from "react";
import "./HomePage.css";
import SplPrice from "./componentsmob/SplPrice";
import Carousel from "./componentsmob/Carousel";
import Categories from "./componentsmob/Categories";
import Header from "./componentsmob/Header";
import HeaderD from "./componentsdesktop/HeaderD";
import SaleSec from "./componentsmob/SaleSec";
import SeasonSale from "./componentsmob/SeasonSale";
import OfferZone from "./componentsmob/OfferZone";
import BestSelling from "./componentsmob/BestSelling";
import LastDay from "./componentsmob/LastDay";
import CategoriesD from "./componentsdesktop/CategoriesD";
import CarouselD from "./componentsdesktop/CarouselD";
import Electronics from "./componentsdesktop/Electronics";
import HealthData from "./componentsdesktop/HealthData";
import HomeandKitchen from "./componentsdesktop/HomeandKitchen";
import Fashion from "./componentsdesktop/Fashion";
import fetchData from "./fetchData";

function Homepage() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    async function Data() {
      const dataResponse = await fetchData();
      setComponents(dataResponse);
    }
    Data();
  }, []);

  console.log("components", components);
  let array = [];
  Object.keys(components).map((key) => {
    let obj = {
      key: key,
      value: components[key],
    };
    array.push(obj);
  });
  console.log(array);

  function getDataMobile(item) {
    if (item.key === "mobileHead") {
      return <Categories categories={item.value} />;
    } else if (item.key === "carousel") {
      return <Carousel carousel={item.value} />;
    } else if (item.key === "splPriceZone" || item.key === "offerPro") {
      return <SplPrice data={item.value} price={item.value} />;
    } else if (item.key === "sale") {
      return <SaleSec sale={item.value} />;
    } else if (item.key === "endOfSeasonSale") {
      return <SeasonSale seasonSale={item.value} />;
    } else if (item.key === "grabOrGone") {
      return <OfferZone offer={item.value} />;
    } else if (item.key === "bestSelling") {
      return <BestSelling selling={item.value} />;
    } else if (item.key === "lastDaySale") {
      return <LastDay lastDay={item.value} />;
    } else {
      return null;
    }
  }

  function getDataDesktop(item) {
    if (item.key === "desktopHead") {
      return <CategoriesD category={item.value} />;
    } else {
      return null;
    }
  }

  function sectionsDesktop(item) {
    if (item.key === "carouselDesktop") {
      return <CarouselD desktopCarousel={item.value} />;
    } else if (item.key === "electronicsData") {
      return <Electronics electronics={item.value} />;
    } else if (item.key === "healthData") {
      return <HealthData healthData={item.value} />;
    } else if (item.key === "homeAndKitchen") {
      return <HomeandKitchen home={item.value} />;
    } else if (item.key === "fashionDeals") {
      return <Fashion fashion={item.value} />;
    } else {
      return null;
    }
  }
  console.log("key", array);

  return (
    <div>
      <div className="mobile-container">
        <Header />
        {array.map((item) => getDataMobile(item))}
      </div>
      <div className="desktop-container">
        <HeaderD />
        {array.map((item) => getDataDesktop(item))}

        <div className="items-container">
          {array.map((item) => sectionsDesktop(item))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
