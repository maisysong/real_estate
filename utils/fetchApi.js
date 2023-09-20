import axios from "axios";

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/auto-complete',
//   params: {
//     query: 'abu dhabi',
//     hitsPerPage: '25',
//     page: '0',
//     lang: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b73a2aadb9msh13e458fba0f4eb8p16526ajsn05897cb0f3f2',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// foaijeofaijofijofiajsfoaijfaosidjfosdjf

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'b73a2aadb9msh13e458fba0f4eb8p16526ajsn05897cb0f3f2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}