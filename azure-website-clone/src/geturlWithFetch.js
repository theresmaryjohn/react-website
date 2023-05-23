const geturlWithFetch= async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
  };
  export default geturlWithFetch;