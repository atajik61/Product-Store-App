export const initialState = {
    theme: "light",
    view: "grid",
  };
  
  export function settingsReducer(state, action) {
    switch (action.type) {
      case "TOGGLE_THEME":
        return {
          ...state,
          theme: state.theme === "light" ? "dark" : "light",
        };
  
      case "SET_VIEW":
        return {
          ...state,
          view: action.payload,
        };
  
      default:
        return state;
    }
  }