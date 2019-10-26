import React, { createContext, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

const TabContext = createContext(null);

export const TabContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => {
    setSelected(null);
  }, [setSelected]);
  const value = useMemo(
    () => ({
      selected,
      setSelected,
      close,
    }),
    [selected, setSelected, close]
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

TabContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContext;
