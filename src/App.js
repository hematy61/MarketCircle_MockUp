import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header/Header";
import 'normalize.css';
import './styles/base.scss';

const App = () => (
  <div>
    <Header />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));