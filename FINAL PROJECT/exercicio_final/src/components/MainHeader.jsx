export default function MainHeader() {
  return (
    <div>
      <section
        className="mainHeader"
        data-margin-top="l"
        data-margin-bottom="m"
      >
        <div className="wrapper grid">
          <div className="mainHeader__column">
            <div className="mainHeader__content-tags">
              <span className="tag-05">About me</span>
            </div>
            <h2 className="mainHeader__title">
              Innovative designer for a <mark>digital age</mark>
            </h2>
          </div>
          <div className="mainHeader__column">
            <p className="mainHeader__description">
              With over +8 years of experience, I specialize in creating
              intuitive and user-centered interfaces for a wide range of digital
              products and experiences. Far far away, behind the world
              mountains, far from the countries Vokalia and Consonantia, theres
              live the blind texts.
            </p>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}
