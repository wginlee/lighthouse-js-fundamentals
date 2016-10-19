var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var w = 0;
while ( w < ingredients.length ){
  console.log(ingredients[w]);
  w++;
}

// Write a for loop that prints out the contents of ingredients:

for (var i=0; i <ingredients.length ; i++){
    console.log(ingredients[i]);

}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var r = ingredients.length - 1; r >= 0 ; r--){
    console.log(ingredients[r]);

}