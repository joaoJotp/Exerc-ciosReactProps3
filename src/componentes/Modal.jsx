function Modal({ titulo, conteudo, rodape, onFechar }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
      alignItems: "center", justifyContent: "center", zIndex: 1000,
    }}>
      <div style={{ backgroundColor: "#fff", borderRadius: 8, width: 400, overflow: "hidden" }}>
        <div style={{ padding: "14px 16px", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between" }}>
          <strong>{titulo}</strong>
          <span style={{ cursor: "pointer" }} onClick={onFechar}>✕</span>
        </div>
        <div style={{ padding: 16 }}>{conteudo}</div>
        <div style={{ padding: "12px 16px", borderTop: "1px solid #ddd", textAlign: "right" }}>{rodape}</div>
      </div>
    </div>
  );
}

// Uso:
