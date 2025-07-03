function Card({ children, bgColor }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}

export default Card;
