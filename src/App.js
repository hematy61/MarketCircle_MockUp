import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header/Header";
import Banner from './component/Banner/Banner';
import Products from "./component/Products/Products";
import 'normalize.css';
import './styles/base.scss';

const App = () => (
  <div>
    <Header />
    <Banner />
    <Products />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));