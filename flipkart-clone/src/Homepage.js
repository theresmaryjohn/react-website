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
  const [categories, setCategories] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [components, setComponents] = useState([]);

  // const [sale,setSale]=useState([]);
  // const [price,setPrice]=useState([]);
  // const [data,setData]=useState([]);
  // const [seasonSale,setSeasonSale]=useState([]);
  // const [offer,setOffer]=useState([]);
  // const [selling,setSelling]=useState([]);
  // const [lastDay,setLastDay]=useState([]);
  // const [desktopHeader,setdesktopHeader]=useState([]);
  // const [desktopCarousel,setDesktopCarousel]=useState([]);
  // const [electronics,setElectronics]=useState([])
  // const [healthData,setHealthData]=useState([]);
  // const [home,setHome]=useState([]);
  // const [fashion,setFashion]=useState([])

  useEffect(() => {
    async function Data() {
      const dataResponse = await fetchData();
      setComponents(dataResponse);
      // Object.keys(dataResponse).forEach(function(key){
      // console.log(dataResponse[key])
      // console.log( `${key}`);
      //  setCategories(dataResponse[key='mobilehead'])
      //  setCarousel(dataResponse[key='carousel']);

      // })

      //  const dataKeys=dataResponse.map(item=>Object.keys(item));
      //  console.log(dataKeys);
      // console.log(dataKeys);
      //   dataKeys.map((item)=>{
      //  setCategories(dataResponse.item)
      // })
      // setCategories(dataResponse.mobilehead)
      //   setCarousel(dataResponse.carousel);
      //   setSale(dataResponse.sale);
      //   setPrice(dataResponse.offerpro);
      //   setData(dataResponse.splpricezone);
      //   setSeasonSale(dataResponse.endofseasonsale);
      //   setOffer(dataResponse.graborgone);
      //   setSelling(dataResponse.bestselling);
      //   setLastDay(dataResponse.lastdaysale);
      //   setdesktopHeader(dataResponse.desktophead);
      //   setDesktopCarousel(dataResponse.carouseldesktop);
      //   setElectronics(dataResponse.electronicsdata);
      //   setHealthData(dataResponse.healthdata);
      //   setHome(dataResponse.homeandkitchen);
      //   setFashion(dataResponse.fashiondeals);
    }
    Data();
  }, []);

  let arr = [];
  Object.keys(components).map((key) => {
    let obj = {
      key: key,
      value: components[key],
    };
    arr.push(obj);
  });
  // console.log(arr);


  return (
    <div>
      <div className="mobContainer">
         <Header />
         {arr.map((item)=>(
          item.key=='mobilehead'?<Categories categories={item.value} />:null
         ))}
          {arr.map((item)=>(
          item.key=='carousel'?<Carousel carousel={item.value} />:null
         ))}
         {arr.map((item)=>(
          item.key=='splpricezone'?  <SplPrice data={item.value} price={item.value} />:null
         ))}
        {/* <Categories categories={categories} /> */}
        {/* <Carousel carousel={carousel} /> */}
        {/* <Carousel carousel={carousel}/>
        <SaleSec sale={sale}/>
        <SplPrice data={data} price={price} />
        <SeasonSale seasonSale={seasonSale}/>
        <OfferZone offer={offer} />
        <BestSelling selling={selling} />
        <LastDay lastDay={lastDay}/> */}
      </div>
      <div className="desktopContainer">
        <HeaderD />
        {/* <CategoriesD desktopHeader={desktopHeader}/> */}
        <div className="itemsContainer">
          {/* <CarouselD desktopCarousel={desktopCarousel}/>
        <Electronics electronics={electronics}/>
        <HealthData healthData={healthData}/>
        <HomeandKitchen home={home}/>
        <Fashion fashion={fashion}/> */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
