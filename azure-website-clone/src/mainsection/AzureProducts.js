import React, { useState, useEffect } from "react";
import "./AzureProducts.css";

function AzureProducts() {
  const [feature, setFetured] = useState([]);
  const [machine, setMachine] = useState([]);
  const [compute, setCompute] = useState([]);
  const [container, setContainer] = useState([]);
  const [hybrid, setHybrid] = useState([]);
  const [internet, setInternet] = useState([]);
  const [show, setShow] = useState("feature");
  // const [isActive, setIsActive] = useState(false);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetured(data.featured);
        setMachine(data.machinelearning);
        setCompute(data.compute);
        setContainer(data.containers);
        setHybrid(data.hybrid);
        setInternet(data.internet);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  function handleClickOne() {
    setShow("feature");
    // const style=setShow("feature")?{borderInlineStart:"2px solid #0067b8",color: "#0067b8"}:"";
  }
  function handleClickTwo() {
    setShow("machine");
  }
  function handleClickThree() {
    setShow("compute");
  }
  function handleClickFour() {
    setShow("container");
  }
  function handleClickFive() {
    setShow("hybrid");
  }
  function handleClickSix() {
    setShow("internet");
  }
  return (
    <div className="container">
      <div className="productHead">
        <div className="scrollbar">
          {/* <a
              style={{
              borderInlineStart:isActive ? "2px solid #0067b8" : " ",
              color: isActive ? "#0067b8" : " ",
            }}
            onClick={handleClickOne}>
            Feature
          </a> */}
          <a onClick={handleClickOne}>Feature</a>
          <a onClick={handleClickTwo}> Al + machine learning</a>
          <a onClick={handleClickThree}>Compute</a>
          <a onClick={handleClickFour}>Containers</a>
          <a onClick={handleClickFive}>Hybrid + multicloud</a>
          <a onClick={handleClickSix}>Internet of Things (IoT)</a>
        </div>
        <div className="imgCards">
          {show === "feature" && (
            <div className="azureFeatured">
              {feature.map((item, index) => (
                <div className="azureCard" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azureText">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="imgCards">
          {show === "machine" && (
            <div className="azureFeatured">
              {machine.map((item, index) => (
                <div className="azureCard" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azureText">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="imgCards">
          {show === "compute" && (
            <div className="azureFeatured">
              {compute.map((item, index) => (
                <div className="azureCard" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azureText">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="imgCards">
          {show === "container" && (
            <div className="azureFeatured">
              {container.map((item, index) => (
                <div className="azureCard" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azureText">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="imgCards">
          {show === "hybrid" && (
            <div className="azureFeatured">
              {hybrid.map((item, index) => (
                <div className="azureCard" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azureText">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="imgCards">
          {show === "internet" && (
            <div className="azureFeatured">
              {internet.map((item, index) => (
                <div className="azureCard" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azureText">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AzureProducts;
