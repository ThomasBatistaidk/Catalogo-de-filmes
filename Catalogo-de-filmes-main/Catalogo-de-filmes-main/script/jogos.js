const jogos = [
{
    titulo:"Cult Of The Lamb",
    imagem:"https://notadogame.com/uploads/game/cover/250x/62ffc5c0e90f4.jpg",
    descricao:"Crie seu próprio culto em uma terra de falsos profetas, aventurando-se por regiões misteriosas e diversas para criar uma comunidade fiel de Seguidores da floresta e para propagar sua Palavra e se tornar o único culto verdadeiro.",
},
{
    titulo:"Hades",
    imagem:"https://notadogame.com/uploads/game/cover/250x/5c1bd777edd45.jpg",
    descricao:"Na pele do imortal Príncipe do Submundo, você usará os poderes e armas míticas do Olimpo para se libertar das garras do deus dos mortos, enquanto se fortalece e descobre mais da história toda vez que tenta fugir.",
},
{
    titulo:"PIKMIN 3",
    imagem:"https://notadogame.com/uploads/game/cover/250x/5bfdc38b5ebc1.jpg",
    descricao:"Pikmin 3 segue três exploradores alienígenas — Alph, Brittany e Charlie — do planeta Koppai. Enfrentando uma grave crise de fome devido à sobrepopulação, eles viajam ao planeta PNF-404 para coletar sementes de frutas. Após uma aterrissagem forçada, eles se separam e devem liderar criaturas nativas, os Pikmin, para sobreviver, se reunir e salvar seu mundo",
},
{
    titulo:"Sonic X Shadow Generations",
    imagem:"https://notadogame.com/uploads/game/cover/250x/671688a54ecb6.jpg",
    descricao:"Shadow the Hedgehog está de volta com o clássico e moderno Sonic IN Sonic X Shadow Generations, uma nova coleção com duas experiências únicas! Jogue como Shadow em uma campanha de história novíssima, com habilidades nunca antes vistas.",
},
{
    titulo:"Song Of Nunu: A League Of LEgends History",
    imagem:"https://notadogame.com/uploads/game/cover/250x/6542ccb73c8aa.jpg",
    descricao:"Melhores amigos, uma incrível aventura. Junte-se aos melhores amigos Nunu e Willump em uma aventura pelos campos gelados de Freljord.",
},
{
    titulo:"Don't Starve Togheter",
    imagem:"https://notadogame.com/uploads/game/cover/250x/60c9106fc7ffd.jpg",
    descricao:"Don't Starve Togheter é um game de sobrevivência multplayer em mundo aberto onde praticamente tudo que existe quer te ver morto, das árvores dos bosques até os sapos das lagoas locais.",
},

]

const listaJogos = document.getElementById
("listaJogos");
function mostrarJogos(lista){
    listaJogos.innerHTML = ""
    lista.forEach(jogo => {
        listaJogos.innerHTML += `
            <div class="col-md-4">
                <div class="card card-jogo h-100">
                    <img src="${jogo.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${jogo.titulo}</h3>
                         <p>${jogo.descricao}</p>
                         <button class="btn btn-dark" onclick="verDetalhes('${jogo.titulo}, ${jogo.descricao}')">Ver detalhes</button>
                        </div>
                </div>
            </div> 
        `
    });
}

mostrarJogos(jogos)

function verDetalhes(titulo, descricao) {
    swal.fire({
        title: titulo,
        Text: descricao,
        icon: "info"
    })
} 