import axios from 'axios';

const http = axios.create({
  baseURL: "https://icanhazdadjoke.com"
});

let config = {
  headers: {
    'Accept': 'text/plain'
  }
}

export default {

  getRandomDadJoke() {
    return http.get('/', config);
  }
  
}