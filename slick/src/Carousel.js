import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './01.jpg'
import img2 from './02.jpg'
import './Carousel.css'

function Arrow(props){
  const {className,style,onClick}=props;
  return(
    <div className={className} style={{...style, display:'block',background:'black'}} onClick={onClick}/>
  )
}

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<Arrow/>,
        prevArrow:<Arrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='container'>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className='card'>
            <img src={img1}/>
          </div>
          <div className='card'>
            <img src={img2}/>
          </div>
          <div className='card'>
            <img src={img1}/>
          </div>
          <div className='card'>
            <img src={img2}/>
          </div>
          <div className='card'>
            <img src={img1}/>
          </div>
          <div className='card'>
            <img src={img2}/>
          </div>

        </Slider>
    </div>
  )
}

export default Carousel