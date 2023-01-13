


function calcGrade(){
    const subGrade1 = parseInt(document.getElementById("sub1").value);
    const subGrade2 = parseInt(document.getElementById("sub2").value);
    const subGrade3 = parseInt(document.getElementById("sub3").value);
    const subGrade4 = parseInt(document.getElementById("sub4").value);
    const subGrade5 = parseInt(document.getElementById("sub5").value);

    const totGrade = subGrade1 + subGrade2 + subGrade3 + subGrade4 + subGrade5;
    const avgGrade = totGrade / 5;

    if(avgGrade >= 85 ){
        document.getElementById("final").innerText = "A"
    }else if(avgGrade <= 75){
        document.getElementById("final").innerText = "F"
    }else if(avgGrade >= 75){
        document.getElementById("final").innerText = "B"
    }else{
        return;
    }

    if(subGrade1 >= 85){
        document.getElementById("sub_1").innerText = "A";
    }else if(subGrade1 <= 75){
        document.getElementById("sub_1").innerText = "C";
    }else{
        document.getElementById("sub_1").innerText = "B";
    }
    if(subGrade2 >= 85){
        document.getElementById("sub_2").innerText = "A";
    }else if(subGrade2 <= 75){
        document.getElementById("sub_2").innerText = "C";
    }else{
        document.getElementById("sub_2").innerText = "B";
    }
    if(subGrade3 >= 85){
        document.getElementById("sub_3").innerText = "A";
    }else if(subGrade3 <= 75){
        document.getElementById("sub_3").innerText = "C";
    }else{
        document.getElementById("sub_3").innerText = "B";
    }
    if(subGrade4 >= 85){
        document.getElementById("sub_4").innerText = "A";
    }else if(subGrade4 <= 75){
        document.getElementById("sub_4").innerText = "C";
    }else{
        document.getElementById("sub_4").innerText = "B";
    }
    if(subGrade5 >= 85){
        document.getElementById("sub_5").innerText = "A";
    }else if(subGrade5 <= 75){
        document.getElementById("sub_5").innerText = "C";
    }else{
        document.getElementById("sub_5").innerText = "B";
    }

    document.getElementById("avg").value = avgGrade;  
}
function resetGrade(){
    document.getElementById("sub1").value="";
    document.getElementById("sub2").value="";
    document.getElementById("sub3").value="";
    document.getElementById("sub4").value="";
    document.getElementById("sub5").value="";
    document.getElementById("avg").value="";
    document.getElementById("final").innerText="";
    document.querySelector(".rate").innerText = " ";
}

