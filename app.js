// Produtos
const produtos = [
  { nome: "iPhone 14", categoria: "Smartphones", preco: 4999, imagem: "imagens/iphone14_projetodev.jpg" },
  { nome: "Samsung Galaxy S23", categoria: "Smartphones", preco: 3999, imagem: "imagens/galaxys23_projetosdev.jpg" },
  { nome: "Notebook Dell XPS", categoria: "Notebooks", preco: 6999, imagem: "imagens/NotebookDellXPS_projetosdev.jpg" },
  { nome: "Notebook Acer Aspire", categoria: "Notebooks", preco: 2999, imagem: "imagens/NotebookAcerAspire_projetosdev.jpeg" },
  { nome: "Fone Bluetooth JBL", categoria: "Fones", preco: 299, imagem: "imagens/FoneBluetoothJBL_projetosdev.jpg" },
  { nome: "Fone JBL", categoria: "Fones", preco: 299, imagem: "imagens/JBL_projetosdev.jpeg" },
  { nome: "Teclado Mecânico", categoria: "Acessórios", preco: 199, imagem: "imagens/TecladoMecânico_projetosdev.jpg" },
  { nome: "Teclado Mecânico", categoria: "Acessórios", preco: 199, imagem: "imagens/Teclado2Mecânico_projetosdev.jpg" }
];

const containerProdutos = document.getElementById("products");
const inputSearch = document.querySelector(".search");
const botoesFiltro = document.querySelectorAll(".nav-btn");

// Exibir produtos
function exibirProdutos(lista) {
  containerProdutos.innerHTML = "";
  lista.forEach(produto => {
    containerProdutos.innerHTML += `
      <div class="product">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="product-info">
          <h3>${produto.nome}</h3>
          <p>${produto.categoria}</p>
          <span class="price-badge">R$ ${produto.preco.toLocaleString("pt-BR")}</span>
        </div>
      </div>
    `;
  });
}


// OBS : Filtrar por categoria

botoesFiltro.forEach(btn => {
  btn.addEventListener("click", () => {

    botoesFiltro.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const categoria = btn.textContent.trim();
    if (categoria === "Todos") {
      exibirProdutos(produtos);
    } else {
      exibirProdutos(produtos.filter(p => p.categoria === categoria));
    }
  });
});

inputSearch.addEventListener("input", () => {
  const termo = inputSearch.value.toLowerCase();
  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo)
  );
  exibirProdutos(filtrados);
});

exibirProdutos(produtos);
