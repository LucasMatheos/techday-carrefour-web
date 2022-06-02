import axios from "axios";

export const api = axios.create({
  baseURL: "https://techday-carrefour-server.up.railway.app/",
});

