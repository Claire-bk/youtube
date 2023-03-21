import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return axios.get(
      `/data/${params.relatedToVideoId ? "related" : "keyword"}.json`
    );
  }

  async videos() {
    return axios.get("/data/popular.json");
  }

  async channels() {
    return axios.get("/data/channel.json");
  }
}
