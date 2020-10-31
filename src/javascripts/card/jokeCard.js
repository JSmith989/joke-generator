const jokeBuilder = (jokeItem) => {
  const domString = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="${jokeItem}">Card title</h5>
  </div>
</div>
    `;
  return domString;
};

export default { jokeBuilder };
