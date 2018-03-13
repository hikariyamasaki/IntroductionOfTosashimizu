function pageInsert(top,contents){

  let topImage = document.getElementById('topImage')
  topImage.src = top.image

  let topTitle = document.getElementById('topTitle')
  topTitle.innerHTML = top.title

  let topText = document.getElementById('text')
  topText.innerHTML = top.text


  let divElement = document.getElementById('aboutDetail')

  let divDetail = ''
  for (place of contents) {

    divDetail += '<div class="recommendation"><div class="recommend-photo">'
    divDetail += '<img src="'+place.photo+'" class="recommend-image"/></div>'

    divDetail += '<div class="about-place">' + '<p>'+place.name+'</p>'
    divDetail += '<ul><li>Adress: '+place.adress+'</li><li>Tel: '+place.tel+'</li><li>営業時間: '+place.time+'</li><li>定休日: '+place.rest+'</li><li>URL: <a href="'+place.url+'">'+place.url+'</a></li></ul></div></div>'
  }
    divElement.innerHTML = divDetail

}
