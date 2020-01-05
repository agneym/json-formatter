import React, { createContext, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import pluginsDir from "./pluginDir";

const PluginContext = createContext({
  pinnedPlugins: [],
});

export const pinActionTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

//handle the states pinnedPlugins and selectedPlugin
export const PluginContextProvider = ({ children }) => {
  const [selectedPlugin, setSelectedPlugin] = useState(null); // for storing current selected plugin in the `Plugin` component
  const [pinnedPlugins, setPinnedPlugins] = useState(
    // for storing the pinned plugins
    JSON.parse(localStorage.getItem("pinnedPlugins") || "[]")
  );

  //for updating pinnedPlugins (in localStorage and state)
  const handlePinChange = useCallback(
    (clickedPlugin, pinActionType) => {
      let newPinnedPlugins = [];
      if (pinActionType === pinActionTypes.ADD) {
        newPinnedPlugins = [...pinnedPlugins, clickedPlugin.tagName];
      } else if (pinActionType === pinActionTypes.REMOVE) {
        newPinnedPlugins = pinnedPlugins.filter(
          pinnedPlugin => pinnedPlugin != clickedPlugin.tagName
        );
      }
      localStorage.setItem("pinnedPlugins", JSON.stringify(newPinnedPlugins));
      setPinnedPlugins(newPinnedPlugins);
    },
    [pinnedPlugins.length]
  );

  //for update current active plugin in the `Plugin` component
  const handlePluginTabClick = useCallback(tagName => {
    setSelectedPlugin(pluginsDir.find(item => tagName === item.tagName));
  }, []);

  const value = useMemo(
    () => ({
      pinnedPlugins,
      setPinnedPlugins,
      handlePinChange,
      selectedPlugin,
      setSelectedPlugin,
      handlePluginTabClick,
    }),
    [
      pinnedPlugins,
      setPinnedPlugins,
      handlePinChange,
      selectedPlugin,
      setSelectedPlugin,
      handlePluginTabClick,
    ]
  );

  return (
    <PluginContext.Provider value={value}>{children}</PluginContext.Provider>
  );
};

PluginContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PluginContext;
