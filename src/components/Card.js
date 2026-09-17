function Card({ img, title, description, link }) {
  return (
    <div className="gallery-item">
      <img src={img} alt={title} />
      <div className="proj-info">
        <p>
          <span class="title">{title}</span>
          {description}
        </p>
        <a href={link} className="read-more">
          Read More →
        </a>
      </div>
    </div>
  );
}

export default Card;


