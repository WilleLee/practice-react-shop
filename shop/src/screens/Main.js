import MainBanner from "../components/MainBanner";
import Item from "../components/Item";

function Main() {
  return (
    <main className="main-screen">
      <section className="main-banner">
        <MainBanner />
      </section>

      <section className="main-items">
        <Item />
      </section>
    </main>
  );
}

export default Main;
