const fetchData = () => {
    return fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((responseData) => {
        localStorage.setItem('APIData', JSON.stringify(responseData));
        return responseData;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  
  const getStoredData = () => {
    const storedData = localStorage.getItem('APIData');
    if (storedData) {
      return JSON.parse(storedData);
    }
    return [];
  };
  
  export { fetchData, getStoredData };
  