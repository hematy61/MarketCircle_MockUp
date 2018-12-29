import React from "react";
import {
  banner_container,
  intro_container,
  intro_details
} from '../../styles/Banner/Banner.scss'

const Banner = () => (
  <section className={intro_container}>
    <div className={banner_container}>
      <h1>Lorem Ipsum</h1>
    </div>
    <div className={intro_details} >
      <div>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Commodi modi!
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Rerum asperiores temporibus atque consequuntur 
          qui culpa ab error illum voluptates.
        </p>
      </div>
      <button>Starts 30 Days Trial</button>
    </div>
  </section>
);

export default Banner;