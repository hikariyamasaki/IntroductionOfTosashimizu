{
  let divFoods = document.getElementById('food-element')

  let foodTitles = ['長太郎貝','ペラ焼き','清水鯖','くじら料理','ウツボ料理','刺身']
  let foogImages = [
    './image/foods-element.jpg',
    './image/foods-element.jpg',
    './image/foods-element.jpg',
    './image/foods-element.jpg',
    './image/foods-element.jpg',
    './image/foods-element.jpg',
  ]
  let stockElementDetail = ''
  for (var i in foodTitles) {
    stockElementDetail += '<div class="element-detail">  <img src="'+ foogImages[i] +'" class="element-image"/>  <p>    '+ foodTitles[i] +'  </p></div>'
  }

  divFoods.innerHTML = stockElementDetail
}
