const getBtn = document.getElementById('getCharacterBtn');
const loading = document.getElementById('loading');
const characterInfo = document.getElementById('characterInfo');
const errorMsg = document.getElementById('errorMsg');

getBtn.addEventListener('click', () => {
  const randomId = Math.floor(Math.random() * 83) + 1;
  fetchCharacter(randomId);
});
function fetchCharacter(id) {
    loading.classList.remove('hidden');
    characterInfo.innerHTML = '';
    errorMsg.classList.add('hidden');
  
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(response => response.json())
      .then(data => {
        const character = data.result.properties;
        getHomeworld(character.homeworld).then(homeworld => {
          displayCharacter(character, homeworld);
        });
      })
      .catch(err => {
        showError('Failed to fetch character. Try again!');
      });
  }
  
  function getHomeworld(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => data.result.properties.name)
      .catch(() => 'Unknown');
  }
  
  function displayCharacter(char, homeworld) {
    loading.classList.add('hidden');
    characterInfo.innerHTML = `
      <h2>${char.name}</h2>
      <p><strong>Height:</strong> ${char.height} cm</p>
      <p><strong>Gender:</strong> ${char.gender}</p>
      <p><strong>Birth Year:</strong> ${char.birth_year}</p>
      <p><strong>Homeworld:</strong> ${homeworld}</p>
    `;
  }
  
  function showError(message) {
    loading.classList.add('hidden');
    errorMsg.classList.remove('hidden');
    errorMsg.textContent = message;
  }