const catalogo = require("./catalogo");

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    nomeFilme: titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

function buscarFilme(codigo) {
  const filmeProcurado = catalogo[codigo - 1];

  if (!filmeProcurado) {
    console.log("Código não encontrado");
  }

  console.log(filmeProcurado);
}

function buscarFilme(codigo) {
  for (let x = 0; x < catalogo.length; x++) {
    let filme = catalogo[x];

    if (filme.codigo == codigo) {
      console.log(filme);
      return filme;
    }
  }
}

function alterarStatusEmCartaz(codigo) {
  const filmeProcurado = catalogo[codigo - 1];

  if (filmeProcurado) {
    return console.log("Código não encontrado");
  }

  if (catalogo[codigo - 1].emCartaz) {
    catalogo[codigo - 1].emCartaz = false;
  } else {
    catalogo[codigo - 1].emCartaz = true;
  }

  console.log("Filme alterado!");
}

const listMovies = () => {
  for (i = 0; i < catalogo.length; i++) {
    let filme = catalogo[i];
    console.log("-".repeat(99));
    console.log("Nome do filme: \n " + filme.titulo);
    console.log("Ano do filme: " + filme.anoDoLancamento);
    console.log("Está em cartaz: " + filme.emCartaz);
  }
};

const listarFilmesEmCartaz = () => {
  const disponiveis = [];
  const date = new Date().getMonth;
  //filme == catalogo[i]
  catalogo.forEach((filme, index) => {
    filme.emCartaz ? console.table(filme) : "O Filme Não está Em cartaz";
  });
};

let listarFilmesEmCartaz = () => {
  let filmes = [];
  for (let i = 0; i < catalogo.length; i++) {
    catalogo[i].emCartaz == true ? filmes.push(catalogo[i]) : "";
  }
  console.table(filmes, ["titulo", "duracao", "atores"]);
};
listarFilmesEmCartaz();
