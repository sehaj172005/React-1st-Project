import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from '../asests/3.jpg'
import img2 from '../asests/4.jpg'


const Services = () => {
  return (
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows= {false}
    interval={1000} showThumbs={false}>


        <div>
            <img src={img1} alt="" ></img>
            <p className = "legend">Full Stack Services</p>
        </div>
        <div>
            <img src={img2} alt="" ></img>
            <p className = "legend">Peer to peer Services</p>

        </div>
    </Carousel>
  )
}

export default Services