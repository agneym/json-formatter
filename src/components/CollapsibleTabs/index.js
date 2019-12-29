import React from "react";
import PropTypes from "prop-types";

import ErrorBoundary from "../ErrorBoundary";
import { TabContextProvider } from "./TabContext";
import { PinContextProvider } from "../Plugins/pinnedContext";
import CollapsibleTab from "./CollapsibleTab";

const CollapsibleTabs = ({ tabs, children }) => {
  return (
    <ErrorBoundary>
      <TabContextProvider>
        <PinContextProvider>
          <CollapsibleTab tabs={tabs}>{children}</CollapsibleTab>
        </PinContextProvider>
      </TabContextProvider>
    </ErrorBoundary>
  );
};

CollapsibleTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    })
  ).isRequired,
  children: PropTypes.func.isRequired,
};

export default CollapsibleTabs;
