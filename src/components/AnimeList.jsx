import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ animeList }) => {
  if (!animeList || animeList.length === 0) {
    return <div style={{ textAlign: "center", marginTop: "2rem" }}>No anime found.</div>;
  }

  return (
    <div className="anime-list" style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", padding: "20px" }}>
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
