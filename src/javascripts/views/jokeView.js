const viewJoke = () => {
  $('#app').html('');
  $('#app').append('<button type="button" id="joke-btn" class="btn btn-primary">Primary</button>');
};

export default {
  viewJoke,
};
