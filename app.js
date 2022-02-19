const mainArray = ["divone","divtwo","divthree","divfour","divfive","divsix","divseven","diveight", "divnine"]

let smallerDivs = document.getElementsByClassName("smallerdivs")
let buttonn = document.getElementById("btn1")
buttonn.addEventListener("click", finalls)

let divone = document.getElementById("divone")
let divtwo = document.getElementById("divtwo")
let divthree = document.getElementById("divthree")
let divfour = document.getElementById("divfour")
let divfive = document.getElementById("divfive")
let divsix = document.getElementById("divsix")
let divseven = document.getElementById("divseven")
let diveight = document.getElementById("diveight")
let divnine = document.getElementById("divnine")



function reset(){
    divone.innerHTML = ""
    divtwo.innerHTML = ""
    divthree.innerHTML = ""
    divfour.innerHTML = ""
    divfive.innerHTML = ""
    divsix.innerHTML = ""
    divseven.innerHTML = ""
    diveight.innerHTML = ""
    divnine.innerHTML = ""
}

function getRandom(){
  randomChoosen = Math.floor(Math.random()*mainArray.length)
  b = mainArray[randomChoosen]
  
  if(b === "divone"){
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    divone.appendChild(apple)
  }
  else if(b ==="divtwo"){
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    divtwo.appendChild(apple)
  }
  else if(b ==="divthree"){
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    divthree.appendChild(apple)
}
else if(b ==="divfour"){
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    divfour.appendChild(apple)
}
else if(b ==="divfive"){
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    divfive.appendChild(apple)
}
else if(b ==="divsix"){
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    divsix.appendChild(apple)
}
else if(b ==="divseven"){
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    divseven.appendChild(apple)
}
else if(b ==="diveight"){
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    diveight.appendChild(apple)
}
else{
    let apple = document.createElement('IMG')
    apple.setAttribute("src", "images\\uppermoon1.jpg")
    apple.setAttribute("height","297px")
    apple.setAttribute("width","300px")
    apple.setAttribute("alt","alt")
    divnine.appendChild(apple)

    function clickings(){
        

    }
}

  
}

function final(){
    reset()
    getRandom() 
}
function finalls(){
   setInterval(final,1000)
}
let total = 0


divone.addEventListener("click",clickFunctionone)
divtwo.addEventListener("click",clickFunctiontwo)
divthree.addEventListener("click",clickFunctionthree)
divfour.addEventListener("click",clickFunctionfour)
divfive.addEventListener("click",clickFunctionfive)
divsix.addEventListener("click",clickFunctionsix)
divseven.addEventListener("click",clickFunctionseven)
diveight.addEventListener("click",clickFunctioneight)
divnine.addEventListener("click",clickFunctionnine)

function clickFunctionone(){
    if(divone.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}

function clickFunctiontwo(){
    if(divtwo.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}

function clickFunctionthree(){
    if(divthree.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}


function clickFunctionfour(){
    if(divfour.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}

   
function clickFunctionfive(){
    if(divfive.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}

    
function clickFunctionsix(){
    if(divsix.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}
    
function clickFunctionseven(){
    if(divseven.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}
    
function clickFunctioneight(){
    if(divfour.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}

    
function clickFunctionnine(){
    if(divnine.innerHTML !== ""){
        total +=1;
    }
    else{total -=1;}
    result.innerHTML = "total:"+total
}



let result = document.getElementById("result")
result.innerHTML = "total:"+total





