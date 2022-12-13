import axios from "axios";

// ----------------------------------------------------------------------

// process.env.REACT_PROD_API_KEY ="https://travel-back.herokuapp.com"
// const axiosInstance = axios.create({ baseURL: "http://localhost:3002" || '' });
// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_DEV_API_KEY || "",
// });
const BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:5000";
const axiosJWT = axios.create();
const axiosDEF = axios.create();

axiosDEF.interceptors.request.use(
  async (config) => {
    config.withCredentials = true;
    config.url = BASE_URL + config.url;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosDEF.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (
      error.response.data.message?.includes(
        "Either token is missing or it is revoked"
      ) ||
      error.response.data.message?.includes("Refresh token expired")
    ) {
      window.localStorage.setItem("sessionExpired", false);

      // logoutSessionExpired();

      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

axiosJWT.interceptors.request.use(
  async (config) => {
    // const token = store.getState().auth.tokens.accessToken;
    const token = localStorage.getItem("token");
    config.withCredentials = true;
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    config.url = BASE_URL + config.url;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosJWT.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 403 ||
      error.response.statusText === "Forbidden"
    ) {
      window.localStorage.setItem("sessionExpired", false);

      // logoutSessionExpired()
      return Promise.reject(error);
    }

    //   if (error.response.data.message === 'jwt expired' && error.response.status === 401 && !originalRequest._retry) {
    //       originalRequest._retry = true;

    //       const url = '/api/account/refresh-token'
    //       // const payload = { token: store.getState().auth.tokens.refreshToken }

    //       const res = await axiosDEF.post(url);
    //       // const access_token = res.data.token
    //       const access_token = 'Bearer ' + res.data.tokens.accessToken

    //       axios.defaults.headers.common['Authorization'] = access_token;
    //       originalRequest.headers.Authorization = access_token;
    //       // UPDATE USER TOKEN
    //       updateAccessToken(res.data)
    //       return axios(originalRequest);
    //   }

    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) =>
//     Promise.reject(
//       (error.response && error.response.data) || "Something went wrong"
//     )
// );

export { axiosDEF, axiosJWT };
