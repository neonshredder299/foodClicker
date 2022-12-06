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
        width+=req/50;
        height+=req/50;
        req*=1.1;
        toAdd+=0.1;
        eat();
        update();
    }
}
function eat()
{
    weight+=Math.floor(Math.random() * 1000) + 50;
    document.getElementById("weight").innerHTML = weight;
}