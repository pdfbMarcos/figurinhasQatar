import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://thawing-meadow-74678.herokuapp.com/api",
});

export default apiClient;
