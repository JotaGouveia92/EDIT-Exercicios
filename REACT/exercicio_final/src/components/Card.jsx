import { Link } from "react-router";
import StarRating from "./StarRating";

export default function Card({ data }) {
  const title = data.title ? data.title : data.name;
  const type = data.title ? "movie" : "tv";
  const year = new Date(data.release_date || data.first_air_date).getFullYear();
  const ratingOutOfFive = Math.round((data.vote_average / 2) * 10) / 10;

  console.log(year);
  return (
    <Link to={`/${type}/${data.id}`} className="card">
      <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
      <div className="card-content">
        <div className="truncate">{title}</div>
        {year && <div>{year}</div>}
        <StarRating rating={ratingOutOfFive} />
      </div>
    </Link>
  );
}
