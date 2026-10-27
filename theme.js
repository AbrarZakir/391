var themeButton = document.getElementById("theme-toggle");

themeButton.onclick = function () {
    var lightMode = document.body.classList.toggle("light-mode");
    themeButton.textContent = lightMode ? "Switch to Dark Mode" : "Switch to Light Mode";
};
