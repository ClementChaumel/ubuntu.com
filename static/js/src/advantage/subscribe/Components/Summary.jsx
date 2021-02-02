import React from "react";
import { useStore } from "../store/useStore.jsx";

function Summary() {
  const store = useStore();
  console.log({ store });
  return <div />;
}

export default Summary;
