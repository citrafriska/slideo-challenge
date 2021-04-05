import { ADD_NEW_SLIDE, RESET_SLIDES, CLEAR_SLIDES } from "./types";

export const addNewSlide = (data) => (dispatch) => {
  dispatch({
    type: ADD_NEW_SLIDE,
    payload: data,
  });
  console.log("SUCCESS ADDED NEW SLIDE");
};

export const reset = (data) => (dispatch) => {
  dispatch({
    type: RESET_SLIDES,
    payload: data,
  });
  console.log("SUCCESS CLEAR SLIDES");
};

export const clearSlides = (data) => (dispatch) => {
  dispatch({
    type: CLEAR_SLIDES,
    payload: data,
  });
  console.log("SUCCESS CLEAR SLIDES");
};
