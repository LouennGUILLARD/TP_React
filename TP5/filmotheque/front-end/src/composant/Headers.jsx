import React from "react";
import MenuGenres from "./MenuGenres";
import MenuActors from "./MenuActors";

const Headers = () => {
    return (
    <div id="header" >
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="#"
              ><img className="w-50" src="images/logo-h.png"
            /></a>
            <button
              className="navbar-toggler ms-auto-md"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Accueil</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Tous</a>
                </li>
                < MenuGenres />
                < MenuActors />
                <li className="nav-item search-box">
                  <form className="d-flex" role="search">
                    <button className="btn-search">
                      <i className="fas fa-search"></i>
                    </button>
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Recherche..."
                    />
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Headers;