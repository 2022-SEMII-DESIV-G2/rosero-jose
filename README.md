# Presentación del Estudiante

![Perfil de José Rosero!](https://i.pinimg.com/originals/2e/45/14/2e45149ce1f55f5fd532cf8426a9b31c.gif)

## Mi nombre completo es **José Rosero** y tengo 26 años.

### Entre mis hobbies están ver videos, Leer e investigar.

### Actualmente soy estudiante de la carrera de Licenciatura en Desarrollo de Software.

Como parte del Curso de Desarrollo de Sofware IV espero aprender sobre la programacion Web, tanto Frontend como Backend y como trabajan en conjunto, así como reforzar conocimientos y competencias en las estructuras de **HTML, CSS y JAVASCRIPT**. Por mi parte pretendo dar toda mi dedicacion y comprension al curso para un completo entendimiento.
En un futuro deseo ser un profesional en el área de programación Frontend con dominio de Backend y algo de conocimiento de DBA; pero en si enfocarme en la programación Web.

### Lo Aprendido en el Semestre:

### Github

``git clone``
``git add``
``git commit``
``git branch``
``git push``

### HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hola Mundo
</body>
</html>
```

### CSS

```CSS
body, html {
  background-color: white;
  min-height: 99vh;
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px 0 0;
}
```

### JavaScript

```JS
function contar() {
  if (document.getElementById('text').value == "" || document.getElementById('text').value == " "){
    document.getElementById('subtitulo-dos').innerHTML = "No hay letras";
  }
  else{
    let cont = {};
    llamar().replace(/\S/g, function(p){
        cont[p] = (isNaN(cont[p]) ? 1 : cont[p]+1);
    });
    document.getElementById('resultado-llave').innerHTML = Object.keys(cont) + ",";
    document.getElementById('resultado-valor').innerHTML = Object.values(cont);
    iner();
    return cont;
  }
}
```
