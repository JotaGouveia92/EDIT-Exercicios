export default function MainHeader({
  tag,
  title,
  highlight,
  description,
  marginTop,
  marginBottom,
}) {
  return (
    <section
      className="mainHeader"
      // data-margin-top={marginTop}
      // data-margin-bottom={marginBottom}
      data-margin-top="m"
    >
      <div className="wrapper grid">
        <div className="mainHeader__column">
          <div className="mainHeader__content-tags">
            <span className="tag-05">{tag}</span>
          </div>
          <h2 className="mainHeader__title">
            {title} <span className="mainHeader__underline">{highlight}</span>
          </h2>
        </div>
        <div className="mainHeader__column">
          <p className="mainHeader__description">{description}</p>
        </div>
      </div>
    </section>
  );
}
