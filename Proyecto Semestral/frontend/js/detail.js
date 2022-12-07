// (async ()=>{
//     const response = document.querySelector('.response');
//     const urlParams = new URLSearchParams(window.location.search);
//     const { data } = await axios.get(`http://localhost:4567/cars/${urlParams.get("q")}`);
//     response.innerHTML = JSON.stringify(data);
//   })();

  (async ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const { data } = await axios.get(`http://localhost:4567/html/piramides/${urlParams.get("q")}`);;
    let indices = JSON.parse(JSON.stringify(data)) ;
    let piramide = JSON.parse(JSON.stringify(data)) ;
    let tam = JSON.parse(piramide.piramide)
    console.log(Object.keys(tam).length)
    document.getElementById("titulo").innerHTML += data.id;
    for(var i = 0; i < Object.keys(tam).length; i++){
        const nivel = document.createElement("div");
        nivel.setAttribute("id", i);
        nivel.className += "nivel"
        document.getElementById("response").appendChild(nivel);
        for(var j = 0; j <= i; j++){
            const etiqueta = document.createElement("p");
            etiqueta.className += "numero "
            if(j == JSON.parse(indices.recorrido)[i]){
                etiqueta.className += "recorridoPiramide";
            }
            etiqueta.innerHTML = (JSON.parse(piramide.piramide)[i][j])
            document.getElementById(i).appendChild(etiqueta);
        }
    }
  })();