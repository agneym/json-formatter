import React, { lazy, Suspense, useContext } from "react";
import PropTypes from "prop-types";

import CollapsibleTabs from "../CollapsibleTabs";
import pluginsDir from "../Plugins/pluginDir";
import PinContext from "../Plugins/pinnedContext";

const Plugins = lazy(() => import("../Plugins"));

function Tabs({ onTransform }) {
  const { pinnedPlugins } = useContext(PinContext);
  const pinnedPluginsForTabs = [];
  pinnedPlugins.forEach(pinnedPlugin => {
    const plugin = pluginsDir.find(plugin => plugin.tagName === pinnedPlugin);
    pinnedPluginsForTabs.push({
      key: plugin.tagName,
      title: plugin.name,
      component: <Plugins onTransform={onTransform} selectedPlugin={plugin} />,
      uiType: "grey",
    });
  });

  const tabs = [
    {
      key: "plugins",
      title: "Plugins",
      component: (
        <Plugins onTransform={onTransform} pinnedPlugins={pinnedPlugins} />
      ),
      uiType: "primary",
    },
    ...pinnedPluginsForTabs,
  ];
  console.log("rerender Tabs", tabs);

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
