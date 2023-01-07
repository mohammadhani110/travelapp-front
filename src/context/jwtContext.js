import { createContext, useEffect, useReducer, useState } from "react";
import Router, { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// utils
import { axiosDEF } from "../utils/axios";
import { isValidToken, isTokenPresent, setSession } from "../utils/jwt";
import { useDispatch } from "react-redux";
// import { setUserLogin } from "../redux/slices/user";
// import { logout as reduxLogout } from "../redux/slices/user";
// import {
//   setCurrentProjectId,
//   setCurrentTeamId,
// } from "src/redux/slices/persist";

const setUserLogin = () => {};
// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  isFetching: false,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  FETCHING: (state, action) => {
    const { isFetching } = action.payload;

    return {
      ...state,
      isFetching,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  // forgotPassword: () => Promise.resolve(),
  // resetPassword: () => Promise.resolve(),
  // verifyCode: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchRedux = useDispatch();

  // useEffect(() => {
  //   const initialize = async () => {
  //     try {
  //       const accessToken = window.localStorage.getItem("accessToken");
  //       if (accessToken && isValidToken(accessToken)) {
  //         dispatch({
  //           type: "FETCHING",
  //           payload: {
  //             isFetching: true,
  //           },
  //         });
  //         setSession(accessToken);

  //         // '/api/account/my-account'
  //         try {
  //           const response = await axiosDEF.get("/api/users/login");
  //           console.log(response);
  //           const user = response.data.data;
  //           dispatch({
  //             type: "INITIALIZE",
  //             payload: {
  //               isAuthenticated: true,
  //               user,
  //             },
  //           });
  //           dispatch({
  //             type: "FETCHING",
  //             payload: {
  //               isFetching: false,
  //             },
  //           });
  //         } catch (err) {
  //           if (err.message.text == "Session expired") {
  //             // dispatch({
  //             //   type: 'INITIALIZE',
  //             //   payload: {
  //             //     isAuthenticated: false,
  //             //     user: null,
  //             //   },
  //             // });
  //             logout();
  //             window.location.reload();
  //           }
  //         }
  //       } else {
  //         dispatch({
  //           type: "INITIALIZE",
  //           payload: {
  //             isAuthenticated: false,
  //             user: null,
  //           },
  //         });

  //         // Router.push("/auth/login")
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       dispatch({
  //         type: "INITIALIZE",
  //         payload: {
  //           isAuthenticated: false,
  //           user: null,
  //         },
  //       });
  //     }
  //   };

  //   initialize();
  // }, []);

  const login = async (userData) => {
    //  /api/account/login'
    try {
      const response = await axiosDEF.post("/api/users/login", userData);
      console.log("response", response);
      const { token } = response.data;
      const user = response.data;
      if (token.startsWith("Bearer")) token = token.split(" ")[1];
      setSession(token);
      console.log("user", user);
      dispatchRedux(setUserLogin(user));
      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
      window.location.pathname = "/tours";
    } catch (err) {
      console.error("err", err);
      dispatchRedux(setUserLogin(null));
      dispatch({
        type: "LOGIN",
        payload: {
          user: null,
          isAuthenticated: false,
        },
      });
      return { error: err.data.message };
    }
  };

  const register = async (data) => {
    let payload = {
      email: data.email,
      password: data.password,
    };

    const response = await axiosDEF.post("/api/users/register", payload);
    const user = response.data;
    const { token } = user;
    if (token.startsWith("Bearer")) token = token.split(" ")[1];
    setSession(token);
    dispatchRedux(setUserLogin(user));
    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatchRedux(setUserLogin(null));
    dispatch({ type: "LOGOUT" });
    // dispatchRedux(setCurrentTeamId(null));
    // dispatchRedux(setCurrentProjectId(null));
    // dispatchRedux(reduxLogout());
  };

  //   const forgotPassword = async (email) => {
  //     let url = `/api/user/forgot-password/${email}`;
  //     const response = await axiosDEF.get(url);
  //     return;

  //     dispatch({
  //       type: "RESET_PASSWORD",
  //       payload: {
  //         user,
  //       },
  //     });
  //   };

  //   const verifyCode = async (obj) => {
  //     let url = `/api/user/verify`;
  //     try {
  //       let response = await axiosDEF.post(url, obj);
  //       return { response: response.data, error: null };
  //     } catch (error) {
  //       return { response: null, error };
  //     }

  //     // dispatch({
  //     //   type: 'RESET_PASSWORD',
  //     //   payload: {
  //     //     user,
  //     //   },
  //     // });
  //   };

  //   const resetPassword = async (obj) => {
  //     let url = `/api/user/reset`;
  //     let response = await axiosDEF.put(url, obj);
  //     return { response: response.data, error: null };

  //     dispatch({
  //       type: "RESET_PASSWORD",
  //       payload: {
  //         user,
  //       },
  //     });
  //   };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
        register,
        // forgotPassword,
        // resetPassword,
        // verifyCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
