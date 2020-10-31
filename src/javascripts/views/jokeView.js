import jokeData from '../helpers/data/jokeData';
import jokeCard from '../card/jokeCard';

const viewJoke = () => {
  $('#app').html('');
  $('#app').append(
    '<button type="button" id="joke-btn" class="btn btn-primary">Primary</button>'
  );
  $('#app').append('<div id="joke-area"></div>');

  jokeData.getJokes().then((response) => {
    console.warn(response);
    if (response.length) {
      $('#joke-area').html('');
      response.forEach((joke) => {
        $('#joke-area').append(jokeCard.jokeBuilder(joke));
      });
    }
  });
};

export default {
  viewJoke,
};
