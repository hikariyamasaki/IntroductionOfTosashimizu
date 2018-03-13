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
      title:'清水鯖',
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
      id:'tyoutaroukai'
    },
    {
      title:'とまろっと',
      image:'./image/tomarotto.png',
      id:'peyaraki'
    },
    {
      title:'竜串',
      image:'./image/tatsukusi.png',
      id:'simizusaba'
    },
    {
      title:'足摺岬',
      image:'./image/ashizurimisaki.png',
      id:'kujiraryouri'
    },
    {
      title:'大岐ビーチ',
      image:'./image/oki.png',
      id:'utsuboryouri'
    },
    {
      title:'白山洞門',
      image:'./image/sirayamadosan.png',
      id:'sashimi'
    }
  ]
  insertElements(natures,'nature-element')
}


// {
//
//   let divFoods = 'food-element'
//   let foodTitles = ['長太郎貝','ペラ焼き','清水鯖','くじら料理','ウツボ料理','刺身']
//   let foodImages = [
//     './image/foods-element.jpg',
//     './image/perayaki.png',
//     './image/saba.png',
//     './image/kujira.png',
//     './image/utsubo.png',
//     './image/sashimi.jpg',
//   ]
//
//   insertElements(foodTitles,foodImages,divFoods)
//
//   let divNature = 'nature-element'
//   let natureTitles = ['唐人駄馬遺跡','とまろっと','竜串','足摺岬','大岐ビーチ','白山洞門']
//   let natureImages = [s
//     './image/nature-element.png',
//     './image/tomarotto.png',
//     './image/tatsukusi.png',
//     './image/ashizurimisaki.png',
//     './image/oki.png',
//     './image/sirayamadosan.png',
//   ]
//
//   insertElements(natureTitles,natureImages,divNature)
//
//
// }
