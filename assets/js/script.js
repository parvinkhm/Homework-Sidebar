"use strict";

// let addBtn = document.querySelector(".text button");
// let inputText = document.querySelector(".text input");
// let ul = document.querySelector(".text-area");
// let span = document.querySelector(".text .error-message");


// addBtn.addEventListener("click", function () {
//     if (inputText.value.trim() == "") {
//         span.classList.remove("d-none");
//         //alert("Cant be empty");
//         return;
//     }

//     span.classList.add("d-none");

//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     li.innerText = inputText.value;

//     ul.append(li);
//     inputText.value = "";

//     li.onclick = function () {
//         this.remove();
//     }


//     let i = document.createElement("i");
//     i.className = "fa-solid fa-x";
//     li.append(i);

//     ul.append(li);
//     inputText.value = "";

//     i.onclick = function(){
//         li.remove()
//     }

// })


// // console.log(document.querySelector("h1").parentNode.parentNode.parentNode);

// // console.log(document.querySelector("h1").nextElementSibling);

// // console.log(document.querySelector("h1").parentNode.previousElementSibling.children [0].innerText);

// console.log(document.querySelector("h1").closest(".container"));

// let sidebar = document.querySelector(".sidebar");

// let openIcon = document.querySelector(".sidebar .open-icon");

// let closeIcon = document.querySelector(".sidebar .close-icon");

// openIcon.addEventListener("click", function () {
//     sidebar.classList.remove("move-sidebar");
//     this.previousElementSibling.classList.remove("d-none");
//     this.classList.add("d-none")
// })


// closeIcon.addEventListener("click", function () {
//     sidebar.classList.add("move-sidebar");
//     this.nextElementSibling.classList.remove("d-none");
//     this.classList.add("d-none")
// })

let sidebar2 = document.querySelector(".sidebar2");

let openIcon = document.querySelector(".sidebar2 .open-icon");

let closeIcon = document.querySelector(".sidebar2 .close-icon");

openIcon.addEventListener("click", function () {
    sidebar2.classList.remove("move-sidebar2");
    this.previousElementSibling.classList.remove("d-none");
    this.classList.add("d-none")
})


closeIcon.addEventListener("click", function () {
    sidebar2.classList.add("move-sidebar2");
    this.nextElementSibling.classList.remove("d-none");
    this.classList.add("d-none")
})







// let addBtn = document.querySelector(".text button");
// let inputText = document.querySelector(".text input");
// let ul = document.querySelector(".text-area");
// let span = document.querySelector(".text .error-message");



// addBtn.addEventListener("click", function () {
//     if (inputText.value.trim() == "") {
//         span.classList.remove("d-none");
//         //alert("Cant be empty");
//         return;
//     }

//     span.classList.add("d-none");

//     ul.innerHTML = "";

//     for (let i = 1; i <= inputText.value; i++) {
//         let li = document.createElement("li");
//         li.className = "list-group-item";
//         li.innerText = i;
//         ul.append(li);
//     }


//     inputText.value = "";

//     li.onclick = function () {
//         this.remove();
//     }


//     let i = document.createElement("i");
//     i.className = "fa-solid fa-x";
//     li.append(i);

//     ul.append(li);
//     inputText.value = "";

//     i.onclick = function () {
//         li.remove()
//     }

// })