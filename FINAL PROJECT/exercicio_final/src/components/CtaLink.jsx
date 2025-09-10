import { Link } from "react-router-dom";

export default function CtaLink({ text, to, href, variant = "cta-01", icon }) {
  if (to) {
    return (
      <Link to={to} className={variant}>
        {text} {icon && <i className={`${icon} fas`}></i>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={variant}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text} {icon && <i className={`${icon} fas`}></i>}
      </a>
    );
  }

  return null;
}
