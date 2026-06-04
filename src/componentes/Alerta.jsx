function Alerta({ tipo = "aviso", mensagem }) {
  const estilos = {
    sucesso: { backgroundColor: "#d4edda", color: "#155724", border: "1px solid #c3e6cb" },
    erro:    { backgroundColor: "#f8d7da", color: "#721c24", border: "1px solid #f5c6cb" },
    aviso:   { backgroundColor: "#fff3cd", color: "#856404", border: "1px solid #ffc107" },
  };
  return (
    <div style={{ ...estilos[tipo], padding: "12px 16px", borderRadius: 6 }}>
      <strong>[{tipo.toUpperCase()}]</strong> {mensagem}
    </div>
  );
}

// Uso:
