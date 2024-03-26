import React from 'react';
import CarouselImage from './CarouselImage';
import { Carousel } from "react-bootstrap";

function ActiveCarouselItem({ movie }) {
    var release_date = movie.release_date ? `(${movie.release_date.split('-')[0]})` : '';
    return (
        <div id='CreationPageCarousel'>
            <CarouselImage 
                title={movie.title} 
                poster={movie.poster_path} 
                backdrop={movie.backdrop_path}
            />
            <Carousel.Caption className='d-none d-md-block'>
                <h5>{movie.title} {release_date}</h5>
                <p>{movie.tagline}</p>
            </Carousel.Caption>
        </div>
    );
}

export default ActiveCarouselItem;