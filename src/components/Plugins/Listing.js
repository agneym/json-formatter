import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";

import SingleItem from "./SingleItem";
import pluginPropType from "./pluginType";
import Header from "./Header";
import FootNote from "./FootNote";
import PinContext from "../Plugins/pinnedContext";

function Listing({ list, onClick }) {
  const { pinnedPlugins, handlePinChange } = useContext(PinContext);
  return (
    <Fragment>
      <Header title="Plugins" />
      {list.map(pluginItem => {
        const isPinned = !!pinnedPlugins.find(
          pinnedPlugin => pinnedPlugin === pluginItem.tagName
        );
        return (
          <SingleItem
            key={pluginItem.name}
            name={pluginItem.name}
            description={pluginItem.description}
            onClick={() => onClick(pluginItem)}
            onPinClick={pinActionTypes =>
              handlePinChange(pluginItem, pinActionTypes)
            }
            showPin={pinnedPlugins.length < 2 && !isPinned}
            showUnpin={isPinned}
          />
        );
      })}
      <FootNote />
    </Fragment>
  );
}

Listing.propTypes = {
  list: PropTypes.arrayOf(pluginPropType).isRequired,
  onClick: PropTypes.func.isRequired,
  handlePinChange: PropTypes.func.isRequired,
  pinnedPlugins: PropTypes.array.isRequired,
};

export default Listing;
