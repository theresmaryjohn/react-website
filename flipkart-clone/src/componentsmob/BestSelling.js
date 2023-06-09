import React, {useState,useEffect} from 'react'
import fetchData from '../fetchData';
import './BestSelling.css'

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
                <img src={item}/>
            </div>
        ))}

    </div>
  )
}

export default BestSelling