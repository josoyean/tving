import axios from "axios";

const instance = axios.create({
  baseURL: "https://a74d08d7-5937-42d1-8954-9a6bbcc79341.mock.pstmn.io",
  params: {
    // api_key:"39a357660c1ce650b3e6dade2c90cb82",
    // language: "ko-KR"
  },
});

export default instance;
