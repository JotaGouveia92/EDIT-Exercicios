import { useEffect, useState } from "react";
import Card from "./Card";

export default function DisplaySeries() {
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState({
    popular: { results: [] },
    topRated: { results: [] },
    airingToday: { results: [] },
  });

  useEffect(() => {
    const fetchSeries = async () => {
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
          `https://api.themoviedb.org/3/tv/popular`,
          options
        );
        const popularList = await popular.json();

        const topRated = await fetch(
          `https://api.themoviedb.org/3/tv/top_rated`,
          options
        );
        const topRatedList = await topRated.json();

        const airingToday = await fetch(
          `https://api.themoviedb.org/3/tv/airing_today`,
          options
        );
        const airingTodayList = await airingToday.json();

        setSeries({
          popular: popularList,
          topRated: topRatedList,
          airingToday: airingTodayList,
        });
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h1>Popular TV</h1>
          <div className="grid">
            {series.popular.results.map((serie) => (
              <Card key={serie.id} data={serie} />
            ))}
          </div>
        </div>
      </div>
      <h2 className="title">Top Rated</h2>
      <div className="slider">
        {series.topRated.results.map((serie) => (
          <Card key={serie.id} data={serie} />
        ))}
      </div>
      <h2 className="title">Airing Today</h2>
      <div className="slider">
        {series.airingToday.results.map((serie) => (
          <Card key={serie.id} data={serie} />
        ))}
      </div>
    </div>
  );
}
