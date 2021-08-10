import React, { Component } from 'react';
import Header from './header';
import Carousels from "./carousels";
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Carousels></Carousels>
      </div>
    );
  }
}
export default App;