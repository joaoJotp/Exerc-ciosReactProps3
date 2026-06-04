function CardProduto({ nome, preco }) {
  return (
    <div style={{ border: "1px solid #aaa", borderRadius: 6, padding: 10, marginBottom: 6 }}>
      <strong>{nome}</strong> — R$ {preco.toFixed(2)}
    </div>
  );
}

function ListaProdutos({ produtos }) {
  return (
    <div>
      {produtos.map((p, i) => (
        <CardProduto key={i} nome={p.nome} preco={p.preco} />
      ))}
    </div>
  );
}

// Uso:
const produtos = [
  { nome: "Notebook", preco: 3499.99 },
  { nome: "Mouse", preco: 89.90 },
];
