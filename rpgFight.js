
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

// life
var life = function(mudA){
    if (mudA.life == true){
    mudA.hp = mudA.hp - 5 ;
    document.write(mudA.name+"還活著"+"但牠遭受了攻擊！HP剩下"+mudA.hp+"點!<br>");
    return mudA.hp;
    };
};

life(orc)

// D20 調整值判斷

var d20Bonus = function(num){
if (num >= 10){
  // 大於10，超過20的調整值視為0
  switch(x = num - 10){
    case 0:x= 0;break;
    case 1:x= 0;break;
    case 2:x= 1;break;
    case 3:x= 1;break;
    case 4:x= 2;break;
    case 5:x= 2;break;
    case 6:x= 3;break;
    case 7:x= 3;break;
    case 8:x= 4;break;
    case 9:x= 4;break;
    case 10:x= 5;break;
    default:x = 0;break;
  };
}else {
  //小於10的調整值視為零
  document.write("小於10<br>");
    x = 0;
};  
// 輸出d20調整值
return x
};

document.write("你的d20調整值是："+d20Bonus(10)+"<br>");


