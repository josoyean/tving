const initialState = {
  data: null,
  // 기타 초기 상태
};
const dataReducer = (state = initialState, action) => {
  console.log(initialState);
  console.log(action);
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
