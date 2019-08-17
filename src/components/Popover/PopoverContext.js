import React, { createContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

export const PopoverContext = createContext();

function PopoverCtxProvider({ children }) {
  const [open, setOpen] = useState(false);
  const createValue = useCallback(() => ({ open, setOpen }), [open]);
  return (
    <PopoverContext.Provider value={createValue()}>
      {children}
    </PopoverContext.Provider>
  );
}

PopoverCtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopoverCtxProvider;
