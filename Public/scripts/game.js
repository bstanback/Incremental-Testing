// everything is broken and the money is equal to the worker cost



var money = 375;
var fixed_money =0;
var money_per_second = 0;

var workers = 0;
var managers = 0;
var admins = 0;
var ceos = 0;

var worker_money_gain = 5;
var fix_worker_money_gain;

var worker_efficiency = .05;

var worker_inflation = 1.18;

var js_worker_cost = 50;
var js_manager_cost = 1000;
var js_admin_cost = 25000;
var js_ceo_cost = 150000;

function prettyNumbers(number){ //stores true money value, outputs pretty value
  if (number % 1 !== 0){
    return ~~number; //bitwise operator, removes decimals
    //return number;
    //return (Math.floor(number));
  } else{
    return number;
  }
}

function workerClick() {
  if (money >= js_worker_cost){ // do you have enough money to buy?
    money -= js_worker_cost;
    workers ++;
    fix_worker_money_gain = efficiency(worker_money_gain,worker_efficiency);
    js_worker_cost = inflation(js_worker_cost,worker_inflation);
    money_per_second += fix_worker_money_gain;
    current_workers.innerHTML=workers;
  }
  else {
    cantBuyToast();
}
}

function cantBuyToast(){ //if you cannot afford something toast pops up
  var x = document.getElementById("insufficient_funds");
  x.className = "show";
  setTimeout(function(){ // removes toast after 3 seconds
    x.className = x.className.replace("show","");
  },3000);
}

// ADD A FUNCTION TO UPDATE EFFICIENCY AND PRICES EVERY SECOND/2 SECONDS
function efficiency(x,y){
  console.log("this is the efficiency"+x*y);
  console.log("this is worker gain"+worker_money_gain);
  return(x*y); // money gain times efficiency
}

function inflation(x,y){
  z = (x*y); // price times inflation rate
  return(prettyNumbers(z));
}

var game_tick = 60; // 1000ms meaning gamme updates every second
var lastUpdate = Date.now();
var current_time; // placeholder var for the date.now() time
var deltaTime; // time difference between updates

function game_loop(){ //not entirely my code
  current_time = Date.now();
  deltaTime = ((current_time - lastUpdate)/1000); // time from last lastUpdate
  lastUpdate = current_time; // reset lastUpdate


  addMoney(); // Add money
  setTimeout(game_loop,1000/game_tick);
}
function side_loop(){
  update_stuff();
  setTimeout(side_loop,250);
}

function update_stuff(){
  document.getElementById("gamebar-money").innerHTML = fixed_money;
  document.getElementById("gamebar-mps").innerHTML = money_per_second;
  document.getElementById('worker_cost').innerHTML = js_worker_cost;
  document.getElementById('gamebar-prod').innerHTML = (worker_efficiency*100);
  console.log("money: "+money)
}

function addMoney(){
  money += (money_per_second * deltaTime);
  fixed_money = prettyNumbers(money);
  //document.getElementById("gamebar-money").innerHTML=fixed_money;
  //document.getElementById("gamebar-mps").innerHTML=money_per_second;
}
game_loop();
side_loop();

var canvas = document.getElementById('canvas1');
canvas.width = 500;
canvas.height = 400;
var ctx = canvas.getContext('2d'); //store all of the canvas context in 'ctx'

ctx.arc(100,100,30,0,Math.PI*2,false);
ctx.strokeStyle = 'blue';
ctx.stroke();
