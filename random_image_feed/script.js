const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 4;

const getRandomNumber = () => {
  return (
    Math.floor(Math.random() * 10) +
    (300 + Math.floor(Math.random() * (99 - 1)) + 1)
  );
};

const getRandomSize = () => {
  return `${getRandomNumber()}x${getRandomNumber()}`;
};

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}
