import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const TabContext = createContext(null);

export const TabContextProvider = ({ children }) => {
  const { selected, setSelected } = useState(false);
  const value = useMemo(
    () => ({
      selected,
      setSelected,
    }),
    [selected, setSelected]
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

TabContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContext;
