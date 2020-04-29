import React from "react";

const Spinner = (props) => {
  return (
    <div class='ui active dimmer'>
      <div class='ui text big loader'>
        <h3>{props.message}</h3>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..",
};

export default Spinner;
