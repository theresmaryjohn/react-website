import React, { useState,useEffect } from 'react'


 function AzureCardImg() {
    const [data,setData]=useState([]);

    const fetchData=()=>{
      fetch("https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json")
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
       console.log(data);
       setData(data.datas)
      })
    }

    useEffect(()=>{
     fetchData();
    },[])


  return (
    <div className='mainCard'>
      <img src={data.imgurlmobile} />
    </div>
  )
}
export default AzureCardImg;
