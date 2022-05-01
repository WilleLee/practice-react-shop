import { useNavigate } from "react-router-dom";
function MainBanner() {
  const navigate = useNavigate();
  return (
    <section className="main-banner">
      <div
        className="main-banner__banner"
        onClick={() => {
          navigate("/detail/0");
        }}
      >
        <img
          alt="main banner"
          className="main-banner__img"
          src="https://image.nbkorea.com/NBRB_Site/20220426/NB20220426162348127001.jpg"
        />
      </div>
    </section>
  );
}

export default MainBanner;
