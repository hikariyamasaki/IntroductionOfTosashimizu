$(function(){
  // btn-to-topを押したら一番上にもどる
  $('.btn-to-top').click(function(){
    $('html, body').animate({'scrollTop':0},500);
  });


  $('.element-detail').click(function(){

    if (this.id == 'perayaki' || this.id == 'tyoutaroukai' || this.id == 'simizusaba' || this.id == 'sashimi' || this.id == 'toujindaba') {
      window.location.href = "./html/element.html"+'?'+this.id;
    }else{
      window.location.href = "./html/comingsoon.html";
    }
  });





});
