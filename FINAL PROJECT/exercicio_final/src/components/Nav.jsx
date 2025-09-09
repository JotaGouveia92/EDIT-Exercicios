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
            <a className="nav__links-item" href="#">
              Work
            </a>
            <a className="nav__links-item" href="https://read.cv/joaogouveia">
              Read cv
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
