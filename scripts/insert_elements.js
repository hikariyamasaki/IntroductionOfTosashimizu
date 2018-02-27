function insertElements(titleList,imageList,divName){
  let divElementRight = document.getElementById(divName)
  let stockElementDetail = ''
  for (var i in titleList) {
    stockElementDetail += '<div class="element-detail">  <img src="'+ imageList[i] +'" class="element-image"/>  <p>    '+ titleList[i] +'  </p></div>'
  }

  divElementRight.innerHTML = stockElementDetail
}



{

  let divFoods = 'food-element'
  let foodTitles = ['長太郎貝','ペラ焼き','清水鯖','くじら料理','ウツボ料理','刺身']
  let foodImages = [
    './image/foods-element.jpg',
    './image/perayaki.png',
    './image/saba.png',
    './image/kujira.png',
    './image/utsubo.png',
    './image/sashimi.jpg',
  ]

  insertElements(foodTitles,foodImages,divFoods)

  let divNature = 'nature-element'
  let natureTitles = ['唐人駄馬遺跡','とまろっと','竜串','足摺岬','大岐ビーチ','白山洞門']
  let natureImages = [
    './image/nature-element.png',
    './image/tomarotto.png',
    './image/tatsukusi.png',
    './image/ashizurimisaki.png',
    './image/oki.png',
    './image/sirayamadosan.png',
  ]

  insertElements(natureTitles,natureImages,divNature)


}
