import React, { useEffect, useState } from 'react'
import './HealthData.css'
import fetchData from '../fetchData';

function HealthData() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        async function healthcareData(){
            const healthcareResponse=await fetchData();
            setData(healthcareResponse.healthdata)
        }
        healthcareData()
    },[])
  return (
 <div className="healthContainer">
      <div className="bestofhealth">
        <div className="healthtext">
          <h2>Sports, Healthcare & more</h2>
          <a>VIEW ALL</a>
        </div>
      </div>
      <div className="scrollImg">
      {data.map((item, index) => (
        <div className="healthcare" key={index}>
          <img src={item.imgurl} />
          <div className="type">{item.text}</div>
          <div className="shopnow">{item.price}</div>
          <div className="brand">{item.para}</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default HealthData