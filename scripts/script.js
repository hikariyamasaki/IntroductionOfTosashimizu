$(function(){
  // btn-to-topを押したら一番上にもどる
  $('.btn-to-top').click(function(){
    $('html, body').animate({'scrollTop':0},500);
  });

// topのFoodsのカードを押すと、Foodsのセクションにスクロール
  $('.top-image-food').click(function(){

    $('html, body').animate({'scrollTop':550},500);
    });

// topのNatureのカードを押すと、Natureのセクションにスクロール
  $('.top-image-nature').click(function(){
    $('html, body').animate({'scrollTop':1300},600);
    });

// topのMapのカードを押すと、Accessのセクションにスクロール
  $('.top-image-map').click(function(){
    $('html, body').animate({'scrollTop':2000},700);
    });


  $('.element-detail').click(function(){

    if (this.id == 'perayaki' || this.id == 'tyoutaroukai') {
      window.location.href = "./html/element.html"+'?'+this.id;
    }else{
      window.location.href = "./html/comingsoon.html";
    }
  });





});
