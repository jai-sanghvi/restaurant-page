export default function createMenuPage() {
  const menuContent = document.createElement('div');
  menuContent.setAttribute("id", "menu-content");

  const p = document.createElement('p');
  p.textContent = "menu";

  menuContent.appendChild(p);

  content.appendChild(menuContent);
}