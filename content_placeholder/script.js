const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const nameEl = document.getElementById("name");
const dateEl = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1610524193579-35934d02c8f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800" alt=""/>';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ratione.";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/15.jpg" alt="">';
  nameEl.innerHTML = "John Doe";
  dateEl.innerHTML = "Jan 23, 2020";

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_texts.forEach((bgt) => {
    bgt.classList.remove("animated-bg-text");
  });
}
