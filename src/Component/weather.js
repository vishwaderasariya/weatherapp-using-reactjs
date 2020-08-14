import React from "react";

function weather(props) {
  const date = () => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = days[new Date().getDay()];
    let date = new Date().getDate();
    let month = months[new Date().getMonth()];
    let year = new Date().getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };
  return (
    <div className="container">
      <div className="cards">
        <h1 className="mt-5">{props.city}</h1>
        {props.city ? <h5>{date()}</h5> : null}

        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>

        {props.temp_celsius ? (
          <h1 className="temperatur">Tempurature :{props.temp_celsius}&deg;</h1>
        ) : null}

        {minmaxTemp(props.temp_min, props.temp_max)}

        {props.wind ? <h3> Wind speed : {props.wind}m/s</h3> : null}

        <h2 className="py-4">{props.description}</h2>
      </div>
    </div>
  );
}

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">Min :{min}&deg;</span>
        <span className="px-4">Max :{max}&deg;</span>
      </h3>
    );
  }
}
export default weather;
