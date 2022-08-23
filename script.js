// alert('script is connected')

// Finding the API endpoints that I need for this project

let rankingURL = "https://api.fantasynerds.com/v1/nfl/draft-rankings?apikey=TEST&format="

console.log(rankingURL)

let newsURL = "https://api.fantasynerds.com/v1/nfl/news?apikey=TEST"

console.log(newsURL)

/// Declaring Variables using jQuery

const $form = $('form')
const $input = $('input[type="text"]')
const $name = $('#name')
const $position = $('#position')
const $team = $('#team')
const $adp = $('#adp')
const $positionRank = $('#position-rank')

// event listener to call data when the user clicks the submit button

$form.on("submit", handleGetData) 
// this function will get our API data
    function handleGetData (event) {
       // an empty string will not be read as a searchable input
        if ($input === "") return;
        // we need to prevent default so our page doesn't refresh on submit
        event.preventDefault();

        // now, we have our ajax request to get our data 
        $.ajax(rankingURL).then(function(data){
            // working with out API's players array, we need to use the find method to allow a user to search 
            // and create a new array of data based on the player they searched
            let playerData = data.players.find(function (player) {
                // we want the user's input to be a player name, so therefore we need to find the
                // name of the player in our array
                return player.name === $input.val()
            })
          // now that we have a function creating our new array "playerData," we can change the text
          // of our HTML elements to match the new array's data
          // console.log(playerData)
            $name.text(playerData.name)
            $position.text(playerData.position)
            $team.text(playerData.team)
            $adp.text("Pick Number: " + playerData.rank)
            $positionRank.text(playerData.position + " #" + playerData.rank_position)
              })
    }

