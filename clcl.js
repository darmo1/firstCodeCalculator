// Aquí capturo los elementos del HTML Al JavaScript

var cero = document.getElementById('cero');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

//operadores

var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
var division = document.getElementById('division');

//Resultado

var resultado = document.getElementById('resultado');

var display = document.getElementById('displaycito');
var displaydos = document.getElementById('displaycitodos');

//Estado inicial - Aqui la calculadora está en cero.

//necesito que cuando se apriete cualquier valor se refleje en el display

    cero.addEventListener('click', function(){
    let actual = display.innerHTML;
    let clickuno = cero.value; 
    let resultado = parseFloat(actual+clickuno)
    display.innerHTML= resultado;
})
    uno.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clickuno = uno.value; 
        let resultado = parseFloat(actual+clickuno)
        display.innerHTML= resultado;
    })

    dos.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clickdos = dos.value; 
        let resultado = parseFloat(actual+clickdos)
        display.innerHTML= resultado;
    })

    tres.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clicktres = tres.value; 
        let resultado = parseFloat(actual+clicktres)
        display.innerHTML= resultado;
    })
    cuatro.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clickcuatro = cuatro.value; 
        let resultado = parseFloat(actual+clickcuatro)
        display.innerHTML= resultado;
    })
    cinco.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clickcinco = cinco.value; 
        let resultado = parseFloat(actual+clickcinco)
        display.innerHTML= resultado;
    })
    seis.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clickseis = seis.value; 
        let resultado = parseFloat(actual+clickseis)
        display.innerHTML= resultado;
    })
    siete.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clicksiete = siete.value; 
        let resultado = parseFloat(actual+clicksiete)
        display.innerHTML= resultado;
    })
    ocho.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clickocho = ocho.value; 
        let resultado = parseFloat(actual+clickocho)
        display.innerHTML= resultado;
    })

    nueve.addEventListener('click', function(){
        let actual = display.innerHTML;
        let clicknueve = nueve.value; 
        let resultado = parseFloat(actual+clicknueve)
        display.innerHTML= resultado;
    })

//Los operadores
var sumita = suma.addEventListener('click', function(){
    var captureDisplayOne= parseFloat(display.innerHTML);
    var captureDisplayTwo= parseFloat(displaydos.innerHTML);
    var sumOfDisplay = captureDisplayOne + captureDisplayTwo;   
    displaydos.innerHTML = sumOfDisplay;
    display.innerHTML = " ";
  })

  
  resta.addEventListener('click', function(){
    var captureDisplayOne= parseFloat(display.innerHTML);
    var captureDisplayTwo= parseFloat(displaydos.innerHTML);
    
           if(captureDisplayTwo==0){
            var result =  (captureDisplayOne + captureDisplayTwo)
            }
            
            else  {
            var result = (captureDisplayTwo - captureDisplayOne)
            }
    displaydos.innerHTML = result;
    display.innerHTML= " ";  
  })
  
  multiplicacion.addEventListener('click', function(){
    var captureDisplayOne= parseFloat(display.innerHTML);
    var captureDisplayTwo= parseFloat(displaydos.innerHTML);
    
           if(captureDisplayTwo==0){
            var result =  (captureDisplayOne + captureDisplayTwo)
            }
            
            else  {
            var result = (captureDisplayTwo * captureDisplayOne)
            }
    displaydos.innerHTML = result;
    display.innerHTML= " ";  
  })

  division.addEventListener('click', function(){
    var captureDisplayOne= parseFloat(display.innerHTML);
    var captureDisplayTwo= parseFloat(displaydos.innerHTML);
    
           if(captureDisplayTwo==0){
            var result =  (captureDisplayOne + captureDisplayTwo)
            }
            
            else if(captureDisplayOne==0){
                var result =  ('SyntaxError')
                }
            else  {
            var result = (captureDisplayTwo / captureDisplayOne)
            }
    displaydos.innerHTML = result;
    display.innerHTML= " ";  
  })

 
  

  
