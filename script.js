// Level 1

const firstPar = document.querySelector("p");
console.log(firstPar);


const firstParId = document.querySelector("#first-par");
const secondParId = document.querySelector("#second-par");
const thirdParId = document.querySelector("#third-par");
console.log(firstParId, secondParId, thirdParId);


const allPar = document.querySelectorAll("p");
console.log(allPar);


for (let i = 0; i < allPar.length; i++) {
  console.log(allPar[i].textContent);
}


for (let i = 0; i < allPar.length; i++) {
  if (i === 3) {
    allPar[i].textContent = "Fourth Paragraph";
    console.log(allPar[i]);
  }
}

// 6

// for (let i = 0; i < allPara.length; i++) {
//   allPara[0].setAttribute("class", "first-paragraph");
//   allPara[0].setAttribute("id", "firstPara");

//   allPara[1].className = "second-paragraph";
//   allPara[1].id = "secondPara";

//   allPara[2].className = "third-paragraph";
//   allPara[2].setAttribute("id", "thirdPara");

//   allPara[3].classList.add("fourth-paragraph");
//   allPara[3].id = "fourthPara";

//   console.log(allPara[i]);
// }