// task 1 eventlistener


const display = document.getElementById('display');
const button = document.getElementById("button1");
var text = "";


function updateDisplay() {
    const grade = document.getElementById("grade");
    const value = grade.value;
    console.log(value);
    if(value > 5){
        text = "Pass";
    }else{
        text = "Failled";
    }
    console.log(text);
    display.value = text;
  }

button.addEventListener('click', updateDisplay);

//2
const button2 = document.getElementById("button2");

function updateDisplay2(){
    const num = document.getElementById("num");
    const select = document.getElementById("select");
    const  output = document.getElementById("out2");
    const value1 = num.value;
    const value2 = select.value;
    console.log(value2);
    output.innerHTML="";
    for(var i=1;i<=value2;i++){
        output.innerHTML += `${i} * ${value1} = ${i * value1} <br>`;
    }
}
button2.addEventListener('click', updateDisplay2);


const button3 = document.getElementById("button3");
const display2 = document.getElementById('display2');
function updateDisplay3(){
    const text = document.getElementById("text").value;
    var t2 = "";
    for(var i =text.length-1;i>=0 ;i--){
        t2 += text[i];
    console.log(t2);
    }
    console.log(t2);
    display2.value = t2;
}
 button3.addEventListener('click', updateDisplay3);


 
