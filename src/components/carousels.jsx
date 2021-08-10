import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class Carousels extends Component {
    render() {
        return (
            <div style={{ }}>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block "
      style={{height:540, width:1500, }}
      src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10410083.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      style={{height:540, width:1400, }}
      src="https://wallpapercave.com/wp/wp1971518.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{height:540, width:1400, }}
      src="https://thumbs.dreamstime.com/b/circuit-board-blue-4841394.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}