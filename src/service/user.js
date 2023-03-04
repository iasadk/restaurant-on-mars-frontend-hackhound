import axios from "../config/axios";

export default class service {

    // static baseURL = 'user';

    static detailUser(id, data) {
        return axios.get('/details-user/' + id, { params: data });
    }
    static saveUser(data, query) {
        return axios.post("/user/signup", data, { params: query });
    }
    static login(data, query) {
        return axios.post("/user/signin", data, { params: query });
    }
    static deleteUser(id) {
        return axios.post('/delete-user', { ids: id });
    }
}