import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail}></input>
    </div>
  );
};

export default App;
