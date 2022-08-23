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
const $input = $('input[type="text"]')
const $name = $('#name')
const $position = $('#position')
const $team = $('#team')
const $adp = $('#adp')
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

$form.on("submit", handleGetData) 
    function handleGetData (event) {
        if ($input === "") return;
        event.preventDefault();
        $.ajax(rankingURL).then(function(data){
            let playerData = data.players.find(function (player) {
                return player.name === $input.val()
            })
            console.log(playerData)
            // console.log(playerData.name)
            $name.text(playerData.name)
            $position.text(playerData.position)
            $team.text(playerData.team)
            $adp.text(playerData.rank)
              })
    }
    
// testing find method

// let userPlayer = rankingURL.find(function (player){
// return player.name === $input.val()

// })

// console.log(userPlayer)

    // console.log(data[0])
    // console.log(data[0].article_excerpt)
    // console.log()

