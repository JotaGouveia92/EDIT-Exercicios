import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailPage() {
  const { type, id } = useParams();
  const [loading, setLoading] = useState(true);
  const [moviesTv, setMoviesTv] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [cast, setCast] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch main details
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}`,
          options
        );
        const data = await res.json();
        setMoviesTv(data);

        // Fetch trailer
        const trailerRes = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/videos`,
          options
        );
        const trailerData = await trailerRes.json();
        const youtubeTrailer = trailerData.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );
        setTrailer(youtubeTrailer);

        // Fetch cast
        const castRes = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/credits`,
          options
        );
        const castData = await castRes.json();
        setCast(castData.cast?.slice(0, 10));

        // Fetch recommendations
        const recRes = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/recommendations`,
          options
        );
        const recData = await recRes.json();
        setRecommendations(recData.results?.slice(0, 10));
      } catch (err) {
        console.error("Error loading detail page:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, id]);

  if (loading || !moviesTv) return <div>Loading...</div>;

  const {
    poster_path,
    title,
    name,
    overview,
    vote_average,
    release_date,
    first_air_date,
    runtime,
    episode_run_time,
    genres,
    status,
    tagline,
    original_language,
  } = moviesTv;

  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
      <div style={{ display: "flex", gap: "30px", marginBottom: "40px" }}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title || name}
          style={{ borderRadius: "12px", width: "300px" }}
        />
        <div>
          <h1 style={{ fontSize: "2.2rem", marginBottom: "10px" }}>
            {title || name}
          </h1>
          {tagline && (
            <p style={{ fontStyle: "italic", color: "#777" }}>{tagline}</p>
          )}

          <div style={{ display: "flex", gap: "1rem", margin: "20px 0" }}>
            <span>⭐ {vote_average}</span>
            <span>
              {release_date || first_air_date
                ? new Date(release_date || first_air_date).getFullYear()
                : "N/A"}
            </span>
            <span>
              {runtime || episode_run_time?.[0]
                ? `${Math.floor((runtime || episode_run_time?.[0]) / 60)}h${
                    (runtime || episode_run_time?.[0]) % 60
                  }m`
                : "N/A"}
            </span>
          </div>

          <div style={{ marginBottom: "20px" }}>
            {genres?.map((genre) => (
              <span
                key={genre.id}
                style={{
                  backgroundColor: "black",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  marginRight: "10px",
                  fontSize: "0.9rem",
                }}
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p style={{ lineHeight: 1.6, color: "white" }}>{overview}</p>
        </div>
      </div>

      {trailer && (
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "10px" }}>🎬 Watch Trailer</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            allowFullScreen
            style={{ borderRadius: "12px" }}
          ></iframe>
        </div>
      )}

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "16px" }}>👥 Top Billed Cast</h2>
        <div style={{ display: "flex", overflowX: "auto", gap: "16px" }}>
          {cast.map((actor) => (
            <div key={actor.id} style={{ textAlign: "center", width: "120px" }}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : "https://via.placeholder.com/120x180?text=No+Image"
                }
                alt={actor.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p style={{ margin: "8px 0 0", fontSize: "0.9rem" }}>
                {actor.name}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>
                {actor.character}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "16px" }}>🎞 You Might Also Like</h2>
        <div style={{ display: "flex", overflowX: "auto", gap: "16px" }}>
          {recommendations.map((rec) => (
            <div key={rec.id} style={{ textAlign: "center", width: "150px" }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${rec.poster_path}`}
                alt={rec.title || rec.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
                {rec.title || rec.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
