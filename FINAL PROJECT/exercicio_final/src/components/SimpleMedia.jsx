export default function SimpleMedia({ image, alt }) {
  return (
    <div data-margin-top="s">
      <section className="simpleMedia">
        <div className="wrapper">
          <img className="simpleMedia__img" src={image} alt={alt} />
        </div>
      </section>
    </div>
  );
}
