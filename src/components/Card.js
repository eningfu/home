import { Link } from "react-router-dom";

function Card({ img, title, description, link }) {
  return (
    <div className="gallery-item">
      <img src={img} alt={title} />
      <div className="proj-info">
        <p>
          <span className="title">{title}</span>
          {description}
        </p>
        <Link to={link} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default Card;


