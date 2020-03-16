import { SET_TEXT } from "../types";

const handlers = {
  [SET_TEXT]: (state, {text}) => {
    return {
      ...state,
      text
    }
  },
  DEFAULT: state => state
}

export const Reducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}