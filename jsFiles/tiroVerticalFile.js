//Declaramos los sliders
var masaSlider;
var velSlider;
var gravSlider;
//Declaramos las salidas de información sobre los sliders
var outMasa;
var outVel;
var outGrav;


function tiroVerticalInitialize () {
    //Inicializamos las salidas de información 
    var outMasa = document.getElementById("showMasa");
    var outVel = document.getElementById("showVelocidad");
    var outGrav = document.getElementById("showGravedad");
}


function actSliderMasa () {

}

function actSliderVelocidad () {

}

function actSliderGravedad () {

}



// Con las siguientes declaraciones vamos a preparar la informacion necesaria para crear los gráficos

function valueAct() {
    console.log("NUEVA ACTUALIZACION");
    //Vi:g=T
    //vf = vi-g.t
    //vf-vi= -g.t
    //-vi:-g = t
    //tiempo = -velocidadInicial : -gravedad
    //se cancelan los signos asi que es lo mismo ponerlos como positivos o negativos
    var tiempoTotal = velSlider.value/gravSlider.value;
    //Y = Yo+Vi.T-1/2.G.T.T
    //Y = 0+Vi.T-1/2.G.T.T
    //Y = Vi.T-1/2.G.T.T
    var alturaMaxima = velSlider.value*tiempoTotal-(1/2)*gravSlider.value*tiempoTotal*tiempoTotal;
    //var energiaPotencial = masaSlider.value*gravSlider.value*
    var valuesForChart = complexCalc(tiempoTotal,alturaMaxima);
    drawChart(valuesForChart);
}

function complexCalc(tiempoTotal,alturaMaxima){
    var tiempoIndividual = tiempoTotal/4;

    

    for (var i=1;i<=4;i++) {
        tiempoAct = tiempoIndividual*i;
        velocidadAct = velSlider.value-gravSlider.value*tiempoAct;
        alturaAct = velSlider.value*tiempoAct-(1/2)*gravSlider.value*tiempoAct*tiempoAct;

        var valueObject = {
            velocidadIni : Number(velSlider.value), 
            velocidad : velocidadAct,
            tiempo : tiempoAct,
            altura : alturaAct
        }
        
        switch (i) {
            case 1:
                values.value1 = valueObject;
            break;
            case 2:
                values.value2 = valueObject;
            break;
            case 3:
                values.value3 = valueObject;
            break;
            case 4:
                values.value4 = valueObject;
            break;
        
        }
    }

    return values;
}

