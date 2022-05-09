import axios from "axios";



class AuthService {
  login(email, password) {
    return axios
      .post("/api/login", {
        email, password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    return axios.post("/api/register", {
      name,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();