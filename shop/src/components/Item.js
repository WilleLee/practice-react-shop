import { Link } from "react-router-dom";
import links from "../data/links";

function Item({ itemsList }) {
  return (
    <section className="main-items">
      <ul className="main-items__items">
        {itemsList.map((item, i) => {
          return (
            <li key={i} className="main-items__item">
              <div className="main-items__image-container">
                <Link to={`${links["detail"]}${item.id}`}>
                  <img alt={item.name} src={item.src} />
                </Link>
              </div>
              <div className="main-items__text">
                <h3>{item.name}</h3>
                <p className="main-items__description">{item.description}</p>
                <p className="main-items__price">{item.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Item;
