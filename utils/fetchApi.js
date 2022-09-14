import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
      headers: {
          'X-RapidAPI-Key': 'a46bd9204cmsh87c4c26602d8c61p128f30jsnbb7048a1f579',
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });
  return data
}
