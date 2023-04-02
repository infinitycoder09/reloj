let img = document.getElementById('myimg');
let ani = document.getElementById('animal');

function cambiar(){
    if (img.src.match("on")){
        img.src = "/bombillaoff.jpg";
        ani = document.getElementById("animal").innerHTML = "Caballo";
    } else {
        img.src = "/bombillaon.png";
        ani = document.getElementById("animal").innerHTML = "Conejo";
    }
}
