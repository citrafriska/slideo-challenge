import { ADD_NEW_SLIDE, RESET_SLIDES, CLEAR_SLIDES } from "./../actions/types";

const initialState = {
  slides: [
    { id: "slide-1", order: 1, text: ["First Slide", "Other Text"] },
    { id: "slide-2", order: 2, text: ["Second Slide", "Other Text"] },
    { id: "slide-3", order: 3, text: ["Third Slide", "Other Text"] },
  ],
};

const slideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_SLIDE:
      return {
        slides: [
          ...state.slides,
          {
            ...action.payload,
            id: `slide-${state.slides.length + 1}`,
            order: state.slides.length + 1,
          },
        ],
      };

    case RESET_SLIDES:
      return {
        slides: [
          { id: "slide-1", order: 1, text: ["First Slide", "Other Text"] },
          { id: "slide-2", order: 2, text: ["Second Slide", "Other Text"] },
          { id: "slide-3", order: 3, text: ["Third Slide", "Other Text"] },
        ],
      };

    case CLEAR_SLIDES:
      return {
        slides: [],
      };

    default:
      return state;
  }
};

export default slideoReducer;
