var money = 150;
var money_per_second= 0;

var firms = {
  "shed":150,
  "Neighbor_house":1550,
  "small_office":8500
}

function prettyNumbers(number){ //stores true money value, outputs pretty value
  if (number % 1 !== 0){
    return ~~number; //bitwise operator, removes decimals
    //return number;
    //return (Math.floor(number));
  } else{
    return number;
  }
}

function update_stuff(){
  document.getElementById("span_money").innerHTML=money;
  document.getElementById("span_mps").innerHTML=money_per_second;
}

function game_loop(){
update_stuff();
setTimeout(side_loop,250);
}

game_loop();
