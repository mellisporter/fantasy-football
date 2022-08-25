// alert('script is connected')

// Finding the API endpoints that I need for this project

let rankingURL = "https://api.fantasynerds.com/v1/nfl/draft-rankings?apikey=TEST&format="

console.log(rankingURL)

let newsURL = "https://api.fantasynerds.com/v1/nfl/news?apikey=TEST"

console.log(newsURL)

let statsURL = "https://api.fantasynerds.com/v1/nfl/ros?apikey=TEST"

/// Declaring Variables using jQuery

const $form = $('form')
const $input = $('input[type="text"]')
const $name = $('#name')
const $position = $('#position')
const $team = $('#team')
const $adp = $('#adp')
const $positionRank = $('#position-rank')

// variables for stats specifically

const $stat1 = $(".stat1")
const $stat2 = $(".stat2")
const $stat3 = $(".stat3")
const $stat4 = $(".stat4")
const $stat5 = $(".stat5")
const $stat6 = $(".stat6")
const $stat7 = $(".stat7")
const $stat8 = $(".stat8")


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
          console.log(playerData)
            $name.text(playerData.name)
            $position.text(playerData.position)
            $team.text(playerData.team)
            $adp.text("Pick Number: " + playerData.rank)
            $positionRank.text(playerData.position + " #" + playerData.rank_position)
            getStats()

              })
    }

    // creating a function to let stats appear on the screen
    // i am using a similar method to the handleGetData function, but since there are
    // different positions, I will be needing JS to check which position the player is 
    // based on the user input

        function getStats() {
        $.ajax(statsURL).then(function (data){
            let qbStats = data.projections.QB.find(function (player){
                return player.name === $input.val()
            })
            let rbStats = data.projections.RB.find(function (player){
                return player.name === $input.val()
            })
            let wrStats = data.projections.WR.find(function (player){
                return player.name === $input.val()
            })
            let teStats = data.projections.TE.find(function (player){
                return player.name === $input.val()
            })
            

            if (qbStats) {
                $stat1.text(`Passing Completions: ${qbStats.passing_completions}`)
                $stat2.text(`Passing Attempts: ${qbStats.passing_attempts}`)
                $stat3.text(`Passing Yards: ${qbStats.passing_yards}`)
                $stat4.text(`Passing Touchdowns: ${qbStats.passing_touchdowns}`)
                $stat5.text(`Interceptions: ${qbStats.passing_interceptions}`)
                $stat6.text(`Rushing Yards: ${qbStats.rushing_yards}`)
                $stat7.text(`Rushing Touchdowns: ${qbStats.rushing_touchdowns}`)
                $stat8.text(`Fantasy Points: ${qbStats.proj_pts}`)

                // console.log('this player is a qb')
            } else if (rbStats) {
                console.log(rbStats)
                $stat1.text(`Rushing Attempts: ${rbStats.rushing_attempts}`)
                $stat2.text(`Rushing Yards: ${rbStats.rushing_yards}`)
                $stat3.text(`Rushing Touchdowns: ${rbStats.rushing_touchdowns}`)
                $stat4.text(`Fumbles: ${rbStats.fumbles}`)
                $stat5.text(`Receptions: ${rbStats.receptions}`)
                $stat6.text(`Receiving Yards: ${rbStats.receiving_yards}`)
                $stat7.text(`Receiving Touchdowns: ${rbStats.receiving_touchdowns}`)
                $stat8.text(`Fantasy Points: ${rbStats.proj_pts}`)

                // console.log('this player is an rb')
            } else if (teStats) {
                console.log(teStats)
                console.log('this player is a te')
                $stat1.text(`Receptions: ${teStats.receptions}`)
                $stat2.text(`Receiving Yards: ${teStats.receiving_yards}`)
                $stat3.text(`Receiving Touchdowns: ${teStats.receiving_touchdowns}`)
                $stat4.text(`Fumbles: ${teStats.fumbles}`)
                $stat5.text(`Targets: ${teStats.targets}`)
                $stat6.text(`Rushing Yards: ${teStats.rushing_yards}`)
                $stat7.text(`Rushing Touchdowns: ${teStats.rushing_touchdowns}`)
                $stat8.text(`Fantasy Points: ${teStats.proj_pts}`)
            } else {
                console.log(wrStats)
                console.log('this player is a WR')
                $stat1.text(`Receptions: ${wrStats.receptions}`)
                $stat2.text(`Receiving Yards: ${wrStats.receiving_yards}`)
                $stat3.text(`Receiving Touchdowns: ${wrStats.receiving_touchdowns}`)
                $stat4.text(`Fumbles: ${wrStats.fumbles}`)
                $stat5.text(`Targets: ${wrStats.targets}`)
                $stat6.text(`Rushing Yards: ${wrStats.rushing_yards}`)
                $stat7.text(`Rushing Touchdowns: ${wrStats.rushing_touchdowns}`)
                $stat8.text(`Fantasy Points: ${wrStats.proj_pts}`)
            }
        })
        }

        // this is a test