import React, {useState,useEffect} from 'react'
import fetchData from '../fetchData'
import './CategoriesD.css'

function CategoriesD() {
    const [data,setData]=useState([])

    useEffect(()=>{
        async function categoriesData(){
            const categoriesResponse=await fetchData()
            setData(categoriesResponse.desktophead)
        }
        categoriesData()
    },[])
  return (
        <div className='category'>
    <div className='categoriesContainer'>
        {data.map((item,index)=>(
            <div key={index} className='categories'>
                <img src={item.imgurl}/>
                <a className='items'>{item.text}<img src={item.svg}/></a>
            </div>
        ))}
    </div>
    </div>
  )
}

export default CategoriesD