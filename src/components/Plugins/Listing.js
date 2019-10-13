import React, { Fragment } from "react";
import PropTypes from "prop-types";

import SingleItem from "./SingleItem";

function Listing({ list, onClick }) {
  return (
    <Fragment>
      {list.map(pluginItem => (
        <SingleItem
          key={pluginItem.name}
          name={pluginItem.name}
          description={pluginItem.description}
          onClick={onClick}
        />
      ))}
    </Fragment>
  );
}

Listing.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Listing;
