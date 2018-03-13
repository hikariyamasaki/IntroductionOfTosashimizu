function draw(){

  //?以降のidをとる
  id = location.search.substring(1)

  if(id === 'tyoutaroukai'){
    var top = {
      image:'../image-bg/foods-element.jpg',
      title:'長太郎貝',
      text:'<br />土佐清水といえば海鮮料理。<br />新鮮な刺身もいいけど、<br />甘辛いタレで焼いたこちらも絶品！<br /><br />長太郎貝は、虹色貝とも言われており、<br />カラフルな貝柄が特徴的です。<br />'
    }
    var contents = [
      {
      name:'御食事処 あしずり',
      adress:'〒787-0324 高知県土佐清水市中央町6-1-1',
      tel:'0880-82-0825',
      time:'11:30 - 14:00,17:00 - 20:00',
      rest:'日曜日',url:'https://tabelog.com/kochi/A3904/A390404/39000025/',
      photo:'../image-bg/ashisyoku.png'
      },
      // {
      // name:'タッチ',
      // adress:'〒787-0331 高知県土佐清水市越前町5-6',
      // tel:'0880-82-4210',
      // time:'14:00 -',
      // rest:'不定休',
      // url:'https://tabelog.com/kochi/A3904/A390404/39004335/',
      // photo:'../image/tacchi.png'
      // }
    ]
  }else if (id === 'perayaki') {
    var top = {
      image:'../image-bg/perayakiFromN.jpg',
      title:'ペラ焼き',
      text:'<br />土佐清水の地元メのひとつ ペラ焼き。<br />たっぷりのネギとじゃこ天、卵を贅沢に<br />使用した粉物料理の《鉄板メニュー》です。<br /><br /><br />薄く大きく伸ばされた生地に、<br />少しピリ辛のソースをかけていただきます。<br /><br /><br />語源はこのペラペラした見た目からきて<br />おり、お好み焼きに並ぶ人気料理です。<br />'
    }
    var contents = [
      {
      name:'元祖ペラ焼き にしむら',
      adress:'〒787-0324 高知県土佐清水市中央町6-1-1',
      tel:'0880-82-2752',time:'10:30 - 22:30',
      rest:'火曜日',url:'https://tabelog.com/kochi/A3904/A390404/39004584/',
      photo:'../image/nisimura.png'
      },
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
  }
pageInsert(top,contents)

}

draw()
