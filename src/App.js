import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";

const App = () => (
  <div>
    <Header />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));