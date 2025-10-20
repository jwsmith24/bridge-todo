import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/lists";

export const getLists = async () => {
  const response = await axios.get(BASE_URL);

  console.log("got lists: ", response.data);
};
