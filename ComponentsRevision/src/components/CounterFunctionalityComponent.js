import { useState, useEffect } from "react";
const CounterFunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const resetClick = () => {
    setCount(0);
  };
  useEffect(() => {
    console.log("Count in use effect: ", count);
  }, [count]);
  return (
    <div>
      <h1>In Functional Component</h1>
      {count > 0 ? (
        count <= 1 ? (
          <h1>
            <label for="inc1">Bless You</label>
          </h1>
        ) : (
          <h1>Button clicked {count - 1} times</h1>
        )
      ) : (
        <h1>
          <label for="inc1">Click Me please</label>
        </h1>
      )}
      {/* {count > 0 ? <h1>You Clicked {count} times</h1> : ""} */}
      <button
        type="button"
        name="btn"
        id="inc1"
        className="btn btn-success"
        onClick={increment}
      >
        Increment
      </button>
      <button
        type="button"
        name="btn"
        id="dec1"
        className="btn btn-primary"
        onClick={decrement}
      >
        Increment
      </button>
      <button
        type="button"
        name="btn"
        id="res1"
        className="btn btn-info"
        onClick={resetClick}
      >
        Increment
      </button>
    </div>
  );
};
export default CounterFunctionalComponent;
