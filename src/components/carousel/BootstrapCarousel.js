import { Carousel } from 'react-bootstrap'
import './BootstrapCarousel.css'

export default function BootstrapCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/aAAbIqW.jpeg"
          alt="First slide"
        />

      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/u5tGhtt.jpeg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/n33maef.jpeg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  )
}