import React, { createContext, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

const TabContext = createContext(null);

export const TabContextProvider = ({ children }) => {
  const { open, setOpen } = useState(false);

  const toggle = useCallback(() => {
    setOpen(open => !open);
  }, [setOpen]);

  const value = useMemo(
    () => ({
      open,
      toggle,
    }),
    [open, toggle]
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

TabContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContext;
