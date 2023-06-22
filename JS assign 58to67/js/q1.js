var mainContent = document.getElementById("main-content");

var childElements = mainContent.children;
console.log(childElements);

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Ummehani";

var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Hussain";

var emailInput = document.getElementById("email");
emailInput.value = "ummehanihussain0@gmail.com";
