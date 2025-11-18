import * as types from "../types";

const inicitalStore = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function exampleReducer(state = inicitalStore, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return state;
    }
    default: {
      return state;
    }
  }
}
