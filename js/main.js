
let ru = document.querySelector('#heder-ru');
let en = document.querySelector('#heder-en');
ru.style.color = 'white';
ru.style.fontWeight = '700';

onlanguagechange = (e) => {
    let a = e.target;
    let ru = document.querySelector('#heder-ru');
    let en = document.querySelector('#heder-en'); 
      if(a.innerText === 'EN') { 
        en.style.color = 'white';
        en.style.fontWeight = '700';
        ru.style.color = '#a1a7ac;';
        ru.style.fontWeight = 'normal';
let button = document.querySelector('#order-site');
button.innerText = "To order a site";
      }   if(a.innerText === 'RU') { 
        ru.style.color = 'white';
        ru.style.fontWeight = '700';
        en.style.color = '#a1a7ac;';
        en.style.fontWeight ='normal';
        let button = document.querySelector('#order-site');
button.innerText = "Заказать сайт";
      }
  }
  ru.addEventListener('click', onlanguagechange);
  en.addEventListener('click', onlanguagechange);


 let menu = document.querySelector("#menu");
 let dropMenu = document.querySelector(".dropdown-menu");
 let menuOn = false;
 openMenu = () => {
   if (menuOn === false) {
   let a = document.querySelector('.dropdown-menu');
   a.style.display = 'block';
   menuOn = true;
   }else{
    let a = document.querySelector('.dropdown-menu');
    a.style.display = 'none';
    menuOn = false;
   }
 }
 closeMenu = () => {
  let a = document.querySelector('.dropdown-menu');
  a.style.display = 'none';
  menuOn = false;
}
 menu.addEventListener('click', openMenu);
 dropMenu.addEventListener('click', closeMenu);

 const input = document.querySelector('.form-control');
 input.onchange = (e) => {
   alert("Разогреваем доменные печи, хомяки крутят педали сайт - "+e.target.value+" создаётся!");
   e.target.value = '';
 }

 const order = document.querySelector('#order-site');
 order.onclick = () => {alert('Дякуємо!');}

let plus01 = document.querySelector("#plus-01");
let plus02 = document.querySelector("#plus-02");
let plus03 = document.querySelector("#plus-03");
let plus04 = document.querySelector("#plus-04");
let activePlus = '#plus-02';
let oldActive = '';
plus01On  = () => {
oldActive = activePlus;
activePlus ='#' + plus01.id;
plus01.value = '01';
plus02.value = '02';
plus03.value = '03';
plus04.value = '04';
plusOn(activePlus,oldActive);
}
plusOn = (a,b) => {
let styledplus = document.querySelector(a);
styledplus.querySelector(".number").style.color = '#23b3fe';
styledplus.querySelector(".number").style.borderLeft = '5px solid #23b3fe';
styledplus.querySelector(".hedline").style.color = 'white';
styledplus.querySelector(".hedline").style.fontWeight = 'bold';
let styledold = document.querySelector(b);
styledold.querySelector(".number").style.color = '#a1a7ac';
styledold.querySelector(".number").style.borderLeft = '5px solid #26292d';
styledold.querySelector(".hedline").style.color = '#a1a7ac';
styledold.querySelector(".hedline").style.fontWeight = 'normal';
}
plus01On();
changeActive = (e) => {
  let numb = e.path[2].value;
  let plus = document.querySelector('#plus').querySelector('.nav');
  let hed = document.querySelector('#plus').querySelector('.col-sm');
  plus.innerText = numb + '/04';
  hed.querySelector('.hedline').innerText = e.target.innerText;
  oldActive = activePlus;
  activePlus ='#' + e.path[2].id;
  plusOn(activePlus,oldActive);
}
plus01.querySelector(".hedline").addEventListener('click', changeActive); 
plus02.querySelector(".hedline").addEventListener('click', changeActive); 
plus03.querySelector(".hedline").addEventListener('click', changeActive); 
plus04.querySelector(".hedline").addEventListener('click', changeActive); 
let plusPrev = document.querySelector('#plus-prev');
let plusNext = document.querySelector('#plus-next');
prevPlus = () => {
  let plus = document.querySelector('#plus').querySelector('.nav');
  let hed = document.querySelector('#plus').querySelector('.col-sm');
  if (activePlus === '#plus-01'){  
    plus.innerText = '04/04';
    oldActive = activePlus;
    activePlus ='#plus-04';
    let hedline = document.querySelector(activePlus).children[2].innerText;
    hed.querySelector('.hedline').innerText = hedline;
    plusOn(activePlus,oldActive);
    return
  }
  if (activePlus === '#plus-02'){  
    plus.innerText = '01/04';
    oldActive = activePlus;
    activePlus ='#plus-01';
    let hedline = document.querySelector(activePlus).children[2].innerText;
    hed.querySelector('.hedline').innerText = hedline;
    plusOn(activePlus,oldActive);
    return
  }
  if (activePlus === '#plus-03'){  
      plus.innerText = '02/04';
      oldActive = activePlus;
      activePlus ='#plus-02';
      let hedline = document.querySelector(activePlus).children[2].innerText;
      hed.querySelector('.hedline').innerText = hedline;
      plusOn(activePlus,oldActive);
      return
    }
  if (activePlus === '#plus-04'){  
        plus.innerText = '03/04';
        oldActive = activePlus;
        activePlus ='#plus-03';
        let hedline = document.querySelector(activePlus).children[2].innerText;
        hed.querySelector('.hedline').innerText = hedline;
        plusOn(activePlus,oldActive);
        return
      }
}
plusPrev.addEventListener('click', prevPlus);

nextPlus = () => {
  let plus = document.querySelector('#plus').querySelector('.nav');
  let hed = document.querySelector('#plus').querySelector('.col-sm');
  if (activePlus === '#plus-01'){  
    plus.innerText = '02/04';
    oldActive = activePlus;
    activePlus ='#plus-02';
    let hedline = document.querySelector(activePlus).children[2].innerText;
    hed.querySelector('.hedline').innerText = hedline;
    plusOn(activePlus,oldActive);
    return
  }
  if (activePlus === '#plus-02'){  
    plus.innerText = '03/04';
    oldActive = activePlus;
    activePlus ='#plus-03';
    let hedline = document.querySelector(activePlus).children[2].innerText;
    hed.querySelector('.hedline').innerText = hedline;
    plusOn(activePlus,oldActive);
    return
  }
  if (activePlus === '#plus-03'){  
      plus.innerText = '04/04';
      oldActive = activePlus;
      activePlus ='#plus-04';
      let hedline = document.querySelector(activePlus).children[2].innerText;
      hed.querySelector('.hedline').innerText = hedline;
      plusOn(activePlus,oldActive);
      return
    }
  if (activePlus === '#plus-04'){  
        plus.innerText = '01/04';
        oldActive = activePlus;
        activePlus ='#plus-01';
        let hedline = document.querySelector(activePlus).children[2].innerText;
        hed.querySelector('.hedline').innerText = hedline;
        plusOn(activePlus,oldActive);
        return
      }
}
plusNext.addEventListener('click', nextPlus);



