import MainBanner from "../components/MainBanner";
import Item from "../components/Item";
import items from "../data/items";
import { useState } from "react";

function Main() {
  const [itemsList, setItemsList] = useState(items);
  return (
    <main className="main-screen">
      <MainBanner />

      <Item itemsList={itemsList} />
    </main>
  );
}

export default Main;
