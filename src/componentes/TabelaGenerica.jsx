function TabelaGenerica({ colunas, dados }) {
  const th = { border: "1px solid #ccc", padding: "8px 12px", backgroundColor: "#f0f0f0" };
  const td = { border: "1px solid #ccc", padding: "8px 12px" };
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>{colunas.map(c => <th key={c} style={th}>{c}</th>)}</tr>
      </thead>
      <tbody>
        {dados.map((linha, i) => (
          <tr key={i}>{colunas.map(c => <td key={c} style={td}>{linha[c]}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
}

