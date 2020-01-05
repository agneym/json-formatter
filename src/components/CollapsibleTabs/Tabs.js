import React, { lazy, Suspense, useContext } from "react";
import PropTypes from "prop-types";

import CollapsibleTabs from "../CollapsibleTabs";
import pluginsDir from "../Plugins/pluginDir";
import PluginContext from "../Plugins/pluginContext";

const Plugins = lazy(() => import("../Plugins"));

function Tabs({ onTransform }) {
  const pluginComponent = <Plugins onTransform={onTransform} />;

  const { pinnedPlugins } = useContext(PluginContext);

  const pinnedPluginsForTabs = pinnedPlugins.reduce((acc, pinnedPlugin) => {
    const foundPlugin = pluginsDir.find(
      eachPlugin => eachPlugin.tagName === pinnedPlugin
    );
    return acc.concat({
      key: foundPlugin.tagName,
      title: foundPlugin.name,
      component: pluginComponent,
      uiType: "grey",
    });
  }, []);

  const tabs = [
    {
      key: "plugins",
      title: "Plugins",
      component: pluginComponent,
      uiType: "primary",
    },
    ...pinnedPluginsForTabs,
  ];

  return (
    <CollapsibleTabs tabs={tabs}>
      {selectedComponent => (
        <Suspense fallback={<div>Loading ...</div>}>
          {selectedComponent}
        </Suspense>
      )}
    </CollapsibleTabs>
  );
}

Tabs.propTypes = {
  onTransform: PropTypes.func.isRequired,
};

export default Tabs;
