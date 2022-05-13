// Posto nisam znao da li treba da se dodeljuju protivnici eliminacione faze nasumicno kroz kod ili da se ide redom po grupama kako ko prodje,
// napravio sam dva modela.
// U fajlu index1.js moze da se pogleda i nasumicno dodavanje protivnika eliminacione faze ukoliko se to trazilo u istom.
const main = () => {
  var Drzave = [
    {name : "Katar", rangs: 51},
    {name : "Ekvador", rangs: 46},
    {name : "Senegal", rangs: 20},
    {name : "Holandija", rangs: 10},
    {name : "Engleska", rangs: 5},
    {name : "Iran", rangs: 65},
    {name : "SAD", rangs: 15},
    {name : "Ukrajina", rangs: 27},
    {name : "Argentina", rangs: 4},
    {name : "Saudijska Arabija", rangs: 49},
    {name : "Meksiko", rangs: 9},
    {name : "Poljska", rangs: 26},
    {name : "Francuska", rangs: 3},
    {name : "Peru", rangs: 22},
    {name : "Danska", rangs: 11},
    {name : "Tunis", rangs: 35},
    {name : "Španija", rangs: 7},
    {name : "Novi Zeland", rangs: 101},
    {name : "Nemačka", rangs: 12},
    {name : "Japan", rangs: 23},
    {name : "Belgija", rangs: 2},
    {name : "Kanada", rangs: 38},
    {name : "Maroko", rangs: 24},
    {name : "Hrvatska", rangs: 16},
    {name : "Brazil", rangs: 25},
    {name : "Srbija", rangs: 1},
    {name : "Švajcarska", rangs: 14},
    {name : "Kamerun", rangs: 37},
    {name : "Portugal", rangs: 8},
    {name : "Gana", rangs: 60},
    {name : "Urugvaj", rangs: 13},
    {name : "Južna Koreja", rangs: 29},
  ];
  let grupaA,grupaB,grupaC,grupaD,grupaE,grupaF,grupaG,grupaH; 
  let pobedniciGrupneFazeA,pobedniciGrupneFazeB,pobedniciGrupneFazeC,pobedniciGrupneFazeD,pobedniciGrupneFazeE,pobedniciGrupneFazeF,pobedniciGrupneFazeG,pobedniciGrupneFazeH;
  let tim1IPoluvremeGolovi,tim2IPoluvremeGolovi,tim3IPoluvremeGolovi,tim4IPoluvremeGolovi;
  let tim1IIPoluvremeGolovi,tim2IIPoluvremeGolovi,tim3IIPoluvremeGolovi,tim4IIPoluvremeGolovi;
  let tim1kraj,tim2kraj,tim3kraj,tim4kraj;
  var runda;
  var grupaDrzave = [];
  //Podela ekipa po grupama.
  function podeliDrzava() {
    var slovo = 'A';
    for( var index in Drzave) {
      if(index%4 === 0 && index != 0) {
        slovo = String.fromCharCode(slovo.charCodeAt(0)+1);
      }
      grupaDrzave.push({...Drzave[index], grupa: slovo});

    }
  }
  podeliDrzava();
  //Izdvajanje drzava u grupe kojima pripada.
  grupaA = grupaDrzave.slice(0,4);
  grupaB = grupaDrzave.slice(4,8);
  grupaC = grupaDrzave.slice(8,12);
  grupaD = grupaDrzave.slice(12,16);
  grupaE = grupaDrzave.slice(16,20);
  grupaF = grupaDrzave.slice(20,24);
  grupaG = grupaDrzave.slice(24,28);
  grupaH = grupaDrzave.slice(28,32);
  // Ovde se generisu golovi za ekipe.
  function randomGolovi(tim1,tim2,tim3,tim4){
    //Dodela prednosti timu u zavisnosti od medjusobnog ranga.
    tim1IPoluvremeGolovi = Math.floor(Math.random() * 5);
    tim2IPoluvremeGolovi = Math.floor(Math.random() * 5);
    tim3IPoluvremeGolovi = Math.floor(Math.random() * 5);
    tim4IPoluvremeGolovi = Math.floor(Math.random() * 5);
    tim1IIPoluvremeGolovi = Math.floor(Math.random() * 5);
    tim2IIPoluvremeGolovi = Math.floor(Math.random() * 5);
    tim3IIPoluvremeGolovi = Math.floor(Math.random() * 5);
    tim4IIPoluvremeGolovi = Math.floor(Math.random() * 5);
    if(tim1.rangs< tim2.rangs&& tim3.rangs< tim4.rang){
      tim1IPoluvremeGolovi += 2;
      tim3IPoluvremeGolovi += 2;
      tim1IIPoluvremeGolovi += 2;
      tim3IIPoluvremeGolovi += 2;
    }else if(tim1.rangs< tim2.rangs&& tim3.rangs> tim4.rang){
      tim1IPoluvremeGolovi += 2;
      tim4IPoluvremeGolovi += 2;
      tim1IIPoluvremeGolovi += 2;
      tim4IIPoluvremeGolovi += 2;
    }else if(tim1.rangs> tim2.rangs&& tim3.rangs< tim4.rang){
      tim2IPoluvremeGolovi += 2; 
      tim3IPoluvremeGolovi += 2;
      tim2IIPoluvremeGolovi += 2;
      tim3IIPoluvremeGolovi += 2;
    }else if(tim1.rangs> tim2.rangs&& tim3.rangs> tim4.rang){
      tim2IPoluvremeGolovi += 2;
      tim4IPoluvremeGolovi += 2;
      tim2IIPoluvremeGolovi += 2;
      tim4IIPoluvremeGolovi += 2;
    }

    tim1kraj = tim1IPoluvremeGolovi+tim1IIPoluvremeGolovi;
    tim2kraj = tim2IPoluvremeGolovi+tim2IIPoluvremeGolovi;
    tim3kraj = tim3IPoluvremeGolovi+tim3IIPoluvremeGolovi;
    tim4kraj = tim4IPoluvremeGolovi+tim4IIPoluvremeGolovi;
  }
  //Dodela bodova kao i ostalih informacija bitne za tabelu.
  function dodelaBodovaGrupneFaze(tim1,tim2,tim3,tim4,tim1kraj,tim2kraj,tim3kraj,tim4kraj){
    if(tim2kraj>tim1kraj && tim4kraj>tim3kraj){
      tim1.poraz++;
      tim2.pobede++;
      tim2.bodovi =  tim2.bodovi +  3;
      tim3.poraz++;
     tim4.pobede++;
     tim4.bodovi = tim4.bodovi + 3;
    }
    else if(tim2kraj>tim1kraj && tim4kraj<tim3kraj){
     tim1.poraz++;
     tim2.pobede++;
     tim2.bodovi =  tim2.bodovi +  3;
     tim3.pobede++;
     tim3.bodovi =tim3.bodovi + 3;
     tim4.poraz++;
   }
   else if(tim2kraj>tim1kraj && tim4kraj==tim3kraj){
     tim1.poraz++;
     tim2.pobede++;
     tim2.bodovi =  tim2.bodovi +  3;
     tim3.nereseno++;
     tim3.bodovi++;
     tim4.nereseno++;
     tim4.bodovi++;
   }
   else if(tim2kraj<tim1kraj && tim4kraj>tim3kraj){
     tim1.pobede++;
      tim1.bodovi = tim1.bodovi + 3;
      tim2.poraz++;
     tim3.poraz++;
    tim4.pobede++;
    tim4.bodovi =tim4.bodovi + 3;
   }
   else if(tim2kraj<tim1kraj && tim4kraj<tim3kraj){
     tim1.pobede++;
      tim1.bodovi = tim1.bodovi + 3;
      tim2.poraz++;
     tim3.pobede++;
    tim3.bodovi =tim3.bodovi + 3;
    tim4.poraz++;
   }
   else if(tim2kraj<tim1kraj && tim4kraj==tim3kraj){
     tim1.pobede++;
      tim1.bodovi = tim1.bodovi + 3;
      tim2.poraz++;
      tim3.nereseno++;
      tim3.bodovi++;
      tim4.nereseno++;
      tim4.bodovi++;
   }
   else if(tim2kraj==tim1kraj && tim4kraj>tim3kraj){
     tim1.nereseno++;
     tim1.bodovi++;
     tim2.nereseno++;
     tim2.bodovi++;
     tim3.poraz++;
     tim4.pobede++;
     tim4.bodovi =tim4.bodovi + 3;
   }
   else if(tim2kraj==tim1kraj && tim4kraj<tim3kraj){
     tim1.nereseno++;
     tim1.bodovi++;
     tim2.nereseno++;
     tim2.bodovi++;
     tim3.pobede++;
    tim3.bodovi =tim3.bodovi + 3;
    tim4.poraz++;
   }
   else if(tim2kraj==tim1kraj && tim4kraj==tim3kraj){
     tim1.nereseno++;
     tim1.bodovi++;
     tim2.nereseno++;
     tim2.bodovi++;
      tim3.nereseno++;
      tim3.bodovi++;
      tim4.nereseno++;
      tim4.bodovi++;
   }
   return [tim1,tim2,tim3,tim4];
  }
  //Odredjivanje ko je pobdenik nakon produzetaka, ili penala.
  function produzeciPenali(tim1,tim2,tim1golovi,tim2golovi){
      produzecitim1 = Math.floor(Math.random() * 2);
      produzecitim2 = Math.floor(Math.random() * 2);
      tim1golovi += produzecitim1;
      tim2golovi += produzecitim2
      var vrati = " Produzeci:\n"; 
      vrati +="  " +  tim1.name + " " +produzecitim1 +" : " +produzecitim2 + " " + tim2.name +"("+tim2.grupa+")"+"\n";
      if(tim1golovi == tim2golovi){
        penaliTim1 = Math.floor(Math.random() * 6);
        penaliTim2 = Math.floor(Math.random() * 6);
        tim1golovi = penaliTim1;
        tim2golovi = penaliTim2
        if(penaliTim1 == penaliTim2){
          var niz = [penaliTim1,penaliTim2];
        randomPobednik = Math.floor(Math.random() * 2);
        niz[randomPobednik] += 1;
        penaliTim1 = niz[0];
        penaliTim2 = niz[1];
        tim1golovi = penaliTim1;
        tim2golovi = penaliTim2;
        }
        vrati += " Penali:\n"; 
        vrati +="  " +  tim1.name + " " +penaliTim1 +" : " +penaliTim2 + " " + tim2.name +"("+tim2.grupa+")"+"\n";

      }
      
    return [tim1golovi,tim2golovi,vrati];
    
  }
  //Ispisivanje utakmica.
  function ispisUtakmica(tim1,tim2,tim1IPoluvremeGolovi,tim2IPoluvremeGolovi,tim1IIPoluvremeGolovi,tim2IIPoluvremeGolovi,tim1kraj,tim2kraj){
    if(tim1.grupa.length != 2){
      runda = "\t\t I Poluvreme:\n"; 
    runda += "\t\t"+tim1.name + " " + tim1IPoluvremeGolovi +" : " +tim2IPoluvremeGolovi + " " + tim2.name +"\n";
    runda += "\t\t II Poluvreme:\n"; 
    runda +="\t\t"+ tim1.name + " " + tim1IIPoluvremeGolovi +" : " +tim2IIPoluvremeGolovi + " " + tim2.name +"\n";
    runda += "\t\t Kraj:\n"; 
    runda +="\t\t"+ tim1.name + " " +tim1kraj +" : " +tim2kraj + " " + tim2.name +"\n";
    return runda;
    }else{
      runda = "\n I Poluvreme:\n"; 
      runda += "  " + tim1.name + " " + tim1IPoluvremeGolovi +" : " +tim2IPoluvremeGolovi + " " + tim2.name +"\n";
      runda += " II Poluvreme:\n"; 
      runda +="  "+ tim1.name + " " + tim1IIPoluvremeGolovi +" : " +tim2IIPoluvremeGolovi + " " + tim2.name +"\n";
      runda += " Kraj:\n"; 
      runda +="  "+ "(" + tim1.grupa + ")"+ tim1.name + " " +tim1kraj +" : " +tim2kraj + " " + tim2.name +"("+tim2.grupa+")"+"\n";
     return runda;
    }
  }
  //F-ja za proveru koji je tim je pobedio i prosao u sledecu fazu.
  function proveraKojiTimJeProsaoDalje(tim1,tim2,tim3,tim4,tim1kraj,tim2kraj,tim3kraj,tim4kraj){
    if(tim1kraj>tim2kraj && tim3kraj>tim4kraj){
      return [tim1,tim3];
      }else if(tim1kraj>tim2kraj && tim3kraj<tim4kraj){
        return [tim1,tim4];
      }else if(tim1kraj<tim2kraj && tim3kraj>tim4kraj){
      return [tim2,tim3];
      }else if(tim1kraj<tim2kraj && tim3kraj<tim4kraj){
      return [tim2,tim4];
      }
  }
 
  //F-ja za medjusobne duele u prvom kolu grupne faze.
  function GrupanaFazaIkolo(grupu){
      let tim1 = grupu[0];
      let tim2 = grupu[1];
      let tim3 = grupu[2];
      let tim4 = grupu[3];
      randomGolovi(tim1,tim2,tim3,tim4);
      console.log("\t"+"Grupa "+ tim1.grupa+":\n");
       var rundaIFaza =  ispisUtakmica (tim1,tim2,tim1IPoluvremeGolovi,tim2IPoluvremeGolovi,tim1IIPoluvremeGolovi,tim2IIPoluvremeGolovi,tim1kraj,tim2kraj)
      runda =  ispisUtakmica (tim3,tim4,tim3IPoluvremeGolovi,tim4IPoluvremeGolovi,tim3IIPoluvremeGolovi,tim4IIPoluvremeGolovi,tim3kraj,tim4kraj)
      rundaIFaza += runda;
      tim1.primljeniGolovi = tim2kraj;
      tim1.datiGolovi = tim1kraj;
      tim1.pobede = 0;
      tim1.nereseno = 0;
      tim1.poraz = 0;
      tim1.bodovi = 0;
      tim2.primljeniGolovi = tim1kraj;
      tim2.datiGolovi = tim2kraj;
      tim2.pobede = 0;
      tim2.nereseno = 0;
      tim2.poraz = 0;
      tim2.bodovi = 0;
      tim3.primljeniGolovi = tim4kraj;
      tim3.datiGolovi = tim3kraj;
      tim3.pobede = 0;
      tim3.nereseno = 0;
      tim3.poraz = 0;
      tim3.bodovi = 0;
      tim4.primljeniGolovi = tim3kraj
      tim4.datiGolovi = tim4kraj;
      tim4.pobede = 0;
      tim4.nereseno = 0;
      tim4.poraz = 0;
      tim4.bodovi = 0;
  var timovi = dodelaBodovaGrupneFaze(tim1,tim2,tim3,tim4,tim1kraj,tim2kraj,tim3kraj,tim4kraj);
       tim1 = timovi[0];
       tim2 = timovi[1];
       tim3 = timovi[2];
       tim4 = timovi[3];
      console.log(rundaIFaza); 
  }
  //F-ja za medjusobne duele u drugom kolu grupne faze.
  function GrupanaFazaIIkolo(grupu){
    let tim1 = grupu[0];
    let tim2 = grupu[1];
    let tim3 = grupu[2];
    let tim4 = grupu[3];
    randomGolovi(tim1,tim3,tim2,tim4);
    console.log("\t"+"Grupa "+ tim1.grupa+":\n");
     var rundaIIFaza =  ispisUtakmica (tim1,tim3,tim1IPoluvremeGolovi,tim3IPoluvremeGolovi,tim1IIPoluvremeGolovi,tim3IIPoluvremeGolovi,tim1kraj,tim3kraj)
     var runda =  ispisUtakmica (tim2,tim4,tim2IPoluvremeGolovi,tim4IPoluvremeGolovi,tim2IIPoluvremeGolovi,tim4IIPoluvremeGolovi,tim2kraj,tim4kraj)
     rundaIIFaza += runda;
    tim1.primljeniGolovi += tim3kraj;
    tim1.datiGolovi += tim1kraj;
    tim3.primljeniGolovi += tim1kraj
    tim3.datiGolovi += tim3kraj;
    tim2.primljeniGolovi += tim4kraj;
    tim2.datiGolovi += tim2kraj;
    tim4.primljeniGolovi += tim2kraj
    tim4.datiGolovi += tim4kraj;
    var timovi = dodelaBodovaGrupneFaze(tim1,tim3,tim2,tim4,tim1kraj,tim3kraj,tim2kraj,tim4kraj);
    tim1 = timovi[0];
    tim2 = timovi[1];
    tim3 = timovi[2];
    tim4 = timovi[3];
    console.log(rundaIIFaza); 
  }
  //F-ja za medjusobne duele u trecem kolu grupne faze.
  function GrupanaFazaIIIkolo(grupu){
      let tim1 = grupu[0];
      let tim2 = grupu[1];
      let tim3 = grupu[2];
      let tim4 = grupu[3];
      randomGolovi(tim1,tim4,tim2,tim3);
      console.log("\t"+"Grupa "+ tim1.grupa+":\n");
      var rundaIIIFaza =  ispisUtakmica(tim1,tim4,tim1IPoluvremeGolovi,tim4IPoluvremeGolovi,tim1IIPoluvremeGolovi,tim4IIPoluvremeGolovi,tim1kraj,tim4kraj)
      runda =  ispisUtakmica(tim2,tim3,tim2IPoluvremeGolovi,tim3IPoluvremeGolovi,tim2IIPoluvremeGolovi,tim3IIPoluvremeGolovi,tim2kraj,tim3kraj)
      rundaIIIFaza += runda;
      tim1.primljeniGolovi += tim4kraj;
      tim1.datiGolovi += tim1kraj;
      tim4.primljeniGolovi += tim1kraj
      tim4.datiGolovi += tim4kraj;
      tim2.primljeniGolovi += tim3kraj;
      tim2.datiGolovi += tim2kraj;
      tim3.primljeniGolovi += tim2kraj
      tim3.datiGolovi += tim3kraj;
      var timovi = dodelaBodovaGrupneFaze(tim1,tim4,tim3,tim2,tim1kraj,tim4kraj,tim3kraj,tim2kraj);
      tim1 = timovi[0];
      tim2 = timovi[1];
      tim3 = timovi[2];
      tim4 = timovi[3];
      console.log(rundaIIIFaza); 
  }
  //Pozivanje f-je i odigravanje meceva po grupama u prvoj fazi.
  console.log("Grupna faza I kolo :");
  GrupanaFazaIkolo(grupaA);
  GrupanaFazaIkolo(grupaB);
  GrupanaFazaIkolo(grupaC);
  GrupanaFazaIkolo(grupaD);
  GrupanaFazaIkolo(grupaE);
  GrupanaFazaIkolo(grupaF);
  GrupanaFazaIkolo(grupaG);
  GrupanaFazaIkolo(grupaH);
  //Pozivanje f-je i odigravanje meceva po grupama u drugoj fazi.
  console.log("Grupna faza II kolo :");
  GrupanaFazaIIkolo(grupaA);
  GrupanaFazaIIkolo(grupaB);
  GrupanaFazaIIkolo(grupaC);
  GrupanaFazaIIkolo(grupaD);
  GrupanaFazaIIkolo(grupaE);
  GrupanaFazaIIkolo(grupaF);
  GrupanaFazaIIkolo(grupaG);
  GrupanaFazaIIkolo(grupaH);
  //Pozivanje f-je i odigravanje meceva po grupama u trecoj fazi.
  console.log("Grupna faza III kolo :");
  GrupanaFazaIIIkolo(grupaA);
  GrupanaFazaIIIkolo(grupaB);
  GrupanaFazaIIIkolo(grupaC);
  GrupanaFazaIIIkolo(grupaD);
  GrupanaFazaIIIkolo(grupaE);
  GrupanaFazaIIIkolo(grupaF);
  GrupanaFazaIIIkolo(grupaG);
  GrupanaFazaIIIkolo(grupaH);
  //Sortiranje tabele po bodovima i ostalim uslovima.
  function tabela(grupa){
    console.log("Tabela " + grupa[0].grupa+"\n");
    var grupaSprtorana = grupa.slice(0);
    var grupaSortiranaPo = grupaSprtorana.sort(function(a,b) {
      var goloviDomacina = a.datiGolovi - a.primljeniGolovi;
      var goloviGosta = b.datiGolovi - b.primljeniGolovi; 
      if(b.bodovi != a.bodovi){ 
       return b.bodovi - a.bodovi;      
      }else if(b.bodovi == a.bodovi || goloviGosta != goloviDomacina){
        return goloviGosta - goloviDomacina;
      }else if(b.bodovi == a.bodovi || goloviGosta == goloviDomacina || b.datiGolovi != a.datiGolovi){
        return b.datiGolovi - a.datiGolovi;
      }else if(b.bodovi == a.bodovi || goloviGosta == goloviDomacina || b.datiGolovi == a.datiGolovi){
        const alphabet ="ab";
        return alphabet[Math.floor(Math.random() * alphabet.length)]
      }
    });
    for(i = 0;i<grupaSortiranaPo.length;i++){
      grupaSortiranaPo[i].grupa += i+1;
    }
    var pobednici = "";
    for(var i = 0; i < grupaSortiranaPo.length; i++){
        var broj = i+1;
        if(grupaSortiranaPo[i].name.length >= 10){
            pobednici += broj +" "+ grupaSortiranaPo[i].name + "("+grupaSortiranaPo[i].rang+")\t" + grupaSortiranaPo[i].pobede + "  " +grupaSortiranaPo[i].nereseno+ "  " + grupaSortiranaPo[i].poraz + "  " + grupaSortiranaPo[i].datiGolovi + ":"+ grupaSortiranaPo[i].primljeniGolovi + "\t"+grupaSortiranaPo[i].bodovi + "\n";
        }else{
        pobednici += broj +" "+ grupaSortiranaPo[i].name + "("+grupaSortiranaPo[i].rang+")\t\t" + grupaSortiranaPo[i].pobede + "  " +grupaSortiranaPo[i].nereseno+ "  " + grupaSortiranaPo[i].poraz + "  " + grupaSortiranaPo[i].datiGolovi + ":"+ grupaSortiranaPo[i].primljeniGolovi + "\t"+grupaSortiranaPo[i].bodovi + "\n";
        }
    }
    console.table(pobednici);
    return grupaSortiranaPo.slice(0,2);
  }
  //Dodeljivanje grupa za sortiranje.
   pobedniciGrupneFazeA =  tabela(grupaA);
   pobedniciGrupneFazeB = tabela(grupaB);
   pobedniciGrupneFazeC = tabela(grupaC);
   pobedniciGrupneFazeD = tabela(grupaD);
   pobedniciGrupneFazeE = tabela(grupaE);
   pobedniciGrupneFazeF =  tabela(grupaF);
   pobedniciGrupneFazeG =  tabela(grupaG);
   pobedniciGrupneFazeH = tabela(grupaH);
  console.log("Eliminaciona faza - 1/16 finala:");
  // Eliminaciona faza - 1/16 finala.
  function sesnestFinalisti(prvaGrupa,drugaGrupa) {
    var tim1 = prvaGrupa[0];
    var tim2 = prvaGrupa[1];
    var tim3 = drugaGrupa[0];
    var tim4 = drugaGrupa[1];
    randomGolovi(tim1,tim4,tim3,tim2);
    var runda = ispisUtakmica(tim1,tim4,tim1IPoluvremeGolovi,tim4IPoluvremeGolovi,tim1IIPoluvremeGolovi,tim4IIPoluvremeGolovi,tim1kraj,tim4kraj);
    if(tim1kraj == tim4kraj){
    povratno = produzeciPenali(tim1,tim4,tim1kraj,tim4kraj);
    tim1kraj = povratno[0];
    tim4kraj = povratno[1];
    runda += povratno[2];
    }
    var runda1 = ispisUtakmica(tim3,tim2,tim3IPoluvremeGolovi,tim2IPoluvremeGolovi,tim3IIPoluvremeGolovi,tim2IIPoluvremeGolovi,tim3kraj,tim2kraj);
    runda += runda1;
    if(tim3kraj == tim2kraj){
      povratno1 = produzeciPenali(tim3,tim2,tim3kraj,tim2kraj);
    tim3kraj = povratno1[0];
    tim2kraj = povratno1[1];
    runda += povratno1[2];
      }
   
    console.log(runda);  
   var kojeprosao =  proveraKojiTimJeProsaoDalje(tim4,tim1,tim2,tim3,tim4kraj,tim1kraj,tim2kraj,tim3kraj)
    
      return kojeprosao;
    }
  //Dodeljivanje ekipa za 1/16 finala.
  var pobednicisesnestFinalistiAB = sesnestFinalisti(pobedniciGrupneFazeA,pobedniciGrupneFazeB);
  var pobednicisesnestFinalistiCD = sesnestFinalisti(pobedniciGrupneFazeC,pobedniciGrupneFazeD);
  var pobednicisesnestFinalistiEF = sesnestFinalisti(pobedniciGrupneFazeE,pobedniciGrupneFazeF);
  var pobednicisesnestFinalistiGH = sesnestFinalisti(pobedniciGrupneFazeG,pobedniciGrupneFazeH);
   //Dodeljivanje ekipa za 1/8 finala.
  var osmofinalistiABCD =  [...pobednicisesnestFinalistiAB,...pobednicisesnestFinalistiCD];
  var osmofinalistiEFGH =  [...pobednicisesnestFinalistiEF,...pobednicisesnestFinalistiGH];
  console.log("Eliminaciona faza - 1/8 finala:");
  // Eliminaciona faza - 1/8 finala.
  function osmoFinalisti(prvaGrupa){
    let tim1 = prvaGrupa[0];
    let tim2 = prvaGrupa[1];
    let tim3 = prvaGrupa[2];
    let tim4 = prvaGrupa[3];
    randomGolovi(tim1,tim2,tim3,tim4);
    var runda = ispisUtakmica(tim1,tim2,tim1IPoluvremeGolovi,tim2IPoluvremeGolovi,tim1IIPoluvremeGolovi,tim2IIPoluvremeGolovi,tim1kraj,tim2kraj);
    if(tim1kraj == tim2kraj){
    povratno = produzeciPenali(tim1,tim2,tim1kraj,tim2kraj);
    tim1kraj = povratno[0];
    tim2kraj = povratno[1];
    runda += povratno[2];
    }
    var runda1 = ispisUtakmica(tim3,tim4,tim3IPoluvremeGolovi,tim4IPoluvremeGolovi,tim3IIPoluvremeGolovi,tim4IIPoluvremeGolovi,tim3kraj,tim4kraj);
    runda += runda1;
    if(tim3kraj == tim4kraj){
      povratno1 = produzeciPenali(tim3,tim4,tim3kraj,tim4kraj);
    tim3kraj = povratno1[0];
    tim4kraj = povratno1[1];
    runda += povratno1[2];
      }
      console.log(runda);
     var kojeprosao =  proveraKojiTimJeProsaoDalje(tim1,tim2,tim3,tim4,tim1kraj,tim2kraj,tim3kraj,tim4kraj)
      return kojeprosao;
  }
  //Dodeljivanje ekipa za 1/8 finala.
  var pobedniciOsmofinalistaABCD = osmoFinalisti(osmofinalistiABCD);
  var pobedniciOsmofinalistaEFGH = osmoFinalisti(osmofinalistiEFGH);
  //Dodeljivanje ekipa za 1/4 finala.
  var cetvorofinalistiSvihGrupa =  [...pobedniciOsmofinalistaABCD,...pobedniciOsmofinalistaEFGH];
  console.log("Eliminaciona faza - 1/4 finala:");
  // Eliminaciona faza - 1/4 finala.
  function cetvrtFinalisti(prvaGrupa){
    let tim1 = prvaGrupa[0];
    let tim2 = prvaGrupa[1];
    let tim3 = prvaGrupa[2];
    let tim4 = prvaGrupa[3];
    randomGolovi(tim1,tim2,tim3,tim4);
    var runda = ispisUtakmica(tim1,tim2,tim1IPoluvremeGolovi,tim2IPoluvremeGolovi,tim1IIPoluvremeGolovi,tim2IIPoluvremeGolovi,tim1kraj,tim2kraj);
    if(tim1kraj == tim2kraj){
    povratno = produzeciPenali(tim1,tim2,tim1kraj,tim2kraj);
    tim1kraj = povratno[0];
    tim2kraj = povratno[1];
    runda += povratno[2];
    }
    var runda1 = ispisUtakmica(tim3,tim4,tim3IPoluvremeGolovi,tim4IPoluvremeGolovi,tim3IIPoluvremeGolovi,tim4IIPoluvremeGolovi,tim3kraj,tim4kraj);
    runda += runda1;
    if(tim3kraj == tim4kraj){
      povratno1 = produzeciPenali(tim3,tim4,tim3kraj,tim4kraj);
    tim3kraj = povratno1[0];
    tim4kraj = povratno1[1];
    runda += povratno1[2];
      }
      console.log(runda);
      var kojeprosao =  proveraKojiTimJeProsaoDalje(tim1,tim2,tim3,tim4,tim1kraj,tim2kraj,tim3kraj,tim4kraj)
      return kojeprosao;
  }
  //Ekipe koje ucestvuju u finalu.
  var finale = cetvrtFinalisti(cetvorofinalistiSvihGrupa);
  console.log("Finale:");
  //FINALE.
  function finalisti(timoviFinala){
    let tim1 = timoviFinala[0];
    let tim2 = timoviFinala[1];
    //Ovde sam im dodelio random golove podjednako pa nek pobedi ekipa sa vise srece.
    tim1IPoluvremeGolovi = Math.floor(Math.random() * 7);;
    tim1IIPoluvremeGolovi = Math.floor(Math.random() * 7);;
    tim2IPoluvremeGolovi = Math.floor(Math.random() * 7);;
    tim2IIPoluvremeGolovi = Math.floor(Math.random() * 7);;
    tim1kraj = tim1IPoluvremeGolovi+tim1IIPoluvremeGolovi;
    tim2kraj = tim2IPoluvremeGolovi+tim2IIPoluvremeGolovi;
    var runda = ispisUtakmica(tim1,tim2,tim1IPoluvremeGolovi,tim2IPoluvremeGolovi,tim1IIPoluvremeGolovi,tim2IIPoluvremeGolovi,tim1kraj,tim2kraj);
    if(tim1kraj == tim2kraj){
    povratno = produzeciPenali(tim1,tim2,tim1kraj,tim2kraj);
    tim1kraj = povratno[0];
    tim2kraj = povratno[1];
    runda += povratno[2];
    }
        console.log(runda); 
        if(tim1kraj>tim2kraj){
        return [tim1];
        }else if(tim1kraj<tim2kraj){
          return [tim2];
        }
  }
  //POBEDNIK!
  var pobednik = finalisti(finale);
  console.log("Pobednik:");
  console.log ("!!!"+pobednik[0].name+"!!!");
}
main();