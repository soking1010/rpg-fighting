
// 建立怪物的物件模型
var mud = function (){
  return {
    name: '',
    hp: 0,
    atk: 0,
    agi:0,
    life:true,
    weapon:''
  };
};

// 新增 lion
var lion = new mud();
lion.name = '閃電獅王';
lion.hp = 20;
lion.atk = 8;
lion.agi = 16;
lion.life = true;
lion.weapon = '閃電獅爪';

// 新增 orc
var orc = new mud();
orc.name = '半獸人';
orc.hp = 20;
orc.atk = 10;
orc.agi = 12;
orc.life = true;
orc.weapon = '釘頭錘';


// 調整值判斷
var bonus = function(x){
x = (x/2)-5
return Math.floor(x)
};

//dice，骰子語法
var dice = function (max) {
min = 1;
return Math.floor(Math.random()*(max-min+1)+min);
}

// life 判斷生物是否存活，回傳 life 的布林值
var life = function(mud){
    if (mud.hp <= 0){
    mud.life = false ;
    }else{
        mud.life = true;
    };
    return mud.life
};

//先攻權
var atkFirst = function(mudA,mudB){
  x = dice(20)+bonus(mudA.agi)
  document.write(mudA.name+"先攻丟出了"+x+"<br>");
  y = dice(20)+bonus(mudB.agi)
  document.write(mudB.name+"先攻丟出了"+y+"<br>");
  if (x == y){  
     document.write("唉呀，雙方一起動了！<br>");
     if (dice(2)>1){first = mudA}else{first=mudB};
     document.write(first.name+"驚險的搶到先機！<br>");
   } else if (x>y){
     first = mudA;
     document.write(first.name+"發出一聲怒吼！<br>");
   } else {
     first = mudB;
     document.write(first.name+"猛力一撲！<br>");
  };
  document.write(first.name+"搶到進攻先機！<br><br>");
  return first;
};
