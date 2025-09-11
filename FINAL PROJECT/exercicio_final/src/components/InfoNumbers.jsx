export default function InfoNumbers({ items }) {
  return (
    <section className="infoNumbers" data-margin-top="m">
      <div className="wrapper">
        <div className="infoNumbers__content">
          {items.map((item, index) => (
            <div key={index} className="infoNumbers__item">
              <h2 className="infoNumbers__item-title">{item.title}</h2>
              <p className="infoNumbers__item-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
