const url = 'https://api.rawg.io/api/games?'
const key = '9df04c9dfe4f4d2aa838df202ec859d4';

const jogosPopulares = document.getElementById("jogos");

async function getGames() {
  try {
    const response = await fetch(`${url}key=${key}`);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
}

const results = getGames();
results.then(res => {
  const games = res;
  listGames(games);
});

function listGames(games) {
  games.forEach(game => {
    console.log(jogosPopulares)
    jogosPopulares.innerHTML += `<li>${game.name}</li>`
  });
}