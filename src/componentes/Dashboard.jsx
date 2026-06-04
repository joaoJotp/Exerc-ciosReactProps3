function StatCard({ label, valor, cor }) {
  return (
    <div style={{ border: `2px solid ${cor}`, borderRadius: 8, padding: 16, textAlign: "center", flex: 1 }}>
      <div style={{ fontSize: 28, fontWeight: "bold", color: cor }}>{valor}</div>
      <div style={{ fontSize: 12, color: "#555" }}>{label}</div>
    </div>
  );
}

function Dashboard({ titulo, stats }) {
  return (
    <div style={{ border: "2px solid #333", borderRadius: 8, padding: 16 }}>
      <h3 style={{ marginBottom: 16 }}>{titulo}</h3>
      <div style={{ display: "flex", gap: 12 }}>
        {stats.map((s, i) => (
          <StatCard key={i} label={s.label} valor={s.valor} cor={s.cor} />
        ))}
      </div>
    </div>
  );
}

// Uso:
const stats = [
  { label: "Usuários", valor: 1240, cor: "#2563eb" },
  { label: "Vendas", valor: 84, cor: "#16a34a" },
  { label: "Erros", valor: 3, cor: "#dc2626" },
];
