let food = 0; 
let perClick = 1;
let weight = 2000;
let width = 120;
let height = 120;
let req =20;
let toAdd = 2;
let eric = document.getElementById("eric");
document.getElementById("weight").innerHTML = weight;
update();

function update(){
  document.getElementById("food").innerHTML = Math.round(food);
  document.getElementById("per").innerHTML = Math.round(perClick);
  document.getElementById("req").innerHTML = Math.round(req);
  document.getElementById("add").innerHTML = Math.round(toAdd);
  eric.width = width;
  eric.height = height;
  if(weight<5000)
  {
    document.getElementById("title").innerHTML = "Normal Eric (still fat)"; 
  }
  else if(weight<15000)
  {
    document.getElementById("title").innerHTML = "Fat Eric (fat)";
    document.getElementById("titleDiv").style.background = "#e670ca";
    document.getElementById("eric").src = "IMG_9899.PNG";
  }
  else if(weight<30000)
  {
    document.getElementById("title").innerHTML = "PUMPKIN KING ERIC";
    document.getElementById("titleDiv").style.background = "#f54905";
    document.getElementById("eric").src = "pumpking_king.png";
  }
  else{
    document.getElementById("title").innerHTML = "COLLOSAL GOBLIN ERIC";
    document.getElementById("titleDiv").style.background = "#178708";
    document.getElementById("eric").src = "goblin.png";
  }
}
function increment(){
  food+=perClick;
  update();
}

function check()
{
  if(food>=req)
  {
    perClick+=toAdd;
    food-=req;
    width+=10;
    height+=10;
    req*=1.1;
    toAdd+=0.2;
    eat();
    update();
  }
}
function eat()
{
  weight+=Math.floor(Math.random() * 1000) + 50;
  document.getElementById("weight").innerHTML = weight;
}
