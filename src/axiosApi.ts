import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://hw-63-fbc1c-default-rtdb.europe-west1.firebasedatabase.app/ '
});

export default axiosApi;