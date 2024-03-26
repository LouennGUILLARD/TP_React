import React, { useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import ActiveCarouselItem from "./ActiveCarouselItem";

const HomeCarousel = () => {
    const [movies, setMovies] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch('http://filmotheque.e-mingo.net/api/favorites')
          .then(response => response.json())
          .then(data => setMovies(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <Carousel
            id="HomeCarousel"
            onSelect={handleSelect}
            interval={5000} 
            className="carousel container"
            activeIndex={activeIndex}
        >
            {movies.map((movie, index) => (
                <Carousel.Item key={index}>
                    <ActiveCarouselItem movie={movie} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default HomeCarousel;