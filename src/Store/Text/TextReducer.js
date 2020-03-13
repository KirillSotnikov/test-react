import { SET_TEXT } from "../types";

const handlers = {
  [SET_TEXT]: (state, {payload}) => ({
    ...state,
    text: payload
  }),
  DEFAULT: state => state
}

export const TextReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}