import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../DetailPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await response.json();
      setAnime(data.data);
    };

    fetchDetails();
  }, [id]);

  if (!anime) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="leftSection">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="image"
        />
      </div>
      <div className="rightSection">
        <Link to="/" className="backButton">← Back to Search</Link>
        <h1 className="title">{anime.title}</h1>
        <p className="synopsis">{anime.synopsis}</p>
        <div className="statsContainer">
          <div className="statBox">
            <strong>{anime.score}</strong>
            <p>POINT</p>
          </div>
          <div className="statBox">
            <strong>{anime.rank}</strong>
            <p>RANKED</p>
          </div>
          <div className="statBox">
            <strong>{anime.popularity}</strong>
            <p>POPULARITY</p>
          </div>
          <div className="statBox">
            <strong>{anime.members}</strong>
            <p>MEMBERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
