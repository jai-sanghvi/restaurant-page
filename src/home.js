import restaurantImage from './restaurant.jpg';

export default function loadPage() {
  const homeContent = document.createElement('div');
  homeContent.setAttribute("id", "home-content");

  let h1 = document.createElement('h1');
  h1.textContent = "Welcome to our restaurant!";

  let paragraph = document.createElement('p');
  paragraph.textContent = "At our restaurant, exceptional flavors, a welcoming atmosphere, and unparalleled dining experiences come together to create a truly unforgettable culinary journey.";

  let contentWrapper = document.createElement('div');
  contentWrapper.appendChild(h1);
  contentWrapper.appendChild(paragraph);

  let image = document.createElement('img');
  image.src = restaurantImage;

  homeContent.appendChild(image);
  homeContent.appendChild(contentWrapper);

  content.appendChild(homeContent);
}