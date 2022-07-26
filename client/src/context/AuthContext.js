import { createContext, useReducer } from "react";

import AuthReducer from "./AuthReducer";

// setting the inital state
const INITIAL_STATE = {
  user: {
    _id: "62df038961e475ad7b33cc03",
    username: "shaq",
    email: "shaq@gmail.com",
    password: "$2b$10$6DRai1YWsWgqVm2tyO5cy.jqfFailDcZap08N5N7ipjxXtAEmWppm",
    profilePicture: "https://i.imgur.com/uOQl5Al.jpeg",
    coverPicture: "https://i.imgur.com/b0IHqc7.jpeg",
    followers: [],
    followings: ["62df03f061e475ad7b33cc0b"],
    isAdmin: false,
    createdAt: "1658782601583",
  },
  isFetching: false,
  error: false,
};

// creating the Auth context
export const AuthContext = createContext(INITIAL_STATE);

// setting the Auth context provider
export const AuthContextProvider = ({ children }) => {
  // creating reducer
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
