(async ()=>{
    const { data } = await axios.get('http://localhost:4567/html/piramides');
    
    let tam = Object.keys(data.cars).length;
    for(let i = 0; i < tam; i++){
      const dir = document.createElement("a")
      dir.setAttribute("href",`detail.html?q=${data.cars[i].id}`)
      dir.setAttribute("id", i);
      dir.className += "dir"
      document.getElementById("piramides").appendChild(dir);
      const piramide = document.createElement("button");
      let llave = Object.keys(data.cars[0])
      let n = llave[0]
      piramide.innerHTML += n.charAt(0).toUpperCase() + n.slice(1)
      piramide.innerHTML += " " + data.cars[i].id
      document.getElementById(i).appendChild(piramide);
    }
  })();