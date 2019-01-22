import {DataPageAction} from "./actions";

export function dataPageStatsReducer(state = {}, action) {
  switch (action.type) {
    case DataPageAction.LOAD_STATS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function dataPageUsageRankingsReducer(state = [], action) {
  switch (action.type) {
    case DataPageAction.LOAD_DATA_USAGE_RANKINGS: {
      return action.payload.dataBrowseRankings;
    }
    default: {
      return state;
    }
  }
}

export function dataPageUsageRecordReducer(state = [], action) {
  switch (action.type) {
    case DataPageAction.LOAD_DATA_USAGE_RECORD: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function dataPageUsageTrendReducer(state = [], action) {
  switch (action.type) {
    case DataPageAction.LOAD_DATA_USAGE_TREND: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function dataPageUsageRatioReducer(state = [], action) {
  switch (action.type) {
    case DataPageAction.LOAD_DATA_USAGE_RATIO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function dataPageSearchRatioReducer(state = [], action) {
  switch (action.type) {
    case DataPageAction.LOAD_DATA_SEARCH_RATIO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}