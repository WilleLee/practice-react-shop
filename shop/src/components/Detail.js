import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
/*data*/
import items from "../data/items";

function Detail() {
  const [warning, setWarning] = useState(true);
  useEffect(() => {
    const deleteWarning = setTimeout(() => {
      setWarning(false);
    }, 2000);

    return () => {
      clearTimeout(deleteWarning);
    };
  }, []);
  const { id } = useParams();
  const thisItem = items.find((item) => item.id == id);
  return (
    <section className="detail">
      {warning ? (
        <div className="alert alert-warning">Qhsdgihasglihl</div>
      ) : null}
      {thisItem ? (
        <div className="detail__container">
          <div className="detail__image-container">
            <img src={thisItem.src} />
          </div>
          <div className="detail__info">
            <div className="detail__text">
              <h3>{thisItem.name}</h3>
              <p className="detail__description">{thisItem.description}</p>
              <p className="detail__price">{thisItem.price}</p>
            </div>

            <form className="detail__form">
              <div className="detail__inputs">
                <div className="detail__input">
                  <label for="quantity">Quan: </label>
                  <input
                    name="quantity"
                    type="number"
                    placeholder={1}
                    max={10}
                    min={1}
                  />
                </div>
              </div>
              <div className="detail__btns">
                <Button role="submit" className="detail__btn" variant="primary">
                  Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>go away</>
      )}
    </section>
  );
}

export default Detail;
