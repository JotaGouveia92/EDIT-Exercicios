import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="wrapper">
        <div className="nav__content">
          <div className="nav__naming">
            <a href="/">
              <strong>
                João<mark>Gouveia.</mark>
              </strong>
            </a>
          </div>
          <nav className="nav__links">
            <Link className="nav__links-item" to="/work">
              Work
            </Link>
            <Link className="nav__links-item" to="/aboutMe">
              About Me
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
