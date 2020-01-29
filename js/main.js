
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
      }   if(a.innerText === 'RU') { 
        ru.style.color = 'white';
        ru.style.fontWeight = '700';
        en.style.color = '#a1a7ac;';
        en.style.fontWeight ='normal';
      }
  }
  ru.addEventListener('click', onlanguagechange);
  en.addEventListener('click', onlanguagechange);


