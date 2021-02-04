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
      if (action.value === "desktop") {
        // Reset otherSoftware value
      }
      if (state.currentProduct.ESMApps) {
        // Dektop x ESM Apps only exists for essential (there has to be a better way to do it)
        return {
          ...state,
          currentProduct: {
            ...state.currentProduct,
            type: action.value,
            support: "essential",
          },
        };
      }
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
      // if 14.04 is selected we uncheck ESM Apps because it is not available for this version
      if (action.value === "14.04") {
        return {
          ...state,
          currentProduct: {
            ...state.currentProduct,
            version: action.value,
            ESMApps: false,
          },
        };
      }
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          version: action.value,
        },
      };
    case "SetESMApps":
      if (state.currentProduct.type === "desktop") {
        // Dektop x ESM Apps only exists for essential (there has to be a better way to do it)
        return {
          ...state,
          currentProduct: {
            ...state.currentProduct,
            ESMApps: action.value,
            support: "essential",
          },
        };
      }
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
