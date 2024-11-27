export default function createAboutPage() {
  const aboutContent = document.createElement('div');
  aboutContent.setAttribute("id", "about-content");

  let p = document.createElement('p');
  p.textContent = "about";

  aboutContent.appendChild(p);

  content.appendChild(aboutContent);
}