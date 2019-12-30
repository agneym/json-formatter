import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import pluginsDir from "./pluginDir";

const PinContext = createContext({
  pinnedPlugins: [],
});

export const pinActionTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

export const PinContextProvider = ({ children }) => {
  const [selectedPlugin, setSelectedPlugin] = useState(null);
  const [pinnedPlugins, setPinnedPlugins] = useState(
    JSON.parse(localStorage.getItem("pinnedPlugins") || "[]")
  );

  const handlePinChange = (selectedPlugin, pinActionType) => {
    let newPinnedPlugins = [];
    if (pinActionType === pinActionTypes.ADD) {
      newPinnedPlugins = [...pinnedPlugins, selectedPlugin.tagName];
    } else if (pinActionType === pinActionTypes.REMOVE) {
      newPinnedPlugins = pinnedPlugins.filter(
        pinnedPlugin => pinnedPlugin != selectedPlugin.tagName
      );
    }
    localStorage.setItem("pinnedPlugins", JSON.stringify(newPinnedPlugins));
    setPinnedPlugins(newPinnedPlugins);
  };

  const handlePluginTabClick = tagName => {
    setSelectedPlugin(pluginsDir.find(item => tagName === item.tagName));
  };

  // const value = useMemo(
  //   () => ({
  //     pinnedPlugins,
  //     setPinnedPlugins,
  //     handlePinChange
  //   }),
  //   [pinnedPlugins, setPinnedPlugins, handlePinChange]
  // );

  return (
    <PinContext.Provider
      value={{
        pinnedPlugins,
        setPinnedPlugins,
        handlePinChange,
        selectedPlugin,
        setSelectedPlugin,
        handlePluginTabClick,
      }}
    >
      {children}
    </PinContext.Provider>
  );
};

PinContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PinContext;
