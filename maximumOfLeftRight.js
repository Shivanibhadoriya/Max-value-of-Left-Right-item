let matrix=[];
let rows;
let cols;
let matrixBox = document.getElementById("matrix-container");
let answerBox = document.querySelector(".answer-box");
let leftVal = document.querySelector(".left-ans span");
let rightVal = document.querySelector(".right-ans span");

function createMatrix(){

    answerBox.style.display="none";  // Here I removed answer box 

    rows = Number(document.getElementById("row").value);
    cols = Number (document.getElementById("col").value);
    
    if(rows == 0 || cols == 0 ){
        alert("Please fill out this field");
        return;
    }
    else if(rows > 30 || cols > 30){
        alert("Kindly reduce the Number of rows or column");
    }

    
    matrixBox.innerHTML="";
    matrixBox.style.display="grid";
    matrixBox.style.gridTemplateColumns=`repeat(${cols},30px)`;

    for(let j=0;j<rows;j++){
        for(let i=0;i<cols;i++){
           const box = document.createElement("input");
           box.type="number";
           box.setAttribute("id","box-"+j+"-"+i);
           matrixBox.append(box);
        }
    }
    console.log("matrix created");
    document.querySelector(".get-ans").style.display="inline-block";
}


function getAnswer(){
    let max=Number.MIN_SAFE_INTEGER;
    let maxColIn,maxRowIn;
    let data;
    for(let j=0;j<rows;j++){
        matrix[j]=[];
        for(let i=0;i<cols;i++){
           matrix[j][i] = parseInt(document.getElementById("box-"+j+"-"+i).value);
           if(Number.isNaN(matrix[j][i] )){
              matrix[j][i] = undefined;
              continue;
           }
           if(matrix[j][i] > max){
              max = matrix[j][i];
              maxRowIn = j;
              maxColIn = i;
            }
                
        }
    }
    answerBox.style.display="block";
    leftVal.innerHTML="There is no Element in left";
    rightVal.innerHTML="There is no Element in right";
    
    if(maxColIn != 0 && matrix[maxRowIn][maxColIn-1] !== undefined){
        leftVal.innerHTML = matrix[maxRowIn][maxColIn-1]+"";
    }

    if(maxColIn != cols-1 && matrix[maxRowIn][maxColIn+1] !== undefined){
        rightVal.innerHTML = matrix[maxRowIn][maxColIn+1]+"";
    }

}

