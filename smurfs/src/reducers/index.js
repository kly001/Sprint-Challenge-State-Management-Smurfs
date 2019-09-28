import {FETCH_SMURFS, FETCH_SUCCESS, FETCH_FAILURE} from "../actions"

const initialState = {
  smurfs:[],
  fetchSmurfs: false,
  postSmurfs: false,
  error:"",
}

export const smurfReducer = (state = initialState,action) => {
  switch (action.type) {
    case FETCH_SMURFS:
    return {
      ...state,
      error: "",
      fetchSmurfs: true,
    };
  case FETCH_SUCCESS:
    return { 
      ...state,
      fetchSmurfs: false,
      smurfs: action.payload,
      error: "",
    };
  case FETCH_FAILURE:
    return {
     ...state,
     fetchSmurfs: false,
     error: action.payload,    
    };
    
  default:
    return state;
  }
}
