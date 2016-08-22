$(document).ready(function(){

$('#reName').hide();
$('#gotoDice').hide();
$('#second').hide();

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
lion.hp = 999;
lion.atk = 4;
lion.agi = 12;
lion.life = true;

// 新增 玩家
var player = new mud();
player.name = '玩家名稱';
player.hp = 24;
player.atk = 500;
player.agi = 16;
player.life = true;

  $(document).on('click','#create',function(event){
    var name = $('#inputName').val();
    player.name = name;
    $('#inputName').hide();
    $('#create').hide();
    $('#reName').show();
    $('#gotoDice').show();
    $('#playerName').html( name +'？聽起來像是個短命的，哼哼。<br>這個名字會跟著你很久很久，久到會刻在你的墓碑上！<br>如果有人會幫你收屍的話，嘿嘿......<br><br>'+ name +"，你準備好的話，就繼續吧。");
 });

  $(document).on('click','#reName',function(event){
    $('#playerName').html('好吧，善變的冒險者，你可以再次修改你的獵人酒館的綽號。');
    $('#inputName').val('');
    $('#inputName').show();
    $('#create').show();
    $('#reName').hide();
    $('#gotoDice').hide();
  });

// 按下繼續，打開場景二
$('#gotoDice').on('click',function(event){
  $('#first').remove();
  $('#second').show();
  //顯示資料
  $('#mudName').html(lion.name);
  $('#playerName').html(player.name);
  $('#playerHp').html(player.hp);
  $('#mudHp').html(lion.hp);
dialog('你好，'+player.name+'。<br>很抱歉現在才告訴你，要踏入獵人酒館，你還需要經過一場試煉。<br>看到眼前這頭'+lion.name+'了嗎？殺了牠，或者被殺掉。<br><br>現在，開始吧，口桀口桀口桀......');
});

// 調整值判斷
var bonus = function(x){
x = (x/2)-5
return Math.floor(x)
};

// 劇本區，stortBoard 作劇本讀入到框框內，超出會消失
// 輸入對話的函數
var dialog = function(say){
	var output = say;
  if($('.output').length>7){
    $('.output:first').remove();
    $('#outputBoard').append('<span class="output">'+ output +'</span>');
    // $('.output:first').css("color","gray");
  }else{
    $('#outputBoard').append('<span class="output">'+ output +'</span>');  
    // $('.output:first').css("color","gray");
  };
};


//dice，骰子語法
var dice = function (max) {
min = 1;
var answer = Math.floor(Math.random()*(max-min+1)+min);
// dialog('丟出了'+answer+'點！');
return answer;
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

//放棄的先攻權
var atkFirst = function(mudA,mudB){
  x = dice(20)+bonus(mudA.agi);
  y = dice(20)+bonus(mudB.agi)+4;
  dialog(mudA.name+"露出恐懼的眼神，轉身逃跑（進行逃跑檢定，丟出了 "+x+" （AGI+"+bonus(mudA.agi)+"））。<br>"+mudB.name+"察覺了"+mudA.name+"的意圖，進行攔阻！（敏捷檢定丟出了 "+y+" （AGI+"+bonus(mudB.agi)+" / +4 優勢））。");
  if (x == y){  
     dialog("唉呀，雙方一起動了！<br>");
     if (dice(2)>1){first = mudA}else{first=mudB};
     dialog(first.name+"伸出腳絆了對方一下<br>");
   } else if (x>y){
     first = mudA;
     dialog(first.name+"發出一聲怒吼！轉身奪門而出。");
   } else {
     first = mudB;
     dialog(first.name+"猛力一撲！成功的阻止了"+mudA.name+"。<br>");

     //逃跑失敗被攻擊
     player.hp = attack(lion,player);
     $('#playerHp').html(player.hp);
     // dialog(lion.name+'發動了攻擊！');
      //判斷存活
      if ( lion.life == false){
        $('#btnleft').addClass('unuse');
        alert(lion.name+'死亡了！');
      };

      if ( player.life == false){
        alert(player.name+'死亡了！');
      };
      };
      // dialog(first.name+"搶到進攻先機！");
      return first;
      };

//先攻權按鈕
$('#btnright').on('click',function(event){
  $('.output').remove();
  atkFirst(player,lion);
});

// 攻擊判定
var attack = function(a,b){
  var x = dice(20)+ bonus(a.agi);
  var y = dice(20)+ bonus(b.agi);
  if (x < y){
    var lose = dice(a.atk);
    b.hp = b.hp - lose;
    dialog(a.name+'對'+b.name+'造成了'+lose+'點傷害！');
    dialog(b.name+'的生命值還剩下 '+b.hp);
    }else{
    dialog(b.name+'閃過了'+a.name+'的攻擊！');
    };
    return b.hp
  };

var round = 0;

// 按鈕增加對話的測試功能
$('#btnleft').on('click',function(event){
  $('.output').remove();
  round = round + 1;
  dialog('第'+ round + '回合');

  dialog(player.name+'發動了攻擊！');
  lion.hp= attack(player,lion);
  player.life = life(player);
  
  dialog('輪到'+lion.name+'發動攻擊了！');
  player.hp = attack(lion,player);
  $('#playerHp').html(player.hp);
  $('#mudHp').html(lion.hp);
  lion.life = life(lion);

  //判斷存活
  if ( lion.life == false){
    $('#btnleft').addClass('unuse');
    alert(lion.name+'死亡了！');
  };

  if ( player.life == false){
    alert(player.name+'死亡了！');
  };
});

// 第一行對話變灰色
// $('.output:first').css("color","gray");

});
