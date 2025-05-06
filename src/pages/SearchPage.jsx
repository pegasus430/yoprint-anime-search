import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import AnimeList from "../components/AnimeList";
import Pagination from "../components/Pagination";

const SearchPage = () => {
  const [query, setQuery] = useState("naruto"); // Default query
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Fetch anime data
  const fetchAnime = async (searchQuery = "naruto", pageNumber = 1) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchQuery}&page=${pageNumber}&limit=16`
      );
      const data = await response.json();
      setAnimeList(data.data || []);
      setTotalResults(data.pagination?.items?.total || 0);
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  };

  // Effect to fetch data when query or page changes
  useEffect(() => {
    fetchAnime(query, page);
  }, [query, page]);

  // Handle search query (and reset to first page)
  const handleSearch = (searchQuery) => {
    const newQuery = searchQuery?.trim() || "naruto";
    setQuery(newQuery);
    setPage(1); // Reset to first page on new search
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage !== page) {
      setPage(newPage);
    }
  };

  // Calculate total number of pages (to pass to Pagination)
  const totalPages = Math.ceil(totalResults / 16);

  return (
    <div>
      <SearchBar query={query} onSearch={handleSearch} />
      <AnimeList animeList={animeList} />
      <Pagination
        page={page}
        setPage={handlePageChange}
        lastPage={totalPages}
      />
    </div>
  );
};

export default SearchPage;
