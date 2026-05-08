import { createContext, useReducer, useContext } from "react";
import { settingsReducer, initialState } from "./settingsReducer";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}