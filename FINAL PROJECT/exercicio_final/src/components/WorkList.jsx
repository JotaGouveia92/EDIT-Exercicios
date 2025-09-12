export default function WorkList() {
  return (
    <div>
      <div className="workList" data-margin-top="m" data-margin-bottom="m">
        <div className="wrapper">
          <h2 className="workList__title">My Experience</h2>
          <ul className="workList__list">
            <li className="workList__item">
              <div className="workList__item-info">
                <h4 className="workList__item-title">UX UI Designer</h4>
                <p className="workList__item-date">FullSix Portugal</p>
              </div>
              <div className="workList__item-tags">
                <span className="tag-04">2020 - Present</span>
              </div>
            </li>

            <li className="workList__item">
              <div className="workList__item-info">
                <h4 className="workList__item-title">Graphic Designer</h4>
                <p className="workList__item-date">FullSix Portugal</p>
              </div>
              <div className="workList__item-tags">
                <span className="tag-04">2017 - 2020</span>
              </div>
            </li>

            <li className="workList__item">
              <div className="workList__item-info">
                <h4 className="workList__item-title">
                  Graphic Design (Postgraduate degree)
                </h4>
                <p className="workList__item-date">
                  at AKV St. Joost - Breda, NL
                </p>
              </div>
              <div className="workList__item-tags">
                <span className="tag-04">2014 - 2016</span>
              </div>
            </li>

            <li className="workList__item">
              <div className="workList__item-info">
                <h4 className="workList__item-title">
                  Graphic Design (Erasmus)
                </h4>
                <p className="workList__item-date">
                  at Pedagogical University of Cracow - Cracow, PL
                </p>
              </div>
              <div className="workList__item-tags">
                <span className="tag-04">2012 - 2013</span>
              </div>
            </li>

            <li className="workList__item">
              <div className="workList__item-info">
                <h4 className="workList__item-title">
                  Multimedia Design Degree (Undergraduate Degree)
                </h4>
                <p className="workList__item-date">
                  at University of Beira Interior - Covilhã, PT
                </p>
              </div>
              <div className="workList__item-tags">
                <span className="tag-04">2010 - 2013</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
