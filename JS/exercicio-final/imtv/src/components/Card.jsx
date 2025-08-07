import { Link } from "react-router";

export default function Card({ data }) {
  const title = data.title ? data.title : data.name;
  const type = data.title ? "movie" : "tv";
  return (
    <div>
      <Link to={`/${type}/${data.id}`}>
        <div className="card-item">
          <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
          <div>{title}</div>
          <div>{data.release_date}</div>
          <div>{data.vote_average}</div>
        </div>
      </Link>
    </div>
  );
}
