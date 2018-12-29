import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header/Header";
import Banner from './component/Banner/Banner';
import 'normalize.css';
import './styles/base.scss';

const App = () => (
  <div>
    <Header />
    <Banner />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));