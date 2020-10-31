import jokeView from '../views/jokeView';

const viewHelper = (id) => {
  switch (id) {
    case 'main':
      return jokeView.viewJoke();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', '#joke-btn', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
