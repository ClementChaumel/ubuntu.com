export const initialStore = {
  currentProduct: {
    type: null,
    quantity: null,
    version: "20.04",
    ESMApps: false,
    otherSoftware: {
      securityUpdates: false,
      KVMDrivers: false,
    },
    support: null,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SetType":
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          type: action.value,
        },
      };
    case "SetQuantity":
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          quantity: action.value < 0 ? null : action.value,
        },
      };
    case "SetVersion":
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          version: action.value,
        },
      };
    case "SetESMApps":
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          ESMApps: action.value,
        },
      };
    case "SetOtherSoftware":
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          otherSoftware: action.value,
        },
      };
    case "SetSupport":
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          support: action.value,
        },
      };

    default:
      throw new Error("Unknown action", action);
  }
};
