import React, { lazy, Suspense } from "react";

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

export default Tabs;
