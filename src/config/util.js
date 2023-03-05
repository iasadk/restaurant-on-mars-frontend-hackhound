/* eslint-disable */
import toast from "react-hot-toast";

const promise = Promise.resolve("Success");
class util {
  setUserData = (data) => {
    window.localStorage.clear();
    window.localStorage.setItem("authorization", data.accessToken);
    window.localStorage.setItem("userName", data.user?.name);
    window.localStorage.setItem("email", data.user?.email);
    window.localStorage.setItem("id", data.user?.id);
  };
  getUserData = ($key) => {
    if ($key) {
      return JSON.parse(window.localStorage["user"])[$key];
    } else {
      return (window.localStorage["userName"]);
    }
  };
  setUserType = (data = "") => {
    window.localStorage.setItem("type", data);
  };
  userType = () => window.localStorage["type"];
  getToken = () => {
    return window.localStorage["authorization"] || "";
  };
  getUserId = () => {
    return window.localStorage["id"] || "";
  };
  getUserEmail = () => {
    return window.localStorage["email"] || "";
  };
  isLogged = () => {
    if (
      typeof window.localStorage["authorization"] !== "undefined" &&
      window.localStorage["authorization"] !== ""
    ) {
      return true;
    }
    return false;
  };

  logout = (e) => {
    if (e) e.preventDefault();
    window.localStorage.clear();
    window.location.reload();
  };

  success = (data) => toast.success(data);
  failed = (data) => toast.error(data);

  promise = ()=> (
    toast.promise(promise, {
      loading: 'Processing.',
      success: 'Payment Received.',
      error: 'Error while processing your order.',
    })
  )
    
}

export default new util();
