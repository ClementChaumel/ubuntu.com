import React from "react";

class HelloWorld extends React.Component {
  render() {
    console.log("Hiiii!");
    console.table(window.productList);
    return <h1>Hello, World!</h1>;
  }
}
export default HelloWorld;
