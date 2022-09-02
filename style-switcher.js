/* ==================== toggler style switcher===================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switch
window.addEventListener("scroll"),
    () => {
        if (document.querySelector(".style-switcher").classList.contains("open")) {
            document.querySelector(".style-switcher").classList.remove("open");
        }
    };

// theme color

const alternateStyles = document.querySelector(".alternate-styles");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAtribbute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}