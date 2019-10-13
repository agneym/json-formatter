import PropTypes from "prop-types";

const pluginPropType = PropTypes.shape({
  key: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
});

export default pluginPropType;
