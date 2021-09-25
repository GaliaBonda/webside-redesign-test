// Header navigation

const allNavItems: NodeListOf<Element> =
  document.querySelectorAll(".nav__link");

allNavItems.forEach((currentValue) =>
  currentValue.addEventListener("click", makeActive)
);

function makeActive(e: Event) {
  const currentElement = <HTMLElement>e.target;
  const selectorName = currentElement.className;
  const selectorNameActive = `${selectorName}--active`;
  const currentActive: HTMLElement = document.querySelector(
    `.${selectorNameActive}`
  );
  if (currentActive) {
    currentActive.classList.remove(selectorNameActive);
    currentElement.classList.add(selectorNameActive);
  }
}

//Sidebar navigation

const allSidebarNavItems: NodeListOf<Element> =
  document.querySelectorAll(".sidebar-nav__link");

allSidebarNavItems.forEach((currentValue) =>
  currentValue.addEventListener("click", makeActive)
);
