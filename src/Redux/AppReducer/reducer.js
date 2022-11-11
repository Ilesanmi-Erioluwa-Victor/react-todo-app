import * as types from "./actionTypes";

const initilaState = {
    tasks : [],
    tags : [],
    isLoading : false,
    isError : false
};

const reducer = ( state = initilaState, action) => {
    const {type, payload } = action;

    switch (type) {
      case types.GET_TASKS_REQUEST:
        return { ...state, isLoading: true };

      case types.GET_TASKS_SUCCESS:
        return { ...state, isLoading: false, tasks: payload };

      case types.GET_TASKS_FAILURE:
        return { ...state, isLoading: false, isError: true };

      case types.GET_TAG_REQUEST:
        return { ...state };

      case types.GET_TAG_SUCCESS:
        return { ...state, tag: payload };

      case types.GET_TAG_FAILURE:
        return { ...state };

      default:
        return state;
    }
}

export { reducer}