function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}

var  question_number = "<h4>" + number1 + "X"+ number2 +"<h4>";
var  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
var  ckeck_button = "<br><br><button class='btn btn-info' onclick='check()'> Check</button>";
var  row = question_number + input_box + check_button ;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

var question_turn = "player1";
var answer_trun = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_trun == "player1")
        {
            update_player_score == player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player_score == player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_trun = "player2";
        document.getElementById("player1_question").innerHTML = "Question Turn - " + player2_name;
    }
    else
        {
            question_turn = "player1";
            document.getElementById("player1_question").innerHTML = "Question Turn - " + player1_name;
        }
    
}
