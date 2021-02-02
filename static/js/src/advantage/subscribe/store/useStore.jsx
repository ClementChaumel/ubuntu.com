import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const storeContext = createContext();
const dispatchContext = createContext();

export const StoreProvider = ({ reducer, initialState = {}, children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    </dispatchContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.children,
  reducer: PropTypes.func,
  initialState: PropTypes.object,
};

export function useStore() {
  return useContext(storeContext);
}
export function useDispatch() {
  return useContext(dispatchContext);
}
