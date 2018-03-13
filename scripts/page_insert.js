{
  let divPerayakiElement = document.getElementById('perayakiElement')

  let perayakiShopInfo = [
    {
    name:'元祖ペラ焼き にしむら',
    adress:'〒787-0324 高知県土佐清水市中央町6-1-1',
    tel:'0880-82-2752',time:'10:30 - 22:30',
    rest:'火曜日',url:'https://tabelog.com/kochi/A3904/A390404/39004584/',
    photo:'../image/nisimura.png'},
    {
    name:'タッチ',
    adress:'〒787-0331 高知県土佐清水市越前町5-6',
    tel:'0880-82-4210',
    time:'14:00 -',
    rest:'不定休',
    url:'https://tabelog.com/kochi/A3904/A390404/39004335/',
    photo:'../image/tacchi.png'
    }
  ]

  let divPerayakiShopDetail = ''
  for (shop of perayakiShopInfo) {

    divPerayakiShopDetail += '<div class="recommendation"><div class="recommend-photo">'
    divPerayakiShopDetail += '<img src="'+shop.photo+'" class="recommend-image"/></div>'

    divPerayakiShopDetail += '<div class="about-place">' + '<p>'+shop.name+'</p>'
    divPerayakiShopDetail += '<ul><li>Adress: '+shop.adress+'</li><li>Tel: '+shop.tel+'</li><li>営業時間: '+shop.time+'</li><li>定休日: '+shop.rest+'</li><li>URL: <a href="'+shop.url+'">'+shop.url+'</a></li></ul></div></div>'
  }


    divPerayakiElement.innerHTML = divPerayakiShopDetail

  }
