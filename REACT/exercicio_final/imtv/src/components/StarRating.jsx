export default function StarRating({ rating = 0 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="star full">
        ★
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="star half">
        ★
      </span>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="star empty">
        ☆
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
}
