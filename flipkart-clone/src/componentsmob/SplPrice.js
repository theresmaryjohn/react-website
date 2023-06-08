import React, { useEffect, useState } from 'react'
import fetchData from '../fetchData';

function SplPrice() {
    const [data,setData]=useState([]);
    const [show,setShow]=useState([]);
useEffect(()=>{

    async function splPriceData(){
        const splPriceResponse=await fetchData();
        setData(splPriceResponse.splpricezone)
        setShow(splPriceResponse.offerpro)
    }
    splPriceData()
},[])
  return (
    <div className='splPriceContainer' >
        <div style={{display:'flex'}}>
        {data.map((item,index)=>(
            <div key={index} className='splPricedata'>
                <img src={item} style={{width:'106px'}}/>
            </div>
        ))}
        </div>
        <div style={{display:'flex'}}>
         {show.map((item,index)=>(
            <div key={index} className='splPricedata'>
                <img src={item} style={{width:'160px'}}/>
            </div>
        ))}
        </div>


    </div>
  )
}

export default SplPrice