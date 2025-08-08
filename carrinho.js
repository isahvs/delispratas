document.addEventListener("DOMContentLoaded", () => {
  const itens = document.querySelectorAll(".item");

  itens.forEach(item => {
    const botaoMais = item.querySelector(".aumentar");
    const botaoMenos = item.querySelector(".diminuir");
    const botaoRemover = item.querySelector(".remover");
    const botaoFavorito = item.querySelector(".favorito");
    const quantidadeSpan = item.querySelector(".quantidade");
    const preco = parseFloat(item.dataset.preco);

    let quantidade = parseInt(quantidadeSpan.textContent);

    // Aumentar quantidade
    botaoMais.addEventListener("click", () => {
      quantidade++;
      quantidadeSpan.textContent = quantidade;
      atualizarTotal();
    });

    // Diminuir quantidade
    botaoMenos.addEventListener("click", () => {
      if (quantidade > 1) {
        quantidade--;
        quantidadeSpan.textContent = quantidade;
        atualizarTotal();
      }
    });

    // Remover item
    botaoRemover.addEventListener("click", () => {
      item.remove();
      atualizarTotal();
    });

    // Marcar favorito
    botaoFavorito.addEventListener("click", () => {
      botaoFavorito.classList.toggle("favoritado");
      botaoFavorito.textContent = botaoFavorito.classList.contains("favoritado") ? "❤️" : "♡";
    });
  });

  function atualizarTotal() {
    const itens = document.querySelectorAll(".item");
    let total = 0;

    itens.forEach(item => {
      const preco = parseFloat(item.dataset.preco);
      const quantidade = parseInt(item.querySelector(".quantidade").textContent);
      total += preco * quantidade;
    });

    let totalBox = document.querySelector("#total");
    if (!totalBox) {
      const totalHTML = document.createElement("div");
      totalHTML.id = "total";
      totalHTML.style.marginTop = "20px";
      totalHTML.innerHTML = `<strong>Total: R$ <span id="total-valor">0.00</span></strong>`;
      document.querySelector(".carrinho-box").appendChild(totalHTML);
    }

    document.getElementById("total-valor").textContent = total.toFixed(2).replace('.', ',');
  }

  atualizarTotal();
});
