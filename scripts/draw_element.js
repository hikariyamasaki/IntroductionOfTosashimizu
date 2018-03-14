function draw(){

  //?以降のidをとる
  id = location.search.substring(1)

  if(id === 'tyoutaroukai'){
    var top = {
      image:'../image-bg/foods-element.jpg',
      title:'長太郎貝',
      text:'<br />土佐清水といえば海鮮料理。<br />新鮮な刺身もいいけど、<br />甘辛いタレで焼いたこちらも絶品！<br /><br /><br />長太郎貝は、虹色貝とも言われており、<br />カラフルな貝柄が特徴的です。<br />'
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
      {
      name:'ほざき',
      adress:'〒787-0306 高知県土佐清水市幸町10−15',
      tel:'0880-82-2256',
      time:'17:00 - 22:00',
      rest:'不定休',
      url:'http://nomidokorohozaki.com/',
      photo:'../image/hozaki.png'
      }
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
  }else if (id === 'simizusaba') {
    var top = {
      image:'../image-bg/sabasashimiFromN.jpg',
      title:'清水さば',
      text:'<br />清水さばの特徴はなんと言っても、<br />焼いてもうまい刺身でもうまい！<br /><br /><br />脂ののったハランボ焼きや、<br />焼きサバを使った"ばってら"と言われる押し寿司も絶品です。<br /><br /><br />体にまだら模様があることから「ごまサバ」とも言われており、<br />清水さばはカツオのたたきにも勝る一品です。'
    }
    var contents = [
      {
      name:'魚田(うおでん)',
      adress:'〒787-0325 高知県土佐清水市栄町14-10',
      tel:'0880-82-5888',
      time:'17:30 - 22:00',
      rest:'日曜日',
      url:'https://tabelog.com/kochi/A3904/A390404/39004449/',
      photo:'../image/NoImage.png'
      },
      {
      name:'和ダイニング ふかみ',
      adress:'〒787-0325 高知県土佐清水市栄町8-11',
      tel:'0880-82-0267',
      time:'17:00 - 22:00',
      rest:'不定休',
      url:'https://tabelog.com/kochi/A3904/A390404/39000373/',
      photo:'../image/NoImage.png'
      }
    ]
  }else if (id === 'sashimi') {
    var top = {
      image:'../image-bg/sashimiFromN.png',
      title:'刺身',
      text:'<br />刺身は鮮度が命！<br /><br /><br />土佐清水漁港で水揚げされた魚を、<br />新鮮なままいただけるのが清水ならではの魅力。<br /><br /><br />黒潮に揉まれて引き締まった身は、<br />プリプリを越える！?<br /><br /><br />市内どの店舗も漁港から近いことから、<br />どこでも美味しい刺身が食べられます。'
    }
    var contents = [
      {
      name:'魚田(うおでん)',
      adress:'〒787-0325 高知県土佐清水市栄町14-10',
      tel:'0880-82-5888',
      time:'17:30 - 22:00',
      rest:'日曜日',
      url:'https://tabelog.com/kochi/A3904/A390404/39004449/',
      photo:'../image/NoImage.png'
      },
      {
      name:'和ダイニング ふかみ',
      adress:'〒787-0325 高知県土佐清水市栄町8-11',
      tel:'0880-82-0267',
      time:'17:00 - 22:00',
      rest:'不定休',
      url:'https://tabelog.com/kochi/A3904/A390404/39000373/',
      photo:'../image/NoImage.png'
      }
    ]
  }else if (id === 'toujindaba') {
    var top = {
      image:'../image-bg/toujindabaFromN.jpg',
      title:'唐人駄馬遺跡',
      text:''
    }
    var contents = [
      {
      name:'唐人駄馬',
      adress:'〒787-0316 高知県土佐清水市松尾977',
      tel:'',
      time:'',
      rest:'',
      url:'https://www.city.tosashimizu.kochi.jp/kanko/g01_tojindaba.html',
      photo:'../image/toujindaba.jpg'
      }
    ]
  }




pageInsert(top,contents)

}

draw()
