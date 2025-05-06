import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  const navigate = useNavigate();

  return (
    <div
      className="anime-card"
      onClick={() => navigate(`/anime/${anime.mal_id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <div className="anime-card-title">{anime.title}</div>
    </div>
  );
};

export default AnimeCard;