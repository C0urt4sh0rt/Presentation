const htmlButton = document.getElementById("html");
const cssButton = document.getElementById("css");
const jsButton = document.getElementById("js");
const allProjectsButtons = document.querySelectorAll(".individual");

const highlightHtml = function (event) {
  for (let i = 0; i < allProjectsButtons.length; i++) {
    allProjectsButtons[i].classList.toggle("highlight");
  }
};

htmlButton.addEventListener("click", highlightHtml);
