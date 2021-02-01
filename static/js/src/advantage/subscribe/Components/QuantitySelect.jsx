import React from "react";
import { Input } from "@canonical/react-components";

function QuantitySelect() {
  return (
    <section className="p-strip is-shallow js-shop-step--quantity">
      <div className="row">
        <div className="col-12">
          <h2 className="p-heading--three u-no-margin--bottom u-sv2">
            How many?
          </h2>
        </div>
        <div className="col-2">
          <Input
            type="number"
            placeholder="0"
            min="1"
            max="1000"
            step="1"
            style={{ ScrollMarginBottom: "2px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default QuantitySelect;
