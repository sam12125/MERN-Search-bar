import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const hitApi = (param) => {
    fetch(`${url}?searchText=${param}`)
      .then((res) => res.json())
      .then((data) => {
        setError("Api failed");
        setData(data);
        setLoading(false);
      });
  };

  return [hitApi, data, loading, error];
};

export default useFetch;
