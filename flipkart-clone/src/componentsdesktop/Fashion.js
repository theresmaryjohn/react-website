import React, { useEffect, useState } from 'react'
import fetchData from '../fetchData'
import './Fashion.css'

function Fashion() {
    const [data,setData]=useState([])

    useEffect(()=>{
        async function fashionData(){
            const fashionResponse=await fetchData();
            setData(fashionResponse.fashiondeals)
        }
        fashionData()
    },[])
  return (
    <div className='fashionContainer'>
        <div className='bestoffashion'>
            <div className='fashiontext'>
                <h2>Fashion Top Deals</h2>
                <a>VIEW ALL</a>
            </div>
        </div>
        <div className='scrollImg'>
            {data.map((item,index)=>(
                <div className='fashiondeal' key={index}>
                    <img src={item.imgurl}/>
                    <div className='type'>{item.text}</div>
                    <div className='shopnow'>{item.price}</div>
                    <div className='brand'>{item.para}</div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Fashion