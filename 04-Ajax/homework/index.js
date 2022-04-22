//Camilo

function limpiar(tipoDeLimpieza) {
  if (tipoDeLimpieza === "contenedor") {
    $("#amigo").empty();
    $("#lista").empty();
  } else if (tipoDeLimpieza === "input") {
    $("#inputDelete").val("");
    $("#input").val("");
  }
}

function mostrarAmigos() {
  $.ajax({
    url: "http://localhost:5000/amigos",
    type: "get",
    success: (info) => {
      info.forEach(function (amigo) {
        let ul = document.getElementById("lista");
        let nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = `ID: ${amigo.id} Nombre: ${amigo.name}`;
        nuevoLi.id = amigo.id;
        ul.appendChild(nuevoLi);
      });
    },
  });
}

function buscarAmigo(id) {
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "get",
    success: (info) => {
      $("#amigo").append(`<p>${info.name} </p>`);
      $("#amigo").append(`<p>${info.email} </p>`);
      limpiar("input");
      mostrarAmigos();
    },
    error: (error) => {
      if (error) {
        alert("El id del amigo buscado no existe");
        limpiar("input");
      }
    },
  });
}

function borrarAmigo(id) {
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "delete",
    success: (info) => {
      alert("amigo eliminado con exito");
      $("#lista").empty();
      limpiar();
      mostrarAmigos();
    },
  });
}

$("#boton").click(() => {
  limpiar("contenedor");
  mostrarAmigos();
});

$("#search").click(() => {
  let id = $("#input").val();
  if (!id) return alert("El campo de busqueda esta vacio");
  limpiar("contenedor");
  buscarAmigo(id);
});

$("#delete").click(() => {
  let id = $("#inputDelete").val();
  if (!id) return alert("El campo de borrado esta vacio");
  borrarAmigo(id);
});

$("#enviarForm").click(() => {
  let name = $("#inputDelete").val();
  let age = $("#inputDelete").val();
  let email = $("#inputDelete").val();
  let dataAEnviar = {
    name,
    age,
    email,
  };

  $.post(`http://localhost:5000/amigos`, dataAEnviar, function (data) {
    console.log(data);
  });
});
