import { useState } from "react";

function Formulario({ titulo, campos }) {
  const [valores, setValores] = useState({});
  const handleChange = (nome, val) => setValores(v => ({ ...v, [nome]: val }));

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16 }}>
      <h4 style={{ marginBottom: 12 }}>{titulo}</h4>
      {campos.map(c => (
        <div key={c.nome} style={{ marginBottom: 10 }}>
          <label style={{ display: "block", marginBottom: 4 }}>{c.label}</label>
          <input
            type={c.tipo || "text"}
            placeholder={c.placeholder || ""}
            value={valores[c.nome] || ""}
            onChange={e => handleChange(c.nome, e.target.value)}
            style={{ width: "100%", padding: "8px 10px", border: "1px solid #aaa", borderRadius: 4 }}
          />
        </div>
      ))}
      <button onClick={() => console.log(valores)}>Enviar</button>
    </div>
  );
}

// Uso:
const campos = [
  { nome: "nome", label: "Nome", placeholder: "Seu nome" },
  { nome: "email", label: "E-mail", tipo: "email", placeholder: "seu@email.com" },
];
