import React, { useState,useEffect } from 'react'


 function AzureCardImg() {
    const [data,setData]=useState([]);

    const fetchData=()=>{
      fetch("https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json")
      .then(response=>{
        return response.json;
      })
      .then(data=>{
        setData(data)
      })
    }

    useEffect(()=>{
     fetchData();
    },[])


  return (
    <div className='mainCard'>
      <div className='cardImg'><img></img></div>
    </div>
  )
}
export default AzureCardImg;
