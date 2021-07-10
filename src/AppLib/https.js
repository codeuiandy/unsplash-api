import axios from "axios";
export let baseUrl = "https://api.unsplash.com";

if (process.env.REACT_APP_NODE_ENV === "development") {
  baseUrl = "http://localhost:8080";
}
const key = "a5Mje55TI0OrYzHBLJ7w0HIH44RQSKEbKlT49BFsxZ4"





export const httpGet = async url => {
  if (!navigator.onLine) {
    return  alert("Check ur internet cable")
  }
  try {
    const res = await axios.get(`${baseUrl}/${url}`, {
      headers: { Authorization: `Client-ID ${key}` },
    });
    return res.data;
  } catch (error) {
    return {er: error.response.data};
  }
};
