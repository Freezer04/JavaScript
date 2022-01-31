

// const numb1 = prompt('insert  First number :');
// const oprt = prompt('insert an operation :');
// const numb2 = prompt('insert Second number :');

let buttons   = document.querySelectorAll('button');
let screnDown = document.querySelector('.down');
let screenUp  = document.querySelector('.up');
let display   = "";
let number    = "";
let number1   = "";
let number2   = "";
let opert     = "";
let result    = "";

for(let b of buttons){
  b.addEventListener("click",clicks);

}

function clicks(){
  let button = this.innerText;
  if(parseInt(button) >=0 || button === "." ){
    checkDot();
    display += button;
    screnDown.innerText = display;
    number = display;

  }else if(button == "+" || button == "−"|| button == "×"|| button == "÷"){
    screnDown.innerText = "";
    display = "";
    if(number1 == ""){
      number1 = number;
    }else{
      number1 = result;
    }
    opert = button;
    number = "";
    display += button;
    screnDown.innerText = display;
    display = "";
    
  }else if( button == "="){
    screnDown.innerText = "";
    number2 = number; 
    result = operation(opert,number1,number2);
    screnDown.innerText = result;
  }else if (button == "Clear"){
    clear();
  }else if(button == "Delete"){
    backspace();
  }
}












// const eqaulButton = document.querySelector('.equals');
// const clearButton = document.querySelector('.clear');
// const deleteButton = document.querySelectorAll('.delete');

function clear(){
display = "";
number = "";
number1 = "";
opert = "";
number2= "";
result = " ";
screnDown.innerText = 0;
}



 

function add (a,b){
 return a + b;
   
} 
function sub (a,b){
  return a - b;
}

function multi (a,b){
  return a * b;
}
function divid (a,b){
  return a / b;
}

function backspace() {
  screnDown.textContent = screnDown.textContent.slice(0, -1);
   checkDot()
}


function checkDot() {
  if (screnDown.textContent.includes('.')) {
    document.querySelector('#dot').disabled = true;
  } else {
    document.querySelector('#dot').disabled = false;
  }
}

function operation(opertion,a,b){
  let x = parseFloat(a);
  let y = parseFloat(b); 
  switch(opertion){
    case "+" :
    
    return add(x,y);
    case "−" :
      return sub(x,y);
    case "×" : 
      return  multi(x,y);
    case "÷" :
      return divid(x,y);
  }
 
}





  



