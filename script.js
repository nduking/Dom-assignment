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



for (let i = 0; i < allPar.length; i++) {
  allPar[0].setAttribute("class", "first-paragraph");
  allPar[0].setAttribute("id", "firstParagraph");

  allPar[1].className = "second-paragraph";
  allPar[1].id = "secondParagraph";

  allPar[2].className = "third-paragraph";
  allPar[2].id = "thirdParagraph";

  allPar[3].classList.add("fourth-paragraph");
  allPar[3].id = "fourthParagraph";

  console.log(allPar[i]);
}

// LEVEL 2

for (let i = 0; i < allPar.length; i++) {
  allPar[0].style.color = "green";
  allPar[0].style.background = "blue";
  allPar[0].style.border = "solid";
  allPar[0].style.fontFamily = "Arial";
  allPar[0].style.fontSize = "46px";

  allPar[1].style.color = "red";
  allPar[1].style.background = "gray";
  allPar[1].style.border = "solid";
  allPar[1].style.borderColor = "black";
  allPar[1].style.fontFamily = "Georgia";
  allPar[1].style.fontSize = "42px";

  allPar[2].style.color = "green";
  allPar[2].style.background = "yellow";
  allPar[2].style.border = "solid";
  allPar[2].style.fontFamily = "Times New Roman";
  allPar[2].style.fontSize = "38px";

  allPar[3].style.color = "red";
  allPar[3].style.background = "green";
  allPar[3].style.border = "solid";
  allPar[3].style.borderColor = "black";
  allPar[3].style.fontFamily = "Courier New";
  allPar[3].style.fontSize = "20px";
}

// 2
for (let i = 0; i < allPara.length; i++) {
  if (i === 0 || i === 2) {
    allPara[i].style.color = "green";
  }

  if (i === 1 || i === 3) {
    allPara[i].style.color = "red";
  }
}

// 3
for (let i = 0; i < allPara.length; i++) {
  allPara[0].setAttribute("class", "first-pg");
  allPara[0].setAttribute("id", "firstP");
  allPara[0].textContent = "This is the first Paragraph";

  allPara[1].className = "second-pg";
  allPara[1].id = "secondP";
  allPara[1].textContent = "This is the second Paragraph";

  allPara[2].className = "third-pg";
  allPara[2].setAttribute("id", "thirdP");
  allPara[2].textContent = "This is the third Paragraph";

  allPara[3].classList.add("fourth-pg");
  allPara[3].id = "fourthP";
  allPara[3].textContent = "This is the fourth Paragraph";
}