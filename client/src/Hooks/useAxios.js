import axios from 'axios'

async function getData(url) {
  try {
      const response = await axios.get(`http://localhost:8000/${url}`);
      return response.data
  } catch (error) {
      console.log(error);
  }
}


async function postData(url, data) {
  try {
      const response = await axios.post(`http://localhost:8000/${url}`, data);
      return response.data;
  } catch (error) {
     return error;
  }
}

async function putData(url, data) {
  try {
      const response = await axios.put(`http://localhost:8000/${url}`, data);
      return response.data;
  } catch (error) {
     return error;
  }
}

export { getData,postData,putData}


