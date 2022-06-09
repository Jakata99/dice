list_of_images = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

var random_index_1 = Math.floor(Math.random() * 6);
var random_index_2 = Math.floor(Math.random() * 6);

var img_1 = "images/" + list_of_images[random_index_1];
var img_2 = "images/" + list_of_images[random_index_2];



document.querySelector(".img1").setAttribute("src", img_1);
document.querySelector(".img2").setAttribute("src", img_2);



var h1 = document.querySelector("h1");

if (random_index_1 > random_index_2) {
h1.innerHTML = "✔ Player 1 WINS";
}

else if (random_index_1 < random_index_2) {
  h1.innerHTML = "Player 2 WINS ✔";
}

else {
  h1.innerHTML = "DRAW!";

}
