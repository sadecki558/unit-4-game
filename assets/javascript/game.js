var win_counter = 0;
var loss_counter = 0;
var counter = 0;
var crystal = $(".crystals");
var target;
var buttons;

function newGame() {
    $("#target_score").empty();
    $("#user_score").empty();
    $("#win_counter").text(win_counter);
    $("#loss_counter").text(loss_counter);
    
    counter = 0;
    target = [Math.floor(Math.random() * ((120-19)+1))+19];

    for (i = 0; i < 4; i++) {
        buttons = {
            generator: function () {
                return [Math.floor(Math.random() * ((12-1)+1) + 1)];
            }
        };

        $(".crystals").each(function () {
            $(this).attr("value", buttons.generator());
            i++;
        });
    }
    $("#target_score").html(target);
}

newGame();

$(".crystals").on("click", function () {
    var value = ($(this).attr("value"));
    value = parseInt(value);
    counter += value;
    $("#user_score").html(counter);
    if (counter == target) {
        win_counter++
        newGame();
    }
    else if (counter > target) {
        loss_counter++
        newGame();
    }
})