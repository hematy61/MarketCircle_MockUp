import React from "react";
import { 
  all_products,
  product1_container,
  product2_container,
  card1_image,
  card,
  card2_image,
  card3_image,
  product2_details,
  product3_container,
  card4_image
 } from '../../styles/Products/Products.scss';

const Products = () => (
  <section className={all_products}>
    <div className={product1_container}>
      
      <div className={card}>
        <h3>Lorem ipsum dolor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione quidem officiis adipisci nihil doloribus.</p>
        <div className={card1_image}></div>
      </div>
      
      <div className={card}>
        <h3>Lorem ipsum dolor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione quidem officiis adipisci nihil doloribus.</p>
        <div className={card2_image}></div>
      </div>
      
    </div>
    <div className={product2_container}>
      <div className={product2_details}>
        <h3>Lorem ipsum dolor amet consectetur</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque ipsum minus quos minima totam ad quidem voluptas, undeatque ipsum minus quos minima totam ad quidem voluptas, unde assumenda!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicing elit. Praesentium, quidem.</p>
      </div>
      <div className={card3_image}/>
    </div>
    <div className={product3_container}>
      <h3>Lorem amet consectetur</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.it amet consectetur adipisicing elit.it amet consectetur adipisicing elit. Praesentium atque ipsum minus quos minima totam ad quidem voluptas, undeatque ipsum minus quos minima totam ad quidem voluptas, unde assumenda!</p>
      <div className={card4_image} />
    </div>
  </section>
);

export default Products;