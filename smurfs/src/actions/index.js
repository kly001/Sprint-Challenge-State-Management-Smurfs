import axios from "axios";


export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
// export const UPDATE= "UPDATE";
// export const DELETE = "DELETE"



export const fetchSmurfs = () => dispatch => {
dispatch( {type: FETCH_SMURFS})
axios
.get("http://localhost:3333/smurfs")
  .then(response => dispatch(
      { type: FETCH_SUCCESS,  
        payload:response.data}))
  .catch(error => dispatch(
      { type: FETCH_FAILURE, 
      payload: error }));
};

export const addSmurfs = (newSmurf) => dispatch => {
  dispatch( {type:FETCH_SMURFS})
axios
.post("http://localhost:3333/smurfs", newSmurf)
  .then(response => dispatch(
      { type: FETCH_SUCCESS,  
         payload:response.data}))
  .catch(error => dispatch(
      { type: FETCH_FAILURE, 
      payload: error }));
};

// export const updateSmurf = () => dispatch => {
//   dispatch({type:UPDATE})
// }

// export const deleteSmurf = (index)=> {
//   dispatch({type:DELETE})
// }
