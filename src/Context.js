import { createContext, useReducer } from "react";

const initialState = { darkmode: false };
export const DarkMode = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkmode: !state.darkmode };

    default:
      return state;
  }
};

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DarkMode.Provider value={{ state, dispatch }}>
      {children}
    </DarkMode.Provider>
  );
};
export default DarkModeProvider;
