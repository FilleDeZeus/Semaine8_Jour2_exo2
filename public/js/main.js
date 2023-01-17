let titre = document.getElementsByTagName('h1')[0];
//let titre  = document.querySelector('h1');

titre.addEventListener(`dblclick`,()=>{
    titre.style.background = "red";
    titre.style.color = "white";
})

let titre1 = document.getElementsByTagName('h3')[0];
//let titre 1 = document.querySelector('h3');

titre1.onmouseover = function () { this.innerHTML= titre1.innerHTML.replace("L","");
}
// titre1.addEventListener("mouseover", function(){
//     titre1.innerHTML = titre1.innerHTML.replace("L", "");
//   });

titre1.onmouseout = function () {this.innerHTML = titre1.innerHTML.replace("","L")   
}
//   titre1.addEventListener("mouseout", function(){
//     titre1.innerHTML = titre1.innerHTML.replace("", "L");
//   }); 

let para = document.getElementsByTagName('p')[0];
// let para = document.querySelector('p');

para.addEventListener('click', () =>{
    if(para.style.background == "blue"&& para.style.color =="gold"){
        para.style.background = "white";
        para.style.color = "black";
    }else{
        para.style.background = "blue";
        para.style.color = "gold";
    }
})