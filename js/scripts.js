const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const cityInput = document.querySelector("#city");
const createButton = document.querySelector("#create");
const usersSection = document.querySelector("#users-section");

let users = [];

const deleteUser = (indexOfUser) => {
   users = users.filter((el, i) => i!== indexOfUser);
   renderUsers();
}

function renderUsers () {

   usersSection.innerHTML = "";

   const usersContent = users.map((user) => `<div class="user-card">
      <span>name:</span><span> ${user.name}</span>
      <span>age:</span><span> ${user.age}</span>
      <span>city:</span><span> ${user.city}</span>
      <button class="deleteButton">X</button>
   </div>`);
   
   usersContent.forEach((userLayout) => {
      usersSection.innerHTML += userLayout;
   }); 

   const deleteButtons = [...document.querySelectorAll(".deleteButton")];
   deleteButtons.forEach((button, i) => {
      button.onclick = () => deleteUser(i);
   })
}

   createButton.onclick = () => {
      const name = nameInput.value.at(0).toUpperCase() + nameInput.value.slice(1);
      const age = +ageInput.value;
      const city = cityInput.value.at(0).toUpperCase() + cityInput.value.slice(1).toLowerCase();
     
      const user = {name, age, city};
      users.push(user);

      nameInput.value = "";
      ageInput.value = "";
      cityInput.value = "";

      renderUsers();
   
}
