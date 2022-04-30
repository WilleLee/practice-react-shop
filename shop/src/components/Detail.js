import items from "../data/items";

function Detail() {
  return (
    <section className="detail">
      <div className="detail__image-container">
        <img src={items[0].src} />
      </div>
      <div className="detail__text">
        <h3>{items[0].name}</h3>
        <p className="detail__description">{items[0].description}</p>
        <p className="detail__price">{items[0].price}</p>
      </div>
    </section>
  );
}

export default Detail;
