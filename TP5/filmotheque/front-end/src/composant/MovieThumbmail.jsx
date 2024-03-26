import React from "react";

const MovieThumbmail = (props) => {
    return (
        <div className="movie">
        <div className="movie-image">
          <span className="play"><span className="name">{props.title}</span></span>
          <a href="#"><img className="img-fluid img-thumbnail" src={props.poster_path} alt="" /></a>
        </div>
        <div className="rating">
            <div className="stars">
              <div className="stars-in"></div>
            </div>
            <span className="comments">12</span>
        </div>
      </div>
    );
}

export default MovieThumbmail;