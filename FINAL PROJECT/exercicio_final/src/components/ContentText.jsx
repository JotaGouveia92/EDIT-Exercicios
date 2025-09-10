export default function ContentText({ title, text }) {
  return (
    <div data-margin-top="s">
      <div className="contentText">
        <h2 className="contentText__title">{title}</h2>
        <p className="contentText__text">{text}</p>
      </div>
    </div>
  );
}
