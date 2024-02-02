'use client';
import Slider from "react-slick";
import React, { Component } from "react";
import { images } from './constants';


export default class Carousel2 extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
      return (
        <div className=''>
          <div className="">
          <Slider {...settings}>
            {images.map((d) => (
              <div key={d.title} className="">
                <div className=''>
                  <img src={d.src} alt="" className=""/>
                </div>
    
                <div className="">
                  <p className="">{d.title}</p>
                  <p className="">{d.id}</p>
                  <button className=''>Read More</button>
                </div>
              </div>
            ))}
          </Slider>
          </div>
          
        </div>
      );
  }
}
  