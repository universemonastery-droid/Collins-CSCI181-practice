//Selecting the Button
const Light_Dark_Toggle = document.querySelector("#theme-toggle");
//click Event listener
Light_Dark_Toggle.addEventListener("click", () => {
  //Toggles the .dark class on the body.
  document.body.classList.toggle("dark");
  //Check to make sure the dark class is present
  if (document.body.classList.contains("dark")) {
    Light_Dark_Toggle.textContent = "🌙 Switch to Light Mode";
  } else {
    Light_Dark_Toggle.textContent = "☀️ Switch to Dark Mode";
  }
});
//Log
console.log("theme.js has been sucessfully implemented!");
