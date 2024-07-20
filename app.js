let userName = document.getElementById("name");
let userGender = document.getElementById("gender");
let btn = document.getElementById("btn");
let inputEmpty = document.getElementById("error-msg");
let userBox = document.getElementById("show");

btn.addEventListener("click" , (e) =>{
 e.preventDefault();
 let name = userName.value;
 let gender = userGender.value;
 let rollNum = Math.floor(Math.random() * 1000000);

 if (userName === '' || userGender === '') {
  errorMsg.textContent == 'Please fill in all fields';
  return;
 }
});
// btn.addEventListener("click" , () => {
     

//       userBox.innerHTML += `
//       <li>
//       <h1>Name</h1>
//       <p>${name}</p>
//       <h1>Gender</h1>
//       <p>${gender}</p>
//       <h1>Roll No</h1>
//       <p>${rollNum}</p>
//       <button class="edit">Edit</button>
//       <button class="delete">Delete</button>
//       </li>
//       ` ;
//       let del_btn = document.querySelectorAll(".delete");
//       del_btn.forEach((btn) => {
//         btn.addEventListener("click", () => {
//           btn.parentNode.remove();
//         });
//       });

            
//   let edit_btn = document.querySelectorAll(".edit");
//   edit_btn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         let cname= prompt("name")
//         let cemail = prompt("email")
//         let cgender = prompt("gender")
//         btn.parentNode.children[1].innerHTML = cname
//         // btn.parentNode.children[3].innerHTML= cemail
//         btn.parentNode.children[5].innerHTML= cgender
//     });
//   });
       
// });


// const loginBtn = document.getElementById('login-btn');
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');
// const errorMsg = document.getElementById('error-msg');

// loginBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	const username = usernameInput.value;
// 	const password = passwordInput.value;

// 	if (username === '' || password === '') {
// 		errorMsg.textContent = 'Please fill in all fields';
// 		return;
// 	}

// 	// TO DO: Add authentication logic here
// 	// For demonstration purposes, we'll just log the credentials to the console
// 	console.log(`Username: ${username}, Password: ${password}`);

// 	// Simulate a successful login
// 	setTimeout(() => {
// 		alert('Login successful!');
// 	}, 1000);
// });
