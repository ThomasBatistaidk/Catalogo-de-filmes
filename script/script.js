const filmes = [
    {
        titulo: "Backroms Um Não-Lugar",
        imagem:"https://www.themoviedb.org/t/p/w300_and_h450_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpgdb.org/t/p/w600_and_h900_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpg",
        descricao: "Em 1990, o vendedor de móveis Clark descobre em sua loja um portal para os 'Backrooms', um labirinto infinito de escritórios surreais. Fascinado, ele convence sua funcionária Kat e o namorado dela a mapearem as anomalias do local. Após o desaparecimento de Clark, sua terapeuta, a Dra. Mary Kline, mergulha na dimensão impossível para resgatá-lo, sendo forçada a confrontar seus próprios traumas enquanto busca uma saída.",
    },
    {
        titulo: "A Lenda dos guardiões",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/zWx7qwzT0WDRUaJafnotACJDX3e.jpg.org/t/p/w600_and_h900_face/zWx7qwzT0WDRUaJafnotACJDX3e.jpg",
        descricao:"Soren é uma corujinha fascinada pelas histórias épicas contadas pelo pai sobre os Guardiões de Ga’Hoole, míticos guerreiros alados que lutaram em uma grande batalha para salvar a espécie de uma grande ameaça. Por outro lado, seu irmão Kludd zomba dele e tem ciúmes, procurando sempre atrair a atenção do pai. Um dia os dois são capturados e caem nas mãos dos Puros, corujas do mal que querem dominar o Reino do Oeste e a Grande Árvore.",
    },
      {
        titulo: "O Pequeno Principe",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/AeWqkAp2bAZEoj1GGd2jLc6R0LD.jpg",
        descricao:"A Pequena Garota encontra o excêntrico Aviador, que a introduz ao mágico mundo do Pequeno Príncipe. Neste mundo em que tudo é possível, a Garota aprende a redescobrir sua infância.",
    },
      {
        titulo:"O Castelo Animado",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/1hTfaEWktMJPxCk5nZNtK7F86C9.jpg",
        descricao: "Sophie, uma jovem chapeleira, é transformada em uma mulher idosa por uma bruxa que entra em sua loja e a amaldiçoa. Ela encontra um mago chamado Howl e se vê envolvida em sua resistência em lutar pelo rei.",
    },
      {
        titulo:"Transformers ONE: O Início",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/9yPuNAZQd5m5iKpQV2MDAfcwW9N.jpg",
        descricao:"Veja a história não contada da origem de Optimus Prime e Megatron e descubra como estes dois companheiros de luta se tornaram inimigos mortais e mudaram para sempre o destino de Cybertron.",
    },
      {
        titulo:"Pokémon o Filme:Hoopa e o Duelo Lendário ",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/pGcRH4Kgfl9BsLPgezCUQcK17IU.jpg",
        descricao:"Cem anos atrás, a cidade do deserto “Désser City” foi severamente danificada por uma batalha épica entre os Pokémon. A batalha foi iniciada devido a um Pokémon específico. No entanto, o Pokémon foi selado por alguém, e a cidade voltou a ser calma e normal como era antes até os dias de hoje. Ash, Pikachu, Serena, Clemont e Bonnie continuam a sua jornada, e durante este perído encontram o Pokémon mítico Hoopa, que carrega anéis onde tem a capacidade de invocar tudo até mesmo Pokémon Lendários.",
    },
    {
        titulo:"Internet O Filme",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/7kyQPkPj6YDYzX4oMymtoiTzLx2.jpg",
        descricao:"Internet – O Filme traz às telas do cinema a espontaneidade das redes sociais, com suas principais estrelas. Em 8 esquetes, a comédia apresenta diferentes tramas que dialogam com situações recorrentes do dia a dia. A partir de um encontro em uma convenção de youtubers, os personagens vivenciam momentos de descobertas, ira, equívocos, raiva, inveja e confusões em busca pela fama.",
    },
]

const listaFilmes = document.getElementById
("listaFilmes");
function mostrarFilmes(lista){
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${filme.titulo}</h3>
                         <p>${filme.descricao}</p>
                         <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}, ${filme.descricao}')">Ver detalhes</button>
                        </div>
                </div>
            </div> 
        `
    });
}

mostrarFilmes(filmes)

function verDetalhes(titulo, descricao) {
    swal.fire({
        title: titulo,
        Text: descricao,
        icon: "info"
    })
} 