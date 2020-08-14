import React from "react";
import "./Form.style.css";
function Form(props) {
  return (
    <div className="container">
      <h4 style={{ fontFamily: "'Sriracha', cursive" }}>
        Want to know weather details?
      </h4>
      <div>{props.error ? error : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              name="city"
              type="text"
              autoComplete="off"
              placeholder="City name"
            ></input>
          </div>
          <div className="col-md-3">
            <input
              name="country"
              type="text"
              autoComplete="off"
              placeholder="Country name"
            ></input>
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button>Show</button>
          </div>
        </div>
      </form>
    </div>
  );
}

function error() {
  return <div>Please Enter City and Country</div>;
}
export default Form;
