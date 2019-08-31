import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";

import CollapsibleTabs from "../CollapsibleTabs";

const Transformation = lazy(() => import("../Transformation"));

function Tabs({ onTransform }) {
  const tabs = [
    {
      key: "transformation",
      header: <span>Transform</span>,
      component: <Transformation transformCode={onTransform} />,
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
