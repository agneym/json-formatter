import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";

import CollapsibleTabs from "../CollapsibleTabs";
import pluginsDir from "../Plugins/pluginDir";

const Plugins = lazy(() => import("../Plugins"));

function Tabs({ onTransform }) {
  const pinnedPlugins = pluginsDir.map(plugin => ({
    key: plugin.tagName,
    title: plugin.name,
    component: <Plugins onTransform={onTransform} />,
    uiType: "grey",
  }));

  const tabs = [
    {
      key: "plugins",
      title: "Plugins",
      component: <Plugins onTransform={onTransform} />,
      uiType: "primary",
    },
    ...pinnedPlugins,
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
