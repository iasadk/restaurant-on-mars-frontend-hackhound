/* eslint-disable */

class util {
    setUserData = (data) => {
        window.localStorage.clear();
        window.localStorage.setItem('authorization', data.accessToken);
        window.localStorage.setItem('type', data.type);
    }
    getUserData = ($key) => {
        if ($key) {
            return JSON.parse(window.localStorage['user'])[$key];
        } else {
            return JSON.parse(window.localStorage['user']);
        }
    }
    setUserType = (data = '') => {
        window.localStorage.setItem('type', data);
    }
    userType = () => window.localStorage['type']
    getToken = () => {
        return window.localStorage['authorization'] || '';
    }
    isLogged = () => {
        if (typeof window.localStorage['authorization'] !== "undefined" && window.localStorage['authorization'] !== '') {
            return true;
        }
        return false;
    }

    logout = (e) => {
        if (e) e.preventDefault();
        window.localStorage.clear();
        window.location.reload();
    }
    
}

export default new util();