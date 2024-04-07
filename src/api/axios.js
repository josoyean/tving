import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/josoyean/tving/master/public/date.json",
  params: {
    // api_key:"39a357660c1ce650b3e6dade2c90cb82",
    // language: "ko-KR"
  },
});

export default instance;
