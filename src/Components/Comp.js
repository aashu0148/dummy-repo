import React, { useEffect, useState } from "react";

let forcefullyUpdateState = () => console.log("function not attached");
function Comp() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    forcefullyUpdateState = setCounter;
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

export { Comp as default, forcefullyUpdateState };
