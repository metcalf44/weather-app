import React from "react";
import PropTypes from "prop-types";

const LocationDetails = (props) => {
  const { city, country } = props;
  return <h1 className="location-details">{`${city}, ${country}`}</h1>;
};

// const MyComponent = (props) => {
//     const { customClassName } = props;
//     return <div className={customClassName} />
// }

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
