import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk"; // 수정된 import 구문
import dataReducer from "../reducer/dataReducer";

const store = createStore(dataReducer, applyMiddleware(thunk)); // 수정된 thunk 미들웨어를 적용합니다.

export default store;
