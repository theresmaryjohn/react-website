import React, { useState,useEffect } from 'react'
import fetchData from '../fetchData';

function LastDay() {

    const [data,setData]=useState([]);

    useEffect(()=>{
        async function lastdayData(){
            const lastDayResponse=await fetchData();
            setData(lastDayResponse.lastdaysale)
        }
    })

  return (
    <div>

    </div>
  )
}

export default LastDay