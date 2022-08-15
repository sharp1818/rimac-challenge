/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import axios from 'axios';

const apiUrl = process.env.API_URL ?? 'https://jsonplaceholder.typicode.com';

export const submitForm = async ({ inputDni, inputNumPlate, inputPhone }) => {
  const carInfo = JSON.stringify({ inputDni, inputNumPlate, inputPhone });
  const options = {
    method: 'POST',
    url: `${apiUrl}/posts`,
    data: carInfo
  };
  return axios.request(options);
};
