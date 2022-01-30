const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function listCall(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}
listCall(cats);

// Question 8
function createCats(cats) {
  let output = "";
  for (let i = 0; i < cats.length; i++) {
    if (typeof cats[i].age === "number") {
      output += `<div><h5>${cats[i].name}</h5><p>${cats[i].age}</p></div>`;
    } else {
      output += `<div><h5>${cats[i].name}</h5><p>Age unknown</p></div>`;
    }
  }
  return output;
}
let container = document.querySelector(".cat-container");
container.innerHTML += createCats(cats);
