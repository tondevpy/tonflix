import axios from "axios";

// base 


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api