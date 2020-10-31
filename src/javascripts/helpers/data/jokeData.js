import axios from 'axios';

const getJokes = () => new Promise((resolve, reject) => {
    axios
      .get(`https://official-joke-api.appspot.com/random_joke.json`)
      .then((response) => {
          console.warn(response)
        const jokeResponse = response.data;
        const jokeFleet = [];
        if (jokeResponse) {
          Object.keys(jokeResponse).forEach((jokeId) => {
            jokeFleet.push(jokeResponse[jokeId]);
          });
        }
        resolve(jokeFleet);
      })
      .catch((error) => reject(error));
  });

export default { getJokes };
