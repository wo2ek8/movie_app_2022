import Axios from "axios";
import React, { useState, useEffect } from "react";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

function useFetch(url) {
  console.log(url);
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      console.log("try", url);

      const { data } = await Axios.get(url);
      console.log("get data");
      // throw Error();
      setPayload(data);
    } catch {
      setError("☹️");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
}

function App() {
  const name = useInput("");
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow");
  // const { payload, loading, error } = useFetch(
  //   "https://api.thecatapi.com/v1/images/search"
  // );
  console.log(payload, loading, error);

  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder="Whats your name" />
      {/* <input
        value={name.value}
        onChange={name.onChange}
        placeholder="Whats your name"
      /> */}
      <br />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} width="150" />}
    </div>
  );
}

export default App;
