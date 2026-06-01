const filmes = [
    {
        titulo: "Backroms",
        imagem:"https://www.themoviehttps://media.themoviedb.org/t/p/w300_and_h450_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpgdb.org/t/p/w600_and_h900_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpg",
        descricao: "Um Não-Lugar",
    },
    {
        titulo: "A Lenda",
        imagem:"https://www.https://media.themoviedb.org/t/p/w300_and_h450_face/zWx7qwzT0WDRUaJafnotACJDX3e.jpg.org/t/p/w600_and_h900_face/zWx7qwzT0WDRUaJafnotACJDX3e.jpg",
        descricao:"dos guardiões",
    },
      {
        titulo: "O Pequeno",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/AeWqkAp2bAZEoj1GGd2jLc6R0LD.jpg",
        descricao:"Principe",
    },
      {
        titulo:"O Castelo",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/1hTfaEWktMJPxCk5nZNtK7F86C9.jpg",
        descricao: "Animado",
    },
      {
        titulo:"My Litle pony:",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/kaZPzYhSwf7sUYeX2h1K4BcgCNa.jpg",
        descricao:"O Filme",
    },
      {
        titulo:"Pokémon o Filme:",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/pGcRH4Kgfl9BsLPgezCUQcK17IU.jpg",
        descricao:"Hoopa e o Duelo Lendário ",
    },
    {
        titulo:"Internet",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/7kyQPkPj6YDYzX4oMymtoiTzLx2.jpg",
        descricao:"O Filme",
    },
]

const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes(lista) {
    listaFilmes.innerHMTL = ""
    lista.array.forEach(filme => {
        listaFilmes.innerHTML += `
         <div class=col-md-4">
         <div class="card card-filme h-100">
          <img src="filme.imagem}" class="card-img-top">
          <div class="card-body">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
          button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver Detalhes</button>

          </div>
          </div>
          </div>
        `
    })
}

