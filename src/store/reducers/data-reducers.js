import {DataAction} from "./actions";

export function dataUsageRecordReducer(state = [], action) {
  switch (action.type) {
    case DataAction.LOAD_DATA_USAGE_RECORD: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}