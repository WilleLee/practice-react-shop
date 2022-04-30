import items from "../data/items";

function Item() {
  return (
    <ul className="main-items__items">
      {items.map((item, i) => {
        return (
          <li key={i} className="main-items__item">
            <img alt={item.name} src={item.src} />
            <div className="main-items__text">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Item;
