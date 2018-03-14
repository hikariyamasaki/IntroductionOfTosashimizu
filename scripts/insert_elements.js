function insertElements(contentList,divId){
  let divElementRight = document.getElementById(divId)
  let stockElementDetail = ''
  for (content of contentList) {
    stockElementDetail += '<div class="element-detail" id="'+content.id+'">  <img src="'+ content.image+'" class="element-image"/>  <p>    '+ content.title+'  </p></div>'
  }

  divElementRight.innerHTML = stockElementDetail
}


{
  let foods =[
    {
      title:'長太郎貝',
      image:'./image/foods-element.jpg',
      id:'tyoutaroukai'
    },
    {
      title:'ペラ焼き',
      image:'./image/perayaki.png',
      id:'perayaki'
    },
    {
      title:'清水さば',
      image:'./image/saba.png',
      id:'simizusaba'
    },
    {
      title:'くじら料理',
      image:'./image/kujira.png',
      id:'kujiraryouri'
    },
    {
      title:'ウツボ料理',
      image:'./image/utsubo.png',
      id:'utsuboryouri'
    },
    {
      title:'刺身',
      image:'./image/sashimi.jpg',
      id:'sashimi'
    }
  ]
  insertElements(foods,'food-element')

  let natures =[
    {
      title:'唐人駄馬遺跡',
      image:'./image/nature-element.png',
      id:'toujindaba'
    },
    {
      title:'とまろっと',
      image:'./image/tomarotto.png',
      id:'tomarotto'
    },
    {
      title:'竜串',
      image:'./image/tatsukusi.png',
      id:'tatsukusi'
    },
    {
      title:'足摺岬',
      image:'./image/ashizurimisaki.png',
      id:'ashizurimisaki'
    },
    {
      title:'大岐ビーチ',
      image:'./image/oki.png',
      id:'oki'
    },
    {
      title:'白山洞門',
      image:'./image/sirayamadosan.png',
      id:'sirayamadosan'
    }
  ]
  insertElements(natures,'nature-element')
}
