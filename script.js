// alert('script is connected')

// Finding the API endpoints that I need for this project

let rankingURL = "https://api.fantasynerds.com/v1/nfl/draft-rankings?apikey=TEST&format="

console.log(rankingURL)

let adpURL = "https://api.fantasynerds.com/v1/nfl/adp?apikey=TEST=&format="

console.log(adpURL)

let newsURL = "https://api.fantasynerds.com/v1/nfl/news?apikey=TEST"

console.log(newsURL)

let playersURL = "https://api.fantasynerds.com/v1/nfl/players?apikey=TEST&include_inactive="

console.log(playersURL)

/// Declaring Variables

const $form = $('form')
const $input = $('input')


/// Caching Using jQuery



$form.on("submit", getHandleData)

function getHandleData (event) {
    event.preventDefault()
    console.log($input.val())
}