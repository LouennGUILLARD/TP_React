import React from "react";

const CarouselImage = (data) => {
    return (
      <div id="CreationImage">
        <img
            className="img-fluid d-block w-100"
            src={data.backdrop}
            alt={data.title}
        />
        <div className="blur">&nbsp;</div>
        <div className="poster">
            <img
              className="img-fluid"
              src={data.poster}
              alt={data.title}
            />
        </div>
      </div>
    );
}

export default CarouselImage;