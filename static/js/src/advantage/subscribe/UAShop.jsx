import React from "react";
import Header from "./Components/Header.jsx";
import Cart from "./Components/Cart.jsx";
import TypeSelect from "./Components/TypeSelect.jsx";
import QuantitySelect from "./Components/QuantitySelect.jsx";
import VersionSelect from "./Components/VersionSelect/VersionSelect.jsx";
import ESMAppsSelect from "./Components/ESMAppsSelect.jsx";
import OtherSoftwareSelect from "./Components/OtherSoftwareSelect.jsx";
import SupportSelect from "./Components/SupportSelect.jsx";
import Summary from "./Components/Summary.jsx";

function UAShop() {
  const isCartEmpty = true;

  return (
    <div>
      {isCartEmpty ? <Header /> : <Cart />}
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
