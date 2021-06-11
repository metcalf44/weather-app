import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import "../styles/App.css";

const App = ({ location }) => {
  const {city, country} = location; 
  return (
    <div className="Weather-app">
      <LocationDetails 
      city={city} 
      country={country} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
