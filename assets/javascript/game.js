//when the window loads
$(document).ready(function() {

    //set up variables
    var userGuess = 0;
    var randomNum = 0;
    var gems = [];
    var wins = '';
    var losses = '';

    //reset function to generate random numbers for crystals and to guess
    function reset() {
        //set value of gems to a random #
        $(".gem").each(function() {
            var gemRandom = Math.floor(Math.random() * 16)  + 1;
            $(this).attr("data-num", gemRandom);
        });
        //set the randomNum to guess
        $(".randomNum").each(function() {
            var gemRandom = Math.floor(Math.random() * 100)  + 1;
            $(".userGuess").html("<p>0</p>");
            randomNum = gemRandom;
            $(this).attr("data-num", gemRandom).html("").append("<p>" + gemRandom + "</p>");
        });

        userGuess = 0;
    }

    reset();

    //when a gem is clicked add it to userGuess
    $(".gem").click(function() {

        userGuess += parseInt($(this).attr("data-num"));

        if (userGuess > randomNum) {
            losses++
            $(".losses").html("").append("<h4>Losses:</h4><br><p>" + losses + "</p>")
            reset();
        }
        if (userGuess === randomNum) {
            wins++
            $(".wins").html("").append("<h4>Wins:</h4><br><p>" + wins + "</p>")
            reset();
        }

        $(".userGuess").html("").append("<p>" + userGuess + "</p>");
    })


});
