let food = 0; 
let perClick = 1;
let weight = 2000;
let poop;
document.getElementById("weight").innerHTML = weight;
update();

function update(){
    document.getElementById("food").innerHTML = food;
    document.getElementById("per").innerHTML = perClick;

}
function increment(){
    food+=perClick;
    update();
}
function check(toAdd,req)
{
    if(food>=req)
    {
        perClick+=toAdd;
        food-=req;
        eat();
        update();
    }
}
function eat()
{
    weight+=Math.floor(Math.random() * 1000) + 50;
    document.getElementById("weight").innerHTML = weight;
}
