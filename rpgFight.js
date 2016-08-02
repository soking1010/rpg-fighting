
// 建立怪物的物件模型
var mud = function (){
  return {
    name: '',
    hp: 0,
    atk: 0,
    agi:0,
    life:true
  };
};

// 新增 lion
var lion = new mud();
lion.name = '閃電獅王';
lion.hp = 20;
lion.atk = 5;
lion.agi = 5;
lion.life = true;


// 新增 orc
var orc = new mud();
orc.name = '半獸人';
orc.hp = 20;
orc.atk = 3;
orc.agi = 5;
orc.life = true;

// life
var life = function(mudA){
    if (mudA.life == true){
    mudA.hp = mudA.hp - 5 ;
    document.write(mudA.name+"還活著"+"但牠遭受了攻擊！HP剩下"+mudA.hp+"點!<br>");
    return mudA.hp;
};
};

life(orc)


