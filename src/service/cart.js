import axios from "../config/axios";

export default class service {
  // static baseURL = 'user';

  static addToCart(data, query) {
    return axios.post("/cart/addItem/" + query.user_id, data, {
      params: query,
    });
  }
  static list(data, query) {
    return axios.post("/cart/get/" + query.user_id);
  }
}
