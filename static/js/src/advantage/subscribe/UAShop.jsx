import React from "react";
import { StoreProvider } from "./store/useStore.jsx";
import { reducer, initialStore } from "./store/reducer";
import Header from "./Components/Header.jsx";
import Basket from "./Components/Basket.jsx";
import TypeSelect from "./Components/TypeSelect.jsx";
import QuantitySelect from "./Components/QuantitySelect.jsx";
import VersionSelect from "./Components/versionSelect/VersionSelect.jsx";
import ESMAppsSelect from "./Components/ESMAppsSelect.jsx";
import OtherSoftwareSelect from "./Components/OtherSoftwareSelect.jsx";
import SupportSelect from "./Components/SupportSelect.jsx";
import Summary from "./Components/Summary.jsx";

function UAShop() {
  const isBasketEmpty = true;

  return (
    <StoreProvider reducer={reducer} initialState={initialStore}>
      {isBasketEmpty ? <Header /> : <Basket />}
      <TypeSelect />
      <QuantitySelect />

      <VersionSelect />

      <ESMAppsSelect />
      <OtherSoftwareSelect />

      <SupportSelect />

      <Summary />
    </StoreProvider>
  );
}
export default UAShop;
