import {CommonAction} from "./actions";

export function progressReducer(state = false, action) {
  switch (action.type) {
    case CommonAction.FETCH_IN_PROGRESS: {
      return {
        isInProgress: action.payload
      };
    }
    default: {
      return state;
    }
  }
}