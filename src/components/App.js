import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";
import "../styles/App.css";

const App = ({ location, forecast }) => {
  const {city, country} = location; 
  const {date, maxTemp, description} = forecast
  return (
    <div className="Weather-app">
      <LocationDetails 
      city={city} 
      country={country} />,
    <ForecastSummary 
      date={date}
      maxTemp={maxTemp}
      description={description}
    />
    </div>
  );
}


App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  ForecastSummary: PropTypes.shape({
    date: PropTypes.string,
    maxTemp: PropTypes.string,
    description: PropTypes.string
  })
};

export default App;
