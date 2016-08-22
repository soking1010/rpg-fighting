$('#reName').hide();
$('#gotoDice').hide();

$(document).ready(function(){

  $(document).on('click','#create',function(event){
    var name = $('#inputName').val();
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
  
});