export default function SimpleHeader({ title, text, label, date }) {
  return (
    <div data-margin-top="m">
      <section className="simpleHeader">
        <div className="wrapper">
          <div className="simpleHeader__content">
            <p className="simpleHeader__caption">
              <strong>{label}</strong>
            </p>
            <h3 className="simpleHeader__title"> {title} </h3>
            <p className="simpleHeader__text">{text}</p>
            <p className="simpleHeader__date">{date}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
