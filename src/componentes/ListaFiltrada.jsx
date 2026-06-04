function ListaFiltrada({ lista, criterio }) {
  const filtrada = lista.filter(item =>
    item.toLowerCase().includes(criterio.toLowerCase())
  );
  return (
    <ul>
      {filtrada.length === 0
        ? <li>Nenhum item encontrado.</li>
        : filtrada.map((item, i) => <li key={i}>{item}</li>)
      }
    </ul>
  );
}

// Uso:
