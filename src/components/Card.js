function Card({ img, title, description, languages }) {
  return (
    <div class="gallery-item">
      <img src={img} />
      <p>
        <span class="title">{title}</span>
        {description}
        <span class="lang">{languages}</span>
      </p>
    </div>
  );
}

export default Card;


