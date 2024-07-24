let userName = document.getElementById("name");
let userGender = document.getElementById("gender");
let userEmail = document.getElementById("email");
let btn = document.getElementById("btn");
let inputEmpty = document.getElementById("error-msg");
let userBox = document.getElementById("show");


btn.addEventListener("click" , (e) =>{
 e.preventDefault();
 let name = userName.value;
 let gender = userGender.value;
 let email = userEmail.value;
 let rollNumber = Math.floor(Math.random() * 1000000);
 if (name == '' || gender == '' || email == '') {
  inputEmpty.textContent = 'Please fill in all fields';
 }
 else{
    userBox.innerHTML += `
    <li>
    <h1>Name:</h1>
    <p class="name">${name}</p>
    <h1>Email:</h1>
    <p>${email}</p>
    <h1>Gender:</h1>
    <p>${gender}</p>
    <h1>Roll No:</h1>
    <p>${rollNumber}</p>
    <button class="edit">Edit</button>
    <button id="buttons" class="delete">Delete</button>
    </li>
    ` ;
 }
 let del_btn = document.querySelectorAll(".delete");
 del_btn.forEach((btn) => {
   btn.addEventListener("click", () => {
     btn.parentNode.remove();
   });
 });
 let edit_btn = document.querySelectorAll(".edit");
 edit_btn.forEach((btn) => {
   btn.addEventListener("click", () => {
       let cname= prompt("name")
       let cemail= prompt("email")
       let cgender = prompt("gender")
       btn.parentNode.children[1].innerHTML = cname
       btn.parentNode.children[3].innerHTML =cemail
       btn.parentNode.children[5].innerHTML=  cgender
   });
 });
});

