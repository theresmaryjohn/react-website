import React, {useState,useEffect} from 'react'
import fetchData from '../fetchData';

function BestSelling() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        async function sellingData(){
            const sellingResponse=await fetchData();
            setData(sellingResponse.bestselling)
        }
        sellingData();
    },[])
  return (
    <div className="bestSelling" style={{display:'flex',flexDirection:'row'}}>
        {data.map((item,index)=>(
            <div key={index} className='sellingContainer'>
                <img src={item} style={{width:'160px'}}/>
            </div>
        ))}

    </div>
  )
}

export default BestSelling