let cat_names_array = [
  "Abby",
  "Angel",
  "Annie",
  "Baby",
  "Bailey",
  "Bandit",
  "Bear",
  "Bella",
  "Bob",
  "Boo",
  "Boots",
  "Bubba",
  "Buddy",
  "Buster",
  "Cali",
  "Callie",
  "Casper",
  "Charlie",
  "Chester",
  "Chloe",
  "Cleo",
  "Coco",
  "Cookie",
  "Cuddles",
  "Daisy",
  "Dusty",
  "Felix",
  "Fluffy",
  "Garfield",
  "George",
  "Ginger",
  "Gizmo",
  "Gracie",
  "Harley",
  "Jack",
  "Jasmine",
  "Jasper",
  "Kiki",
  "Kitty",
  "Leo",
  "Lilly",
  "Lily",
  "Loki",
  "Lola",
  "Lucky",
  "Lucy",
  "Luna",
  "Maggie",
  "Max",
  "Mia",
  "Midnight",
  "Milo",
  "Mimi",
  "Miss kitty",
  "Missy",
  "Misty",
  "Mittens",
  "Molly",
  "Muffin",
  "Nala",
  "Oliver",
  "Oreo",
  "Oscar",
  "Patches",
  "Peanut",
  "Pepper",
  "Precious",
  "Princess",
  "Pumpkin",
  "Rascal",
  "Rocky",
  "Sadie",
  "Salem",
  "Sam",
  "Samantha",
  "Sammy",
  "Sasha",
  "Sassy",
  "Scooter",
  "Shadow",
  "Sheba",
  "Simba",
  "Simon",
  "Smokey",
  "Snickers",
  "Snowball",
  "Snuggles",
  "Socks",
  "Sophie",
  "Spooky",
  "Sugar",
  "Tiger",
  "Tigger",
  "Tinkerbell",
  "Toby",
  "Trouble",
  "Whiskers",
  "Willow",
  "Zoe",
  "Zoey",
];

let cat_name_button = document.getElementById("catname");
let intro_h1 = document.getElementById("Header");
let d_body = document.getElementById("body");
let name_input = document.getElementById("cat-name-input");
let add_button = document.getElementById("input-button");

cat_name_button.onclick = () => {
  let rand_index = Math.floor(Math.random() * cat_names_array.length);
  let new_name = cat_names_array[rand_index];
  console.log(new_name);

  d_body.innerHTML = new_name;
};

add_button.onclick = () => {
  let name_val = name_input.value;
  console.log(name_val);
  cat_names_array.push(name_val);
  console.log(cat_names_array);
  name_input.value = "";
};
