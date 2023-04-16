function changeTitle(){
    document.querySelectorAll('.card-title')[0].textContent="salam";
  }
  function changeTitle2(){
    document.querySelectorAll('.card-title')[1].textContent="salam";
  }

  const test=document.querySelectorAll(".btn-primary")[0];
  


  test.addEventListener("click",changeTitle,);

//   window.addEventListener("DOMContentLoaded",run);
  function run(e){
   
    // if(e.keycode===116){
        //if
    // }
    e.preventDefault()
    console.log("f5 islemir");

  }
//   document.addEventListener("keydown",run)

 
const inputTest=document.querySelector(".form-control");

// inputTest.addEventListener("keydown",testFunction);
function testFunction(e){
    console.log(e.target.value);
}
// inputTest.addEventListener("focus",inputFunction);
function inputFunction(e){
    console.log(e.type);
}

let names=["ilkin","ali","veli"];

sessionStorage.setItem("ilkin",JSON.stringify(names));

let item=JSON.parse(sessionStorage.getItem("ilkin"))
console.log(item);
// console.log(item);



// console.log(inputTest);