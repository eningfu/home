function Card({ img, title, description, onReadMore }) {
  return (
    <div className="gallery-item">
      <img src={img} alt={title} />
      <div className="proj-info">
        <p>
          <span className="title">{title}</span>
          {description}
        </p>
        <button className="read-more" onClick={onReadMore}>
          Read More →
        </button>
      </div>
    </div>
  );
}

export default Card;


