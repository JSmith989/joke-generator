import jokeData from '../helpers/data/jokeData';

const viewJoke = () => {
  $('#app').html('');
  $('#app').append(
    '<button type="button" id="joke-btn" class="btn btn-primary">Click for a Joke</button>'
  );
  $('#app').append('<div id="joke-area"></div>');

  $('#joke-btn').on('click', () => {
    jokeData.getJokes().then((response) => {
      $('#joke-area').html('');
      $('#joke-area').append(`
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">${response.setup}</h5>
    <a href="#" id="punchline" class="btn btn-primary">Punchline</a>
    <p class="card-text" id="punch-area"></p>
  </div>
</div>
      `);
      $('#punchline').on('click', () => {
        $('#punch-area').append(
          `<p>${response.punchline}</p>`
        );
      });
    });
  });
};

export default {
  viewJoke,
};
