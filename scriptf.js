let food = 0; 
let perClick = 1;
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
        update();
    }
}
