//define language reload anchors//
var dataReload = document.querySelectorAll("[data-reload]");


//language translations//

var language = {
    eng: {
        welcome: "Welcome everyone!"
    },

    ita: {
        welcome: "Benvenuti a tutti!"
    }

};

//define language via window hash//

if (window.location.hash) {
    if (window.location.hash === "#ita") {
        hi.textContent = language.ita.welcome;
    }

}

//define language reload onclick illiteration

for (i = 0; i <= dataReload.length; i++) {

  dataReload[i].onclick = function() {
     location.reload(true); 
  };
}