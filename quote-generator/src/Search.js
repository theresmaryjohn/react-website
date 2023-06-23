import React,{useState,useEffect} from "react";
import "./Search.css"

function Search(){
    const [data,setData]=useState([]);

    const fetchData = () => {
        fetch(
          "https://type.fit/api/quotes"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setData(data);
          });
      };

      useEffect(() => {
        fetchData();
      }, []);

      return(
        <div className="main-container">
            <input type='text' placeholder='Search....' className='search' ></input>
        </div>
      )

}

export default Search;