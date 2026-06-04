function BotaoCustomizado({ texto, cor = "#333", tamanho = "medium" }) {
  const sizes = { small: "8px 14px", medium: "12px 24px", large: "16px 32px" };
  return (
    <button style={{
      backgroundColor: cor,
      color: "#fff",
      border: "none",
      borderRadius: 6,
      padding: sizes[tamanho],
      cursor: "pointer",
    }}>
      {texto}
    </button>
  );
}

// Uso:
