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