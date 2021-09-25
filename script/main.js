// Header navigation
var allNavItems = document.querySelectorAll(".nav__link");
allNavItems.forEach(function (currentValue) {
    return currentValue.addEventListener("click", makeActive);
});
function makeActive(e) {
    var currentElement = e.target;
    var selectorName = currentElement.className;
    var selectorNameActive = selectorName + "--active";
    var currentActive = document.querySelector("." + selectorNameActive);
    if (currentActive) {
        currentActive.classList.remove(selectorNameActive);
        currentElement.classList.add(selectorNameActive);
    }
}
//Sidebar navigation
var allSidebarNavItems = document.querySelectorAll(".sidebar-nav__link");
allSidebarNavItems.forEach(function (currentValue) {
    return currentValue.addEventListener("click", makeActive);
});
