let html = document.getElementById('tiempo');
let dat = document.getElementById('dat');
let tanda = document.getElementById('day')

setInterval(function(){
     let tiempo = new Date();
    
     hora = tiempo.getHours();
     Minut = tiempo.getUTCMinutes();
     segund = tiempo.getSeconds();
     
   // ! da formato de 12 horas a la hora y da Pm o Am segun la hora

     let ampm = "AM";
     if (hora >= 12 ){
        hora -= 12;
        ampm = "PM"
     }

     // ! da formato de dos digitos a la hora, minutos y segundos

     str_hora = new String(hora);
     if (str_hora.length == 1) {
        hora = "0" + hora;
     }

     srt_minut = new String(Minut);
     if (srt_minut.length == 1) {
       Minut = "0" + Minut;
     }

     str_segund = new String(segund)
     if(str_segund.length == 1 ){
        segund = "0" + segund;
     }

     
      // !  da la fecha actual year, moth, day 

      let data = new Date();
      dia = data.toLocaleDateString();

      str_dia = new String(dia)
      if (str_dia.length == 1) {
         dia = "0" + dia;
      }

      // ?  MAÑANA, TARDE O NOCHE ?
     
      if ( ampm == "AM" && hora >= 6) {
         document.getElementById('day').innerHTML = "MAÑANA";
      } else if (ampm == "PM" && hora <= 6) {
         document.getElementById('day').innerHTML = "TARDE";
      } else if ( ampm == "PM" && hora >= 7) {
         document.getElementById('day').innerHTML = "NOCHE";
      } else if (ampm == "AM" && hora <= 6) {
         document.getElementById('day').innerHTML = "MADRUGADA"
      } else {
         document.getElementById('day').innerHTML = "Algo Va mal Joel";
      }

    
   
      
      dat.innerHTML = dia;
      html.innerHTML = hora+" : "+Minut+" : "+segund+"  "+ampm;

}, 1000);