import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";

import CollapsibleTabs from "../CollapsibleTabs";

const Plugins = lazy(() => import("../Plugins"));

function Tabs({ onTransform }) {
  const tabs = [
    {
      key: "plugins",
      title: "Plugins",
      component: <Plugins onTransform={onTransform} />,
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
