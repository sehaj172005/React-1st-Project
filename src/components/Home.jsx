import React from 'react'
import vg from "../asests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"




const Home = () => {
  return (

    <>
    <div className='home' id = "home">
         <main>
         <h1>TeckyStar</h1>
        <p>Solution to all your problems</p>
        </main>

    </div>

    <div className="home2">

<img src = {vg} alt = "Graphics" />

<div>
    <p>
        We are your one and only Solution to the tech problems 
        you face everyday .
        We are leading tech compamny whose aim is to increase the 
        problem solving ability in children.
    </p>
</div>
 </div>

 <div className="home3" id = "about">
  <div>
    <h1>who we are</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum rem error doloribus tempora, obcaecati pariatur explicabo totam voluptas nesciunt exercitationem iste. Totam maiores, eaque distinctio, cupiditate illo adipisci tempore quis reiciendis cumque dolor nostrum eligendi aspernatur maxime autem quo numquam!</p>
    
  </div>
 </div>

 <div className="home4" id = "brands">

  <div>
    <h1>Brands</h1>

    
    <article>
      <div style={{
        animationDelay: "0.3s",
      }}>
        <AiFillGoogleCircle />
        <p>Google</p>
      </div>

      <div style={{
        animationDelay: "0.5s",
      }}>
        <AiFillAmazonCircle />
        <p>Amazon</p>
      </div>

      <div style={{
        animationDelay: "0.7s",
      }}>
        <AiFillYoutube />
        <p>Youtube</p>
      </div>

      <div style={{
        animationDelay: "1s",
      }}>
        <AiFillInstagram />
        <p>Instagram</p>
      </div>
    </article>
  </div>
  
 </div>


    </>
  )
}

export default Home