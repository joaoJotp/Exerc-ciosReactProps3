function PaginaDinamica({ layout }) {
  const { cabecalho, secoes, rodape } = layout;
  return (
    <div style={{ border: "2px solid #333", borderRadius: 8, overflow: "hidden" }}>
      <header style={{ backgroundColor: "#333", color: "#fff", padding: "16px 20px" }}>
        <h2>{cabecalho.titulo}</h2>
        <p>{cabecalho.subtitulo}</p>
      </header>
      <main style={{ padding: 16 }}>
        {secoes.map((s, i) => (
          <section key={i} style={{ marginBottom: 16 }}>
            <h4>{s.titulo}</h4>
            <p>{s.texto}</p>
          </section>
        ))}
      </main>
      <footer style={{ backgroundColor: "#f0f0f0", padding: "10px 16px", textAlign: "center" }}>
        {rodape}
      </footer>
    </div>
  );
}

// Uso:
const layout = {
  cabecalho: { titulo: "Minha loja", subtitulo: "Soluções em tecnologia" },
  secoes: [
    { titulo: "Sobre nós", texto: "Empresa focada em inovação." },
    { titulo: "Serviços", texto: "Web, mobile e consultoria." },
  ],
  rodape: "© 2026 Minha Empresa.",
};
