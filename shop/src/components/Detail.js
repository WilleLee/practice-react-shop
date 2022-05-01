import items from "../data/items";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const thisItem = items.find((item) => item.id == id);
  return (
    <section className="detail">
      {thisItem ? (
        <>
          <div className="detail__image-container">
            <img src={thisItem.src} />
          </div>
          <div className="detail__text">
            <h3>{thisItem.name}</h3>
            <p className="detail__description">{thisItem.description}</p>
            <p className="detail__price">{thisItem.price}</p>
          </div>
        </>
      ) : (
        <>go away</>
      )}
    </section>
  );
}

export default Detail;
