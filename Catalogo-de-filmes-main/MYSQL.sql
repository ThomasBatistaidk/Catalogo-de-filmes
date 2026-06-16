create database Catalogo_Filmes;
use catalogo_filmes;
create table filmes (
id int auto_increment primary key,
titulo varchar(100),
descricao text,
imagem varchar(255),
categoria varchar(50)
);

insert into filmes (titulo, descricao, imagem, categoria)
values 
("O Poço", "Um homem voluntariamente se prende em um poço com diversos andares.", "imagem.png", "Terror Psicológico"),
("Backroms Um Não-Lugar","Em 1990, o vendedor de móveis Clark descobre em sua loja um portal para os 'Backrooms', um labirinto infinito de escritórios surreais.", "https://www.themoviedb.org/t/p/w300_and_h450_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpgdb.org/t/p/w600_and_h900_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpg", "Terror Psicológico"),
("A Lenda dos guardiões", "Soren é uma corujinha fascinada pelas histórias épicas contadas pelo pai sobre os Guardiões de Ga’Hoole, míticos guerreiros alados que lutaram em uma grande batalha para salvar a espécie de uma grande ameaça.", "https://media.themoviedb.org/t/p/w300_and_h450_face/zWx7qwzT0WDRUaJafnotACJDX3e.jpg.org/t/p/w600_and_h900_face/zWx7qwzT0WDRUaJafnotACJDX3e.jpg", "Aventura"),
("O Pequeno Principe", "A Pequena Garota encontra o excêntrico Aviador, que a introduz ao mágico mundo do Pequeno Príncipe. Neste mundo em que tudo é possível, a Garota aprende a redescobrir sua infância.", "https://media.themoviedb.org/t/p/w300_and_h450_face/AeWqkAp2bAZEoj1GGd2jLc6R0LD.jpg", "Fantasia"),
("O Castelo Animado", "Sophie, uma jovem chapeleira, é transformada em uma mulher idosa por uma bruxa que entra em sua loja e a amaldiçoa. Ela encontra um mago chamado Howl e se vê envolvida em sua resistência em lutar pelo rei.", "https://media.themoviedb.org/t/p/w300_and_h450_face/1hTfaEWktMJPxCk5nZNtK7F86C9.jpg", "Aventura"),
("Transformers ONE: O Inicio", "Veja a história não contada da origem de Optimus Prime e Megatron e descubra como estes dois companheiros de luta se tornaram inimigos mortais e mudaram para sempre o destino de Cybertron.", "https://media.themoviedb.org/t/p/w300_and_h450_face/9yPuNAZQd5m5iKpQV2MDAfcwW9N.jpg", "Ficção ciêntifica"),
("Pokémon o Filmes: Hoopa e o Duelo Lendário", "Cem anos atrás, a cidade do deserto “Désser City” foi severamente danificada por uma batalha épica entre os Pokémon. A batalha foi iniciada devido a um Pokémon específico. No entanto, o Pokémon foi selado por alguém, e a cidade voltou a ser calma e normal como era antes até os dias de hoje.", "https://media.themoviedb.org/t/p/w300_and_h450_face/pGcRH4Kgfl9BsLPgezCUQcK17IU.jpg", "Fantasia"),
("Internet O Filme", "O Filme traz às telas do cinema a espontaneidade das redes sociais, com suas principais estrelas. Em 8 esquetes, a comédia apresenta diferentes tramas que dialogam com situações recorrentes do dia a dia.", "https://media.themoviedb.org/t/p/w300_and_h450_face/7kyQPkPj6YDYzX4oMymtoiTzLx2.jpg", "Comédia");

select * from filmes;