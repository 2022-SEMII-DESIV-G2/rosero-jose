//-------------------- Mark 9 / La mas Optimizada -------------------

async function f ()  {
   
    await axios.post('http://localhost:4567/html/piramides', { recorrido: JSON.stringify(recorrido()), piramide: JSON.stringify(generarPiramide()) });
   
};
(async ()=>{
    const { data } =  await axios.get('http://localhost:4567/html/piramides');
    console.log(JSON.stringify(data))

    console.log(data)
    // render(data.cars);
})();
//Función que obtiene el tamaño de la pirámide
function llamarValores(){
    if (document.getElementById('textVal').value == "" || document.getElementById('textVal').value == " "){
        document.getElementById('error').innerHTML = "*Ingrese los Valores de la Piramide";
    }
    else{
    let i;
    let x = document.form;
    i = x.textVal.value;
    return i.toString();  
    }
}

//Función que obtiene el tamaño de la pirámide
function llamarTamano(){
    if (document.getElementById('textTam').value == "" || document.getElementById('textTam').value == " "){
        document.getElementById('error').innerHTML = "*Ingrese El Tamaño de la Piramide";
    }
    else{
    let i;
    let x = document.form;
    i = x.textTam.value;
    return i.toString();  
    }
}

//Función que controlo los pisbles errores en la creación de la pirámide 
function controlCalidad(piramide,arr,tam){
    let valido = true;
    let dif = Object.keys(arr);
    if(piramide[tam-1].length == 0){
        document.getElementById('error').innerHTML = "*El tamaño de la piramide no coincide con el establecido / Cambie el tamaño o agregue mas valores";
        valido = false;
    }
    else if(dif.length > tam){
        document.getElementById('error').innerHTML = "*Sobran " + (dif.length - tam) + " Valor(es) / Cambie el tamaño o elimine valores";
        valido = false;
    }
    else if(dif.length < tam ){
        document.getElementById('error').innerHTML = "*Faltan " + (tam - dif.length) + " Valor(es) / Cambie el tamaño o agregue valores";
        valido = false;
    }
    else{
        valido = true;
    }
    //console.log(valido)
    return valido;
}

//Función que genera el array anidado de la pirámide 
function generarPiramide(){
    let tam = Number(llamarTamano());
    let arr = llamarValores().split(' ').map(x => Number(x));
    let piramide = []
    for(var i = 0; i < tam; i++){
        for(var j = 0; j < i; j++){
            arr.shift();
        }
        piramide.push(arr.slice(0, i + 1 ));
    }
    //console.log(piramide);
    if(controlCalidad(piramide,arr,tam)){
        return piramide;
    }
}

//Funcion de calcula la suma con mayor peso 
function sumMaxPeso() {
    let piramide = generarPiramide()
    let iteraciones = [];
    let piramideClon = Object.assign([],piramide);
    do{
        var ultimaFila = piramideClon.pop()
        iteraciones.unshift (ultimaFila);
        var supFila = piramideClon.pop();
        for (var i = 0; i < supFila.length; i++){
            supFila[i] = Math.max(supFila[i] + ultimaFila[i], supFila[i] + ultimaFila[i + 1]);
        }
        piramideClon.push(supFila);
        
    } while (piramideClon.length > 1);
    document.getElementById('suma').innerHTML = "Suma: " + Object.values(supFila);
    iteraciones.unshift(supFila);
    return iteraciones;
}

//Función que ontiene los indices del recorrido y sus valores
function recorrido(){
    let piramide = generarPiramide();
    let indices = [0];
    let iteraciones = sumMaxPeso();
    let dir = 0
    let recorrido = []
    for(let i = 1; i < iteraciones.length; i++){
        dir = iteraciones[i].indexOf(Math.max(iteraciones[i][dir], iteraciones[i][dir + 1]), dir);
        indices.push(dir);
    }
    //console.log(indices);
    for(var j = 0; j < piramide.length; j++){
        recorrido.push(piramide[j][indices[j]]);
    }
    //console.log(recorrido);
    document.getElementById('subtituloDos').innerHTML = "Resultado";
    document.getElementById('recorrido').innerHTML = "Recorrido: " + Object.values(recorrido);
    document.getElementById('error').innerHTML = "";
    return indices;
}

// Funcion para eliminar los datos 
function eliminar() {
    document.getElementById('textTam').value = "";
    document.getElementById('textVal').value = "";
    document.getElementById('subtituloDos').innerHTML = "";
    document.getElementById('recorrido').innerHTML = "";
    document.getElementById('suma').innerHTML = "";
    document.getElementById('error').innerHTML = "";
    var container = document.getElementById('contenedorPiramide');
    let div = Array.prototype.slice.call(document.getElementsByClassName("nivel"), 0);
    for(element of div){
        console.log(element);
        element.remove();
    }  
}

//Funcion que construye el diseño de la pirámide
function construirPiramide(){
    let indices = recorrido();
    let piramide = generarPiramide();
    for(var i = 0; i < piramide.length; i++){
        const nivel = document.createElement("div");
        nivel.setAttribute("id", i);
        nivel.className += "nivel"
        document.getElementById("contenedorPiramide").appendChild(nivel);
        for(var j = 0; j <= i; j++){
            const etiqueta = document.createElement("p");
            etiqueta.className += "numero "
            if(j == indices[i]){
                etiqueta.className += "recorridoPiramide";
            }
            etiqueta.innerHTML = (piramide[i][j])
            document.getElementById(i).appendChild(etiqueta);
        }
    }
    
    f();
}

//Funcion para generar datos random para crear una pirámide (1-99)
function random() {
    let c = 0;
    let n = ""
    let tam = Number(llamarTamano());
    for(var i = 0; i < tam; i++){
        c += i+1
    }
    for(var j = 0; j < c; j++){
        n += Math.floor(Math.random()*99)+1
        if(j < c-1){
           n += " "  
        }
    }
    //console.log(n)
    document.getElementById('textVal').value = n;
    return n;
}

