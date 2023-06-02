import React, { useState, useEffect } from "react";
import "./AzureServices.css";
import AzureProducts from "./AzureProducts";

function AzureServices() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.featured);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="azurefeaturedHead">
        <h2>Start putting your ideas into action with Azure products and services</h2>
        <AzureProducts/>
        <a className="seeAll" href="https://azure.microsoft.com/en-in/products/">See all products (200+)</a>


    </div>
  )
}
export default AzureServices;