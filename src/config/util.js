/* eslint-disable */
import toast from "react-hot-toast";
class util {
  setUserData = (data) => {
    window.localStorage.clear();
    window.localStorage.setItem("authorization", data.accessToken);
    window.localStorage.setItem("userName", data.user?.name);
    window.localStorage.setItem("email", data.user?.email);
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
    
}

export default new util();
