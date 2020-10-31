import '../styles/main.scss';
import jokeView from './views/jokeView';

const init = () => {
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  jokeView.viewJoke();
};

init();
