const searchBar = document.querySelector('.search-Bar')
const teamList = document.querySelector('.team-List')

const url = 'nba-team.json'

const cities = []

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    cities.push(...json)
  })


searchBar.addEventListener('input', (event) => {
  const matches = findMatches(searchBar.value)
  console.log(matches)
  displayMatches(matches)
})

function findMatches(searchString) {
  if (searchString === '') {
    return []
  }

  const regexp = new RegExp(searchString, 'i')
  const matches = []

  for (const city of cities) {
    if (city.location.match(regexp)) {
      matches.push(city)
    }
  }
  return matches
}
function displayMatches(matches) {

  teamList.innerHTML = ''
  for (const city of matches) {
    const li = document.createElement('li')

    li.innerText = city.location + ' ' + city.name + ' ' + city.abbreviation +' '+ city.logoUrl

    teamList.appendChild(li)
  }
}
