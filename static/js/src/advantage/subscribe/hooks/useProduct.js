import { useEffect, useState } from "react";
import { useStore } from "../store/useStore.jsx";

const productList = window.productList; //replace this with an API call

const defaultProduct = {
  name: "",
  price: { currency: "", value: 0 },
  private: "",
  productID: "",
  isNotFound: true,
};

const getProductID = (type, ESMApps, securityUpdates, KVMDrivers, support) => {
  const otherSoftware = securityUpdates || KVMDrivers;
  let prefix = "uai";

  if (ESMApps && !otherSoftware) {
    prefix = "uaa";
    if (type === "physical") return `${prefix}-${support}`; // The UAA IDs don't have a suffix for physical ¯\_(ツ)_/¯
  }

  if (ESMApps && otherSoftware) prefix = "uaia";

  return `${prefix}-${support}-${type}`;
};

function useProduct() {
  const {
    currentProduct: {
      type,
      quantity,
      ESMApps,
      otherSoftware: { securityUpdates, KVMDrivers },
      support,
    },
  } = useStore();

  const [product, setProduct] = useState(defaultProduct);

  useEffect(() => {
    const productID = getProductID(
      type,
      ESMApps,
      securityUpdates,
      KVMDrivers,
      support
    );

    for (const [key, product] of Object.entries(productList)) {
      if (product.productID === productID) {
        setProduct({
          ...product,
          totalPrice: product.price.value * quantity,
          isNotFound: false,
        });
        return;
      }
    }
    setProduct(defaultProduct);
  }, [type, quantity, ESMApps, securityUpdates, KVMDrivers, support]);

  return { ...product };
}

export default useProduct;
