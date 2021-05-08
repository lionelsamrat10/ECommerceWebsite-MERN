import { API } from "../../backend";

//signup API call
export const signup = user => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//signin API call
export const signin = user => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Method for authenticate
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

//SIGNIN METHOD
export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/signout`, {
      method: "GET"
    })
      .then(response => console.log("signout success"))
      .catch(err => console.log(err));
  }
};

//The window will be opened untill the user is signed in
//jwt is authenticating the user
export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
