import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/App.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;

  return (
    <div className="forecast-details" data-testId="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperature">
        {`Max temp: ${temperature.max}`}
        &deg;C
      </div>
      <div className="forecast-details__temperature">
        {`Min temp: ${temperature.min}`}
        &deg;C
      </div>
      <div className="forecast-details__humidity">{`Humidity: ${humidity} %`}</div>
      <div className="forecast-details__wind-speed">{`Wind speed: ${wind.speed} mph`}</div>
      {/* <div className="forecast-details__winddirection">{`Wind direction: ${wind.direction.toUpperCase()}`}</div> */}
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
