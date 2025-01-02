import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./style.css";

const Movie = () => {
  const [search, setSearch] = useState("Avengers");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchLatest();
  }, []);

  const fetchLatest = async () => {
    const fetchMovie = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=1e899345`
    );
    const fetchData = await fetchMovie.json();
    console.log(fetchData.Search);
    setData(fetchData.Search);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <h3>WilsonHub</h3>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={fetchLatest}>
            <IoSearchSharp />
          </button>
        </div>
      </div>
      <div className="movie">
        <h3>Movies</h3>
        <div className="container">
          {data.map((curElm) => {
            return (
              <>
                <div className="box" key={curElm.imdbID}>
                  <div className="img-box">
                    <img src={curElm.Poster} alt="movie logo" />
                  </div>
                  <div className="detail">
                    <h3>{curElm.Title}</h3>
                    <h4>Release Date: {curElm.Year}</h4>
                    <h5>Ratings: {curElm.imdbRating}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
