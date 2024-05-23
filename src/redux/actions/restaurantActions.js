import api from "../../utils/api";
import Actions from "../actionTypes";

//! Asenkron Thunk Akisyonu


//? Nasıl Tanımlarız ?

const thunkFonksiyonu = () => {
  return (dispatch) => {

  };
};

//? İlk Örnek

export const getRestaurants = () => (dispatch) => {
  dispatch({ type: Actions.REST_LOADING });

  api
    .get("/restaurants")
    .then((res) => dispatch({ type: Actions.REST_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: Actions.REST_ERROR, payload: err.message })
    );
};
