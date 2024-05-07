// DICE 1
var random_number_1 = Math.floor(Math.random() * 6) + 1;

var random_dice_image = "dice" + random_number_1 + ".png";

var random_image_source = "images/" + random_dice_image;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", random_image_source);



// DICE 2
var random_number_2 = Math.floor(Math.random() * 6) + 1;

var random_dice_image_2 = "dice" + random_number_2 + ".png";

var random_image_source_2 = "images/" + random_dice_image_2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", random_image_source_2);


//WINNER LOGIC
if(random_number_1 > random_dice_image_2){
    document.querySelector("h1").innerHTML = "Player 1 won!"
}
else if(random_number_2 > random_number_1){
    document.querySelector("h1").innerHTML = "Player 2 won!"
}
else{
    document.querySelector("h1").innerHTML = "It's a tie!"
}

