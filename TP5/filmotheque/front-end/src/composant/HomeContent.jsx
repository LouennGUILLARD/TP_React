import React from "react";
import ContentBox from "./ContentBox";
import { useState, useEffect } from "react";

const HomeContent = () => {
    const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Aller chercher les donnes sur l'API
        const recentMovies = await fetch('http://filmotheque.e-mingo.net/api/catalog/movie/?last');
        const ratedMovies = await fetch('http://filmotheque.e-mingo.net/api/catalog/movie/?sort=vote');
        const comentedMovies = await fetch('http://filmotheque.e-mingo.net/api/catalog/movie/?sort=post');

        const recentMoviesData = await recentMovies.json();
        const topRatedMoviesData = await ratedMovies.json();
        const commentedMoviesData = await comentedMovies.json();

        // Limiter le nombre de films à 6
        const limitMovies = (movies) => movies.slice(0, 6);

        setSections([
          { title: "Plus récents", movies: limitMovies(recentMoviesData) },
          { title: "Mieux notés", movies: limitMovies(topRatedMoviesData) },
          { title: "Plus commentés", movies: limitMovies(commentedMoviesData) },
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


    return (
        <div id="content" className="container" >
            {sections.map((section, index) => (
                <ContentBox key={index} title={section.title} movies={section.movies} />
            ))} 
        </div>
    );
}

export default HomeContent;