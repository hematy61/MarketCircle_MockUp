import React from "react";
import { 
  footer_container,
  footer1,
  footer2,
  stories,
  story,
  story_image_1,
  story_image_2,
  story_image_3,
  more_stories,
  footer3
 } from "../../styles/Footer/Footer.scss";

 const Footer = () => (
  <section className={footer_container}>
    
    <div className={footer1}>
      <button>Lorem Ipsum</button>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing</h3>
    </div>
    
    <div className={footer2}>
      <h5>Customer Stories</h5>
      <div className={stories}>
        {/* -------------------------------------------- */}
        <div className={story}>
           <div className={story_image_1}></div>
           <h6>Amet consectetur</h6>
          <p>Amet consectetur, adipisicing elit. Soluta laborum corrupti sint! Debitis consequuntur eos earum harum quidem nemo voluptatibus.</p>
        </div>
         {/* -------------------------------------------- */}
         <div className={story}>
           <div className={story_image_2}></div>
           <h6>Quod quam</h6>
           <p>Dolor sit, amet consectetur adipisicing elit. Reprehenderit nesciunt consequuntur magni amet quod quam laudantium!</p>
        </div>
         {/* -------------------------------------------- */}
         <div className={story}>
           <div className={story_image_3}></div>
           <h6>Aagni ctetur</h6>
           <p>Non voluptatem eos ducimus alias illo iusto magnam fugit earum tempore blanditiis! Illo iusto magnam fugit earum tempore blanditiis!</p>
        </div>
      </div>
      <div>
        <a href="#" className={more_stories}>See All</a>
      </div>
     </div>
     
     <div className={footer3}>
       <h3>Lorem ipsum dolor sit amet consectetur adipisici ngnesciunt</h3>
       <button>consectetur adipisicing?</button>
     </div>

  </section>
 );

 export default Footer;