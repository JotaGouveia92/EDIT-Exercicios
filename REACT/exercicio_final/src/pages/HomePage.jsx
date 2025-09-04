import { useEffect, useState } from "react";
import DisplayMovies from "../components/DisplayMovies";
import Card from "../components/Card";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState({});

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
        const airingToday = await fetch(
          `https://api.themoviedb.org/3/tv/airing_today`,
          options
        );
        const airingTodayList = await airingToday.json();
        setSeries(airingTodayList);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (loading) return <div>Loading...</div>;
  console.log(series);
  return (
    <div>
      <DisplayMovies />
      <h2 className="title">Airing Today</h2>
      <div className="slider">
        {series.results &&
          series.results.map((serie) => <Card key={serie.id} data={serie} />)}
      </div>
    </div>
  );
}
