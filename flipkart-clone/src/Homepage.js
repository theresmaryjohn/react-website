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

  console.log("components",components);
  let arr = [];
  Object.keys(components).map((key) => {
    let obj = {
      key: key,
      value: components[key],
    };
    arr.push(obj);
  });
  console.log(arr);

  //as we have to place the components in the order of json we use these functions

  function getDataMobile(item) {
    if (item.key === "mobilehead") {
      return <Categories categories={item.value} />;
    } else if (item.key === "carousel") {
      return <Carousel carousel={item.value} />;
    } else if (item.key === "splpricezone" || item.key === "offerpro") {
      return <SplPrice data={item.value} price={item.value} />;
    } else if (item.key === "sale") {
      return <SaleSec sale={item.value} />;
    } else if (item.key === "endofseasonsale") {
      return <SeasonSale seasonSale={item.value} />;
    } else if (item.key === "graborgone") {
      return <OfferZone offer={item.value} />;
    } else if (item.key === "bestselling") {
      return <BestSelling selling={item.value} />;
    } else if (item.key === "lastdaysale") {
      return <LastDay lastDay={item.value} />;
    } else {
      return null;
    }
  }

  function getDataDesktop(item) {
    if (item.key === "desktophead") {
      return <CategoriesD catergory={item.value} />;
    } else {
      return null;
    }
  }

  function sectionsDesktop(item) {
    if (item.key === "carouseldesktop") {
      return <CarouselD desktopCarousel={item.value} />;
    } else if (item.key === "electronicsdata") {
      return <Electronics electronics={item.value} />;
    } else if (item.key === "healthdata") {
      return <HealthData healthData={item.value} />;
    } else if (item.key === "homeandkitchen") {
      return <HomeandKitchen home={item.value} />;
    } else if (item.key === "fashiondeals") {
      return <Fashion fashion={item.value} />;
    } else {
      return null;
    }
  }

  // let myArray = [];
  // function myHeader() {
  //   return <Header />
  // }
  // myArray.push(myHeader())
  // console.log(myArray[0])
  //console.log(arr.map((item) => getDataDesktop(item)))
//  let x = "<Header /><Categories categories={[arr[0]]}/>"
 console.log("key",arr);


  return (
    <div>
      <div className="mobContainer">
        <Header/>
    {arr.map((item)=>getDataMobile(item))}
      {/* {myArray} */}
      {/* <Categories categories={arr[0].value}/> */}
      </div>
      <div className="desktopContainer">
        <HeaderD />
        {arr.map((item) => getDataDesktop(item))}

        <div className="itemsContainer">
          {arr.map((item) => sectionsDesktop(item))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
