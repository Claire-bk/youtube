import axios from "axios";
export async function search(keyword) {
  return axios
    .get(`/data/${keyword ? "keyword" : "popular"}.json`)
    .then((res) => res.data.items);
}
