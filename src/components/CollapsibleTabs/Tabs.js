import React, { lazy, Suspense, useContext } from "react";
import PropTypes from "prop-types";

import CollapsibleTabs from "../CollapsibleTabs";
import pluginsDir from "../Plugins/pluginDir";
import PluginContext from "../Plugins/pluginContext";

const Plugins = lazy(() => import("../Plugins"));

function Tabs({ onTransform }) {
  const pluginComponent = <Plugins onTransform={onTransform} />;

  const { pinnedPlugins } = useContext(PluginContext);

  const pinnedPluginsForTabs = [];
  pinnedPlugins.forEach(pinnedPlugin => {
    const plugin = pluginsDir.find(plugin => plugin.tagName === pinnedPlugin);
    pinnedPluginsForTabs.push({
      key: plugin.tagName,
      title: plugin.name,
      component: pluginComponent,
      uiType: "grey",
    });
  });

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
