const API = "https://www.etnassoft.com/api/v1/get/?";

const getData = async (query) => {
  const apiURL = query ? `${API}${query}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error", error);
  }
};

export default getData;
