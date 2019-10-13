import PropTypes from "prop-types";

const pluginPropType = PropTypes.shape({
  key: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.url,
});

export default pluginPropType;
