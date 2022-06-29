import alo from '../pageSources.js';
// alo means animeListObject
let animeListObj = alo;
// console.log(alo);
if (localStorage.getItem('anime') == null){
  localStorage.setItem('anime',JSON.stringify(animeListObj))
}
else{
  animeListObj = JSON.parse(localStorage.getItem("anime"));
}
function everythinInside(container, func) {
    container.forEach(element => {
      element.func;
    });
}
function check(element,fn) {
  if (element == (null || undefined)) {
    return 0
  } else {
    return fn
  }
  
}
function $(_classList) {
  return document.querySelector(_classList);
}
function $id(_classList) {
  return document.getElementById(_classList);
}
function $className(_classList) {
  return document.getElementsByClassName(_classList);
}
function _make(tag) {
  return document.createElement(tag);
}
const withClass = 'withClass';


class NewToDoc {
  constructor(container, tag, _classList, _innerHTML) {
    this.container = container;
    this.tag = tag;
    this._classList = _classList;
    this._innerHTML = _innerHTML;


  }

  ADD() {
    let F = $(this.container);
    let S = _make(this.tag);
    if (this._classList == undefined || this._classList == '') {
      return 0;
    } else {
      S.classList.add(this._classList);
    }
    S.innerHTML = this._innerHTML;
    F.appendChild(S); 
    
    
  }
  CLEAR() {
    F.style.display = "none";
  }
  HIDE() {
    S.style.display = "none";
  }

  SHOW() {
    S.style.display = 'none';
  }
  REMOVE(type) {

    let F = $(this.container);
    if (type == 'withClass') {
      let S = $('.'+this._classList);
      F.removeChild(S);
    } else {
      F.removeChild($(this._classList));
    }
    
  }
}
// ******************** vars
let nav = new NewToDoc(
  "body",
  "nav",
  "top-bar",
  '<img src="../img/short-logo.png" id="logo"></img><h1>Home</h1><input type="text" placeholder="Search anime here" id="search_bar" list="animes"><img src="../tools/graphics/heart-solid.svg" alt="Favourits" class="fav_heart fav">'
);
let navFav = new NewToDoc(
  "body",
  "nav",
  "top-bar",
  '<img src="../img/short-logo.png" id="logo"></img><h1>Favourites</h1><input type="text" placeholder="Search anime here" id="search_bar" list="animes"><img src="../tools/graphics/close-red.svg" alt="Remove favourites" class="close-btn">'
);
let navEp = new NewToDoc(
  "body",
  "nav",
  "top-bar",
  '<img src="../img/short-logo.png" id="logo"></img><h1>Episods</h1><input type="text" placeholder="Search anime here" id="search_bar" list="animes"><img src="../tools/graphics/home.svg" alt="Home" class="home_btn">'
);
let navEpLight = new NewToDoc(
  "body",
  "nav",
  "top-bar",
  '<img src="../img/logo.png" id="logo"></img><h1>Episods</h1><input type="text" placeholder="Search anime here" id="search_bar" list="animes"><img src="../tools/graphics/light_home.svg" alt="Home" class="home_btn">'
);



const body = $('body');
let mainCont0 = new NewToDoc("body", "div", "main_cont0", "");
let mainCont1 = new NewToDoc("body", "div", "main_cont1", "");
let mainCont2 = new NewToDoc("body", "div", "main_cont2", "");
let mainCont3 = new NewToDoc("body", "div", "main_cont3", "");
let lightModeBtn = new NewToDoc(".top-bar", 'span', 'light_mode_btn', '<img src="../tools/graphics/light_mode_icon.svg"/>');
let darkModeBtn = new NewToDoc(".top-bar", 'span', 'dark_mode_btn', '<img src="../tools/graphics/dark_mode_icon.svg"/>');
let loader = new NewToDoc('body', 'div', 'loader', '<img src="../img/loader.gif"/>');

// TODO check if the obj in local storage or not
// TODO if not then add it


let favs = $className("isFav"); // list of html elements
let notFavs = $className("isNotFav"); // list of html elements
let favList;
let favWindowOpened = false;





function putPosters() {
  for (let i = 0; i < animeListObj.length; i++) {
    window.poster = new NewToDoc(
      ".main_cont1",
      "span",
      "poster",
      `<img src="../img/anime/${animeListObj[i]["img"]}" alt="${
        animeListObj[i]["name"]
      }" class="${animeListObj[i]["class"]}"><h1>${
        animeListObj[i]["name"]
      }</h1><p class='posterType'>${animeListObj[i]["type"]}</p>${fav(
        i,
        animeListObj[i]["isFav"],animeListObj[i].class
      )}`
    );
    window.poster.ADD();
  }
}




function fillFavList() {
  let list = JSON.parse(localStorage.getItem("anime"))
  let favs = 0;
  list.forEach((element,i) => {
    if (element.isFav == true) {
      favs++;
      new NewToDoc(
      ".main_cont2",
      "span",
      "poster",
        `<img src="../img/anime/${element.img}" alt="${element.name}" class="${element.class}"><h1>${element.name}</h1>
      <p class='posterType'>${element.type}</p>${fav(i, element.isFav.value,element.class.value)}`).ADD();
    }

  })
  if (favs == 0) {
    $('.main_cont2').innerHTML += "<div class='empty-fav'><h1>Sorry there is no favourites</h1><h2>please add an anime</h2></div>";
  }
  listenToSpans();


}






function fav(i, fact,classOfFather) {
  if (fact == true) {
    return "<p class='isFav for"+classOfFather+"' id='animeList[" + i + "][4]'>Remove from fav</p>";
  } else {
    return "<p class='isNotFav for"+classOfFather+"' id='animeList[" + i + "][4]'>Add to Fav</p>";
  }
}






function listenToSpans() {
  let favList = JSON.parse(localStorage.getItem("anime"));
  
  body.addEventListener('click', (e) => {
    let clicked = e.target;
      if (clicked.classList.value.includes('isFav')) {
        clicked.classList.remove("isFav");
        clicked.classList.add("isNotFav");
        clicked.innerText = "Add To Fav";
        favList.forEach(element => {
          if (clicked.classList.value.includes("for"+element.class)) {
            console.log(element.class+' is not in fav now')
            element.isFav = false
            localStorage.setItem("anime", JSON.stringify(favList));
            
          }
        })

      } else if (clicked.classList.value.includes('isNotFav')) {
        clicked.classList.remove("isNotFav");
        clicked.classList.add("isFav");
        clicked.innerText = "Remove from fav";
        favList.forEach(element => {
          if (clicked.classList.value.includes("for"+element.class)) {
            console.log(element.class+' is fav now')
            element.isFav = true
            
            localStorage.setItem("anime", JSON.stringify(favList));
          
          }
        })
        
      }
      
  })

  // let posters = $className("poster");
  // posters.forEach((poster,i)=>{
  //   poster.addEventListener("click", (e) => {
  //     let clicked = e.target;
  //     // check if it's the add to fav btn
  //     if (clicked.classList.value.includes("isFav")) {
  //       clicked.classList.remove("isFav");
  //       clicked.classList.add("isNotFav");
  //       clicked.innerText = "Add To Fav";
  //       animeListObj[i]["isFav"] = false
  //     } else if (clicked.classList.value.includes("isNotFav")) {
  //       clicked.classList.remove("isNotFav");
  //       clicked.classList.add("isFav");
  //       clicked.innerText = "Remove Fav";
  //       animeListObj[i]["isFav"] = true
  //     }
  //     localStorage.setItem("anime", JSON.stringify(animeListObj));
  //   });
  // })

}




// function listenToSpans() {
//   let posters = $className("poster");
//   for (let i = 0; i < posters.length; i++) {
//     posters[i].addEventListener("click", (e) => {
//       let clicked = e.target;
//       // check if it's the add to fav btn
//       if (clicked.classList.contains("isFav")) {
//         clicked.classList.remove("isFav");
//         clicked.classList.add("isNotFav");
//         clicked.innerText = "Add To Fav";
//         animeListObj[i]["isFav"] = false
//       } else if (clicked.classList.contains("isNotFav")) {
//         clicked.classList.remove("isNotFav");
//         clicked.classList.add("isFav");
//         clicked.innerText = "Remove Fav";
//         animeListObj[i]["isFav"] = true
//       }
//       localStorage.setItem("anime", JSON.stringify(animeListObj));
//     });
//   }
// }





function listenToHeart() {

  $(".fav_heart").addEventListener("click", (e) => {
    $('body').innerHTML = '';
    navFav.ADD();
    mainCont2.ADD();
    fillFavList();
    // $('.main_cont2').style.display = 'block';
    // favWindowOpened = true;
    manageMode();
    listenToClose();
    listenToImg();
  });
  
}




function listenToClose() {
  let closeBtn = $(".close-btn");
  closeBtn.addEventListener("click", () => {
    // closeBtn.src = "../tools/graphics/heart-solid.svg";
    // closeBtn.classList.remove("close-btn");
    // closeBtn.classList.add("fav_heart");
    $('body').innerHTML = '';
    nav.ADD();
    favWindowOpened = false;
    // $('.main_cont2').style.display = 'none';
    // $('.main_cont1').style.display = 'block';
    mainCont1.ADD();
    putPosters();
    manageMode();
    listenToHeart();
    listenToSpans();
 
    listenToImg();
  });
}


function listenToHome() {
  $('.home_btn').addEventListener('click', (e) => {
    body.innerHTML = '';
    nav.ADD();
    mainCont1.ADD();
    putPosters();
    manageMode();
    listenToHeart();
    listenToSpans();
    listenToImg();
  })
}


// this function used to get pressing class from anime image

function listenToImg() {
  // console.log('hello from the fav list img listener')
  $('body').addEventListener('click', (e) => {
    animeListObj.forEach((element, index) => {
      let classOfClicked = e.target.classList.value;
      if (classOfClicked == element.class) {
        creatEpisodsPageOf(index);
      } else if (classOfClicked.includes('Fav')) {
        
      }
    })
  })
  
}


function creatEpisodsPageOf(animeIndex) {
  $('body').innerHTML = '';
  let ep = alo[animeIndex].epLenth;
  function putEp() {
    if (ep > 1) {
      return (ep + '</br>episods')
    } else if (ep == 0) {
      return 'Coming soon..'
    }
    else {
      return (ep + '</br>episod')
    }
  };
  mainCont3.ADD();
  navEp.ADD();
  
  let infoErea = new NewToDoc('.main_cont3', 'div', 'info_earea','');
  let cover = new NewToDoc('.info_earea', 'div', 'main_cover', '<img src ="../img/anime/' + alo[animeIndex].img + '"></img>');
  // let infoBackImg = `var(--linear),  url('../img/covers/${alo[animeIndex].img}')center 100% `;
  let info = new NewToDoc('.info_earea', 'div', 'info_text', '<h1>' + alo[animeIndex].name + '</h1>');
  let placeOfP = new NewToDoc('.info_text', 'div', 'placeOfPar', '');
  let numberOfEps = new NewToDoc('.placeOfPar', 'p', 'episods', putEp());
  let typeOfAnime = new NewToDoc('.placeOfPar', 'p', 'specification', 'Type </br>'+ alo[animeIndex].spc);
  let about = new NewToDoc('.info_text', 'fieldset', 'about', '<legend>Story</legend>' + MarkInText(alo[animeIndex].about,alo[animeIndex].name)+'');
  infoErea.ADD();
  cover.ADD();
  info.ADD();
  placeOfP.ADD();
  numberOfEps.ADD();
  typeOfAnime.ADD();
  about.ADD();
  manageMode();
  listenToHome();
  // $('.main_cont3').style.background = infoBackImg;
}






function MarkInText(text, keys) {
  let Keys = keys.toLowerCase();
  let textInList = (text.split(' ')||text.split('  ')  || text.split(',') || text.split(' ,')|| text.split(', ')||text.split('.') ||text.split(' .') || text.split('. ') );
  let keyWords = (Keys.split(' ')|| Keys.split(',')|| Keys.split(', ')|| Keys.split('. '));
  let keyWordsP =[];
  keyWords.forEach(element => {
    let newElement = element + 's';
    keyWordsP.push(newElement);
  });
  let notWanted = ['in' || 'or' || 'of' || 'is'];
  let RealText = '';
  textInList.forEach(textElement => {
    if ((keyWords.includes(textElement.toLowerCase()) || keyWordsP.includes(textElement.toLowerCase()) )&& textElement.length >=3 ) {
        RealText += '<span class="marked">' + textElement + '<span>'+' ';
        
      } else {
        RealText += textElement+' ';
      }
})

  return RealText;
}





function listenToLightMode() {
if ($('.light_mode_btn') == null) {
    return 0;
} else {
  $('.light_mode_btn').addEventListener('click', () => {
    localStorage.setItem("Mode", 'light');
    
    $('style').innerHTML = ':root {' +
      '--backgroud_color: #fff;' +
      '--text_color: #000;' +
      '--linear:linear-gradient(to bottom,rgba(255, 255, 255, 0.5),var(--backgroud_color));' +
      '--spc_color1: rgb(255, 0, 157);' +
      '--spc_color2: rgb(0, 255, 106);' +
      '}';
    manageMode();
  })
  }
}




function listenToDarkMode() {
  if ($('.dark_mode_btn') == null) {
    return 0;
  } else {
    $('.dark_mode_btn').addEventListener('click', () => {
      localStorage.setItem("Mode", 'dark');
      
      $('style').innerHTML = ':root {' +
        '--backgroud_color: #000;' +
        '--text_color: #fff;' +
        '--linear:linear-gradient(to bottom,rgba(0, 0, 0, 0.5),var(--backgroud_color));'+
        '--spc_color1: rgb(255, 0, 157);' +
        '--spc_color2: rgb(0, 255, 106);' +
        '}';

        manageMode();
    })
    }
    
  }



function navBackgroundAdapt(mode) {
  if (mode == 'dark') {
    check($('.home_btn'), () => {
        
      })
      check($('.top-bar'),navBarBackDark())
    function navBarBackDark() {
        $('.top-bar').style.backgroundImage = 'linear-gradient(0deg,rgba(0, 0, 0, 0),var(--backgroud_color));'
      }
  } else {
    check($('.top-bar'), 
      navBackLight()
    )
    function navBackLight() {
      $('.top-bar').style.backgroundColor = 'var(--backgroud_color)';
    }
  }

}



function manageMode() {
  if (localStorage.getItem("Mode") == 'dark') {
    
    if ($('.dark_mode_btn') == null) {
      lightModeBtn.ADD();
      // navBackgroundAdapt(window.Mode)
    listenToLightMode();
    } else {
      darkModeBtn.REMOVE(withClass);
      lightModeBtn.ADD();
      // navBackgroundAdapt(window.Mode)
      listenToLightMode();  
    }
    
  } else {
    if ($('.light_mode_btn') != null) {
      lightModeBtn.REMOVE(withClass);
      darkModeBtn.ADD();
    // navBackgroundAdapt(window.Mode)
    listenToDarkMode();
    } else {
      darkModeBtn.ADD();
    // navBackgroundAdapt(window.Mode)
    listenToDarkMode();
    }
    
    
}
}





function Traiting() {

  nav.ADD();
  mainCont1.ADD();
  putPosters();
  manageMode();
  listenToSpans();
  listenToHeart();
  listenToImg();

}




// *****************running programme
function running() {
    if (localStorage.getItem('Mode') == 'dark') {
    $('style').innerHTML = ':root {' +
        '--backgroud_color: #000;' +
        '--text_color: #fff;' +
        '--linear:linear-gradient(to bottom,rgba(0, 0, 0, 0.5),var(--backgroud_color));'+
        '--spc_color1: rgb(255, 0, 157);' +
        '--spc_color2: rgb(0, 255, 106);' +
        '}';
  } else {
        $('style').innerHTML = ':root {' +
      '--backgroud_color: #fff;' +
      '--text_color: #000;' +
      '--linear:linear-gradient(to bottom,rgba(255, 255, 255, 0.5),var(--backgroud_color));' +
      '--spc_color1: rgb(255, 0, 157);' +
      '--spc_color2: rgb(0, 255, 106);' +
      '}';
  }
  mainCont0.ADD();
  new NewToDoc(
    ".main_cont0",
    "div",
    "alert",
    'For more Experience press F11 key</br><button id="ok_btn">Start</button>'
  ).ADD();
  
  $("#ok_btn").addEventListener("click", () => {

    mainCont0.REMOVE(withClass);
    Traiting();
    

  });
  $('#ok_btn').click()
  // document.onclick = () => {
  //   favWindowOpened ? listenToClose() : listenToHeart();
  // };

  
}



running();
