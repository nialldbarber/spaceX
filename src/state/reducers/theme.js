import { CHANGE_MODE } from 'state/constants/theme'

export const themeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        theme: !state.theme
      }
    default:
      return state
  }
}
