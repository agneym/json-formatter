import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";

import CollapsibleTabs from "../CollapsibleTabs";

const Plugins = lazy(() => import("../Plugins"));

function Tabs() {
  const tabs = [
    {
      key: "plugins",
      title: "Plugins",
      component: <Plugins />,
    },
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
