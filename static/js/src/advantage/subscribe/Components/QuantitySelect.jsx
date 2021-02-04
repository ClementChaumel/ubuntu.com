import React, { useState } from "react";
import { Input } from "@canonical/react-components";
import { debounce } from "../../../utils/debounce";
import { useDispatch, useStore } from "../store/useStore.jsx";
import useGetState from "../hooks/useGetState";
import Section from "./Section.jsx";

function QuantitySelect() {
  const {
    currentProduct: { quantity },
  } = useStore();
  const dispatch = useDispatch();

  const {
    quantity: { disabled, hidden },
  } = useGetState();

  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setTouched(true);
    dispatch({ type: "SetQuantity", value: e.target.value });
  };

  return (
    <Section disabled={disabled} hidden={hidden}>
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
            onChange={debounce(handleChange, 250)}
            defaultValue={quantity}
            style={{ ScrollMarginBottom: "2px" }}
            error={quantity < 1 && touched ? "Must be more than 0" : false}
            disabled={disabled}
          />
        </div>
      </div>
    </Section>
  );
}

export default QuantitySelect;
