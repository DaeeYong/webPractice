const background = [
    "iu.jpg",
    "iu02.jpg",
    "iu03.jpg",
    "iu04.jpg"
]

const randomNum = Math.floor(Math.random() * background.length);
const chosenImage = background[randomNum];

const bgImage = document.createElement("img");
bgImage.src = `/img/${chosenImage}`;
//console.log(bgImage);
document.body.appendChild(bgImage);
