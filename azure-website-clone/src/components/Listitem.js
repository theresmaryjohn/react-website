import React from 'react'
import './ListeItem.css'

let arr=[
    {title:"Learn"},
    {title:"Support"},
    {title:"Contact Sales"},
    {title:"Free account"},
    {title:"Sign In"}
]

 function Listitem() {
  return (
    <div className="app-listitem">
      {arr.map((obj) => {
        return <div className="list-item" key={obj.title}>{obj.title}</div>;
      })}
    </div>
  )
}

export default Listitem;
