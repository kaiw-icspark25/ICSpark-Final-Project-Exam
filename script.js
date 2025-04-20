var money=0, //total cookies
cps=0, //cookies per second
clicker=1, //money per click 
cursorBought=0, 
cursorPrice=0, 
grannyBought=0, 
grannyPrice=0, 
farmBought=0, 
farmPrice=0, 
bakeryBought=0, 
bakeryPrice=0, 
mineBought=0, 
minePrice=0, 
multiply=1.1;//amount multiplying 
// //adds money per click 
const element =document.getElementById("makeCookie");
element.addEventListener('click',function() {money+=clicker});
//manufacturer makes prices and values 
function manufacturer(){ 
    document.getElementById("cookies").innerHTML="Cookies: "+Math.floor(money);
    money+=cps/10
    document.getElementById("cps").innerHTML="CPS: "+ cps.toFixed(1);
    cursorPrice=Math.floor((10*Math.pow(multiply, cursorBought)));
    grannyPrice=Math.floor((15*Math.pow(multiply, grannyBought)));
    farmPrice=Math.floor((25*Math.pow(multiply, farmBought)));
    bakeryPrice=Math.floor((35*Math.pow(multiply, bakeryBought)));
    minePrice=Math.floor((100*Math.pow(multiply, mineBought)));
    document.getElementById("cursor").innerHTML="Cursor "+"price:"+ cursorPrice + " Speed:0.1 CPS "+ "Owned: " + cursorBought;
    document.getElementById("granny").innerHTML="Granny "+"price:"+ grannyPrice + " Speed:1 CPS "+ "Owned: " + grannyBought;
    document.getElementById("farm").innerHTML="Farm "+"price:"+ farmPrice + " Speed:25 CPS "+ "Owned: " + farmBought;
    document.getElementById("bakery").innerHTML="Bakery "+"price:"+ bakeryPrice + " Speed:35 CPS "+ "Owned: " + bakeryBought;
    document.getElementById("mine").innerHTML="Mine "+"price:"+ minePrice + " Speed:100 CPS "+ "Owned: " + mineBought;
    setTimeout(manufacturer,100);
}
manufacturer();
function cursor(){
    if (money>=cursorPrice){
        money=money-cursorPrice;
        cps+=0.1;
        cursorBought=cursorBought+1;
    }
 }
 function granny(){
    if (money>=grannyPrice){
        money=money-grannyPrice;
        cps+=1;
        grannyBought=grannyBought+1;
    }
 }
 function farm(){
    if (money>=farmPrice){
        money=money-farmPrice;
        cps+=25;
        farmBought=farmBought+1;
    }
 }
 function bakery(){
    if (money>=bakeryPrice){
        money=money-bakeryPrice;
        cps+=35;
        bakeryBought=bakeryBought+1;
    }
 }
 function mine(){
    if(money>=minePrice){
        money=money-mineBought
        cps+=100
        mineBought=mineBought+1
    }

 }