// alert('script is connected')

// Finding the API endpoints that I need for this project

let rankingURL = "https://api.fantasynerds.com/v1/nfl/draft-rankings?apikey=TEST&format="

console.log(rankingURL)

let adpURL = "https://api.fantasynerds.com/v1/nfl/adp?apikey=TEST=&format="

console.log(adpURL)

let newsURL = "https://api.fantasynerds.com/v1/nfl/news?apikey=TEST"

console.log(newsURL)

/// Declaring Variables

const $form = $('form')
const $input = $('input')


/// Caching Using jQuery


// $form.on("submit", getHandleData)

// function getHandleData (event) {

//     let userInput = $input.val();

//     event.preventDefault();

//     console.log($input.val());

//     $.ajax(rankingURL).then(function(data){
//         console.log(data)
//     })
// }


// trying to call data

$.ajax(newsURL).then(function(data){
    console.log(data)
})