/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";


function Button({
  text, appName, color, bgColor, children
}) {

  // const { appName } = props;
  const [count, setCount] = useState(0)
  // when state value is change, component is re-rendering
  /* let count = 0; */


  const increaseCount = () => {
    setCount(count + 1);
  };

  const buttonStyle = {
    backgroundColor: bgColor,
    color: color
  };

  /* useEffect(() => {
    console.log('use effect worked');
  }, []); */

  useEffect(() => {
    console.log('use effect is worked');
  }, [count]);
  // [] is dependency array

  console.log('component is rendered');

  return (
    <>
      <div className="button-container">
        <p>App name: {appName}</p>
        <button style={buttonStyle} onClick={increaseCount}>{children}</button>
        <p>Count Value: {count}</p>
      </div>
      <p>Test</p>
    </>
  )
}

export default Button
