import React, { useEffect, useState } from 'react'
import fetchData from '../fetchData'

function SaleSec() {
    const [data,setData]=useState([])

  useEffect(()=>{
    async function saleData(){
        const saleResponse=await fetchData();
        setData(saleResponse.sale)
    }
    saleData();
  },[])
  return (
    <div className='saleContainer' style={{display:'flex'}}>
        {data.map((item,index)=>(
            <div key={index} className='saledata' >
                <img src={item} style={{width:'64px'}}/>
            </div>
        ))}

    </div>
  )
}

export default SaleSec