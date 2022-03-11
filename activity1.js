var score=0;
function update_score(){
    score = score+1;
    document.getElementById("score").innerHTML="Score : "+score;
}
function save_score(){
    localStorage.setItem("um", score);
}
