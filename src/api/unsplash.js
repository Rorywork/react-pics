import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9f820da704e4ae363fde1e7581474d4596918e02797afd93b9c2ffdf8bf4b489"
  }
});
