import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import { AuthProvider } from "./context/jwtContext";
// import { axiosJWT, axiosDEF } from "./utils/axios";

// axiosDEF.setup(store);
// axiosJWT.setup(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </Provider>
  </React.StrictMode>
);
