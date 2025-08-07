import { useEffect, useState } from "react";
import Card from "./Card";

export default function DisplayMovies() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({
    popular: { results: [] },
    nowPlaying: { results: [] },
    topRated: { results: [] },
  });

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE", // Replace with your Bearer token
        },
      };

      setLoading(true);

      try {
        const popular = await fetch(
          `https://api.themoviedb.org/3/movie/popular`,
          options
        );
        const popularList = await popular.json();

        const nowPlaying = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing`,
          options
        );
        const nowPlayingList = await nowPlaying.json();

        const topRated = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated`,
          options
        );
        const topRatedList = await topRated.json();

        setMovies({
          popular: popularList,
          nowPlaying: nowPlayingList,
          topRated: topRatedList,
        });
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div
      style={{
        className: "wrapper",
        display: "flex",
        gap: "16px",
        flexDirection: "column",
      }}
    >
      <h1>Popular Movies</h1>
      <div className="grid">
        {movies.popular.results.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </div>
      <h1>Now Playing</h1>
      <div className="slider">
        {movies.nowPlaying.results.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </div>
      <h1>Top Rated</h1>
      <div className="slider">
        {movies.topRated.results.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
}
