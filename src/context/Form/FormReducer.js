import {
  INITIAL, NEXT, PREV, INITIAL_STEP, PREV_STEP, NEXT_STEP, FINAL_STEP,
} from '../types';

const FormReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case INITIAL:
      return {
        ...state,
        current: payload,
      };
    case NEXT:
      return {
        ...state,
        current: payload,
      };
    case PREV:
      return {
        ...state,
        current: payload,
      };
    case INITIAL_STEP:
      return {
        ...state,
        currentStep: payload,
      };
    case NEXT_STEP:
      return {
        ...state,
        currentStep: payload,
      };
    case PREV_STEP:
      return {
        ...state,
        currentStep: payload,
      };
    case FINAL_STEP:
      return {
        ...state,
        currentStep: payload,
      };
    default:
      return state;
  }
};

export default FormReducer;
