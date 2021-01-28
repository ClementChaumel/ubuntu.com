import React from "react";
import Header from "./Components/Header.jsx";
import Cart from "./Components/Cart.jsx";
import TypeSelect from "./Components/TypeSelect.jsx";
import QuantitySelect from "./Components/QuantitySelect.jsx";
import VersionSelect from "./Components/VersionSelect.jsx";
import ESMAppsSelect from "./Components/ESMAppsSelect.jsx";
import OtherSoftwareSelect from "./Components/OtherSoftwareSelect.jsx";
import SupportSelect from "./Components/SupportSelect.jsx";
import Summary from "./Components/Summary.jsx";

function UAShop() {
  const isCartEmpty = false;

  return (
    <div>
      <section className="p-strip--suru-topped-light">
        {isCartEmpty ? <Header /> : <Cart />}
        <h1>heeeeeooo</h1>
      </section>
      <TypeSelect />
      <QuantitySelect />

      <VersionSelect />

      <ESMAppsSelect />
      <OtherSoftwareSelect />

      <SupportSelect />

      <Summary />
    </div>
  );
}
export default UAShop;
