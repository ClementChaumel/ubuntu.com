import React from "react";
import useProduct from "../hooks/useProduct.js";
import { useStore } from "../store/useStore.jsx";
import Section from "./Section.jsx";

function Summary() {
  const store = useStore();

  const { name, totalPrice, isNotFound } = useProduct();

  console.log({ store });

  return (
    <Section disabled={isNotFound}>
      <div className="row">
        <div className="col-12">
          <h3>Your chosen plan</h3>
        </div>
        {!isNotFound && (
          <h3>
            {name} for {totalPrice}
          </h3>
        )}
        <div className="col-12">&mldr;</div>
      </div>
    </Section>
  );
}

export default Summary;
