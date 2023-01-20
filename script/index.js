function calcGrade(){
    var score = [document.getElementById("sub1").value, //for getting the input from the user
                document.getElementById("sub2").value,
                document.getElementById("sub3").value,
                document.getElementById("sub4").value,
                document.getElementById("sub5").value
];
    var score_s = 0;
    for (var i = 0; i < score.length; i++) { //for calculating the total summation of all grades.
        score_s += parseInt(score[i]);
    }

    const totGrade = score_s;
    const avgGrade = totGrade / 5; //for calculating the average

    if(avgGrade >= 85 ){ //For giving a Rating based on TOTAL AVERAGE
        document.getElementById("final").innerText = "A"
    }else if(avgGrade <= 75){
        document.getElementById("final").innerText = "F"
    }else if(avgGrade >= 75){
        document.getElementById("final").innerText = "B"
    }else{
        return;
    }
    document.getElementById("avg").value = avgGrade;  

     // this is where the result of rating will store
    let rating = [];
    //will give a rating to the grade input
    for(let i = 0; i < score.length; i++){ 
        if (score[i] >= 85){
            rating.push("A");
        }else if (score[i] <= 75){
            rating.push("C");
        }else {
            rating.push("B")
        }
    }

    let finRating = document.querySelectorAll("#subject");
    // this will show the result as inner HTML //
    for (let i = 0; i < finRating.length; i++) { 
        finRating[i].innerHTML = rating[i];
    }
// this will prevent the page from auto reloading when the calculate button is pressed.
    return false;
}

// Will clear all the grades/inputs
function resetGrade(){ 

    var elems = document.getElementsByName("subject");
    for(var i = 0; i < elems.length; i++){
        elems[i].value = " ";
        elems[i].innerHTML = " ";
    }
}