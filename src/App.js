import React, { useState } from "react";
import mixpanel from "mixpanel-browser";

mixpanel.init("644d3e7c8c808b235ddb4e9057b95cad", {
  debug: true,
});
mixpanel.track("Page Loaded");

function App() {
  let btnIncrease = (e) => {
    mixpanel.track("Increase was clicked.");
  };
  let btnDecrease = (e) => {
    mixpanel.track("Decrease was clicked.");
  };

  let btnReset = (e) => {
    mixpanel.track("Reset was clicked.");
  };
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2>{count}</h2>
            <button
              className="btn btn-success mx-3"
              onClick={() => {
                setCount(count + 1);
                btnIncrease();
              }}
            >
              Increase
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={() => {
                setCount(count - 1);
                btnDecrease();
              }}
              disabled={count === 0}
            >
              Decrease
            </button>
            <button
              className="btn btn-secondary mx-3"
              onClick={() => {
                setCount(0);
                btnReset();
              }}
              disabled={count === 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
