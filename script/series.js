const serie = [
      {
        titulo:"The Umbrella Academy",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg",
        descricao: "Irmãos com poderes extraordinários se reencontram após a morte do pai e descobrem segredos surpreendentes da família, além de uma ameaça à humanidade.",
    },
      {
        titulo:"One Piece:A Série",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/aesLt9fsKSA6KCgGxA60VVxjtLk.jpg",
        descricao:"O jovem pirata Monkey D. Luffy veste o chapéu de palha e, com sua tripulação atrapalhada, zarpa em uma jornada épica nesta adaptação em live-action do popular mangá."
    },
      {
        titulo:"A Concierge Pokémon",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/ySSivX1z5n7ALFF0082sbsCasK2.jpg",
        descricao:"Conheça o Pokémon Resort, o refúgio perfeito para Pokémons relaxarem e se divertirem. Qual será o hóspede fofo que vai ganhar o coração da nova concierge Haru?",
    },
    {
        titulo: "Transformers Prime",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/ilOKsGRHYc78R2tSMusAd3xGJWq.jpg",
        descricao: "Team Prime vive na Terra, três anos após seu último confronto com Decepticons . Autobot Central Command está localizado em um silo de mísseis convertido em Nevada fornecido pelo governo dos Estados Unidos, com o agente especial William Fowler atuando como sua ligação. No entanto, a presença de Transformers on Earth não é geralmente conhecida entre a população civil. Quando os Decepticons resurgem, os Autobots levam três testemunhas adolescentes, Jack Darby , Miko Nakadai e Raf Esquivel sob sua proteção. Megatron retorna tendo descoberto a Dark Energon , que lhe concede o poder de ressuscitar os mortos, mas está ferido, com Starscream assumindo o comando em sua ausência. Após o avivamento de Megatron, Starscream foge depois de mostrar repetidamente que ele é incapaz de provar sua lealdade ao líder Decepticon.",
    },
    {
        titulo: "Mononoke",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/r3S04UDFVaDRC6fOSjLfvrDhpvd.jpg",
        descricao:"A história se concentra na jornada de um vendedor de remédios que lida com inúmeros espíritos, ou Mononokes, durante o Japão feudal. Em seus combates contra essas forças ocultas, o vendedor conta com uma série de ferramentas e seu vasto conhecimento sobre o mundo sobrenatural. No entanto, ele precisa descobrir a Forma, a Verdade e o Arrependimento do Mononoke para poder desembainhar sua espada de exorcismo e eliminá-lo.",
    },
      {
        titulo: "Helluva Boss",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/dgtuBsG2F4cGiumtHBKDru7PW9j.jpg",
        descricao:"Esta comédia animada para adultos acompanha as desventuras, peripécias e relacionamentos dos Incríveis Matadores Profissionais, ou IMP, para abreviar. Um bando de demônios assassinos do Inferno que ganha a vida matando pessoas na Terra."
    },
]

const listaSerie = document.getElementById
("listaSerie");
function mostrarSerie(lista){
    listaSerie.innerHTML = ""
    lista.forEach(serie => {
        listaSerie.innerHTML += `
            <div class="col-md-4">
                <div class="card card-serie h-100">
                    <img src="${serie.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${serie.titulo}</h3>
                         <p>${serie.descricao}</p>
                         <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}, ${serie.descricao}')">Ver detalhes</button>
                        </div>
                </div>
            </div> 
        `
    });
}

mostrarSerie(serie)

function verDetalhes(titulo, descricao) {
    swal.fire({
        title: titulo,
        Text: descricao,
        icon: "info"
    })
} 