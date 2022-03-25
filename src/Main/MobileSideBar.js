export const openMenu = () => {
  const menu = document.getElementById("sideBar");
  // const current = getComputedStyle(menu)
  // const display = window.current.display
  const icon = document.getElementById("hamburgerIcon");
  menu.style.marginLeft = "0px";
  icon.style.display = "none";
};

export const closeMenu = () => {
  const menu = document.getElementById("sideBar");
  const current = getComputedStyle(menu);
  const display = current.display;
  const icon = document.getElementById("hamburgerIcon");
  if (display === "block" && window.screen.width < 600) {
    const width = window.screen.width;
    const offset = 0.7 * width;
    const value = `${-offset}px`;
    menu.style.marginLeft = value;
    setTimeout(() => {
      icon.style.display = "block";
    }, 250);
  }
};
