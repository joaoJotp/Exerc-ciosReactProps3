import { useState } from "react";

// ── 21. Card ──────────────────────────────────────────────
function Card({ children }) {
  return (
    <div style={{ border: "2px solid #333", borderRadius: 8, padding: 16, marginBottom: 8 }}>
      {children}
    </div>
  );
}

// ── 22. CardProduto + ListaProdutos ───────────────────────
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

// ── 23. BotaoCustomizado ──────────────────────────────────
function BotaoCustomizado({ texto, cor = "#333", tamanho = "medium" }) {
  const sizes = { small: "8px 14px", medium: "12px 24px", large: "16px 32px" };
  return (
    <button style={{
      backgroundColor: cor, color: "#fff", border: "none", borderRadius: 6,
      padding: sizes[tamanho], cursor: "pointer", marginRight: 8, marginBottom: 8,
    }}>
      {texto}
    </button>
  );
}

// ── 24. Alerta ────────────────────────────────────────────
function Alerta({ tipo = "aviso", mensagem }) {
  const estilos = {
    sucesso: { backgroundColor: "#d4edda", color: "#155724", border: "1px solid #c3e6cb" },
    erro:    { backgroundColor: "#f8d7da", color: "#721c24", border: "1px solid #f5c6cb" },
    aviso:   { backgroundColor: "#fff3cd", color: "#856404", border: "1px solid #ffc107" },
  };
  return (
    <div style={{ ...estilos[tipo], padding: "12px 16px", borderRadius: 6, marginBottom: 8 }}>
      <strong>[{tipo.toUpperCase()}]</strong> {mensagem}
    </div>
  );
}

// ── 25. TabelaGenerica ────────────────────────────────────
function TabelaGenerica({ colunas, dados }) {
  const th = { border: "1px solid #ccc", padding: "8px 12px", backgroundColor: "#f0f0f0", textAlign: "left" };
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

// ── 26. Modal ─────────────────────────────────────────────
function Modal({ titulo, conteudo, rodape, onFechar }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
      alignItems: "center", justifyContent: "center", zIndex: 1000,
    }}>
      <div style={{ backgroundColor: "#fff", borderRadius: 8, width: 400, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
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

// ── 27. Dashboard ─────────────────────────────────────────
function StatCard({ label, valor, cor }) {
  return (
    <div style={{ border: `2px solid ${cor}`, borderRadius: 8, padding: 16, textAlign: "center", flex: 1 }}>
      <div style={{ fontSize: 28, fontWeight: "bold", color: cor }}>{valor}</div>
      <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>{label}</div>
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

// ── 28. Formulario ────────────────────────────────────────
function Formulario({ titulo, campos }) {
  const [valores, setValores] = useState({});
  const handleChange = (nome, val) => setValores(v => ({ ...v, [nome]: val }));
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16 }}>
      <h4 style={{ marginBottom: 12 }}>{titulo}</h4>
      {campos.map(c => (
        <div key={c.nome} style={{ marginBottom: 10 }}>
          <label style={{ display: "block", marginBottom: 4, fontSize: 13 }}>{c.label}</label>
          <input
            type={c.tipo || "text"}
            placeholder={c.placeholder || ""}
            value={valores[c.nome] || ""}
            onChange={e => handleChange(c.nome, e.target.value)}
            style={{ width: "100%", padding: "8px 10px", border: "1px solid #aaa", borderRadius: 4 }}
          />
        </div>
      ))}
      <button
        onClick={() => console.log(valores)}
        style={{ padding: "10px 20px", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}
      >
        Enviar
      </button>
    </div>
  );
}

// ── 29. ListaFiltrada ─────────────────────────────────────
function ListaFiltrada({ lista, criterio }) {
  const filtrada = lista.filter(item =>
    item.toLowerCase().includes(criterio.toLowerCase())
  );
  return (
    <ul style={{ paddingLeft: 20 }}>
      {filtrada.length === 0
        ? <li style={{ color: "#999" }}>Nenhum item encontrado.</li>
        : filtrada.map((item, i) => <li key={i}>{item}</li>)
      }
    </ul>
  );
}

// ── 30. PaginaDinamica ────────────────────────────────────
function PaginaDinamica({ layout }) {
  const { cabecalho, secoes, rodape } = layout;
  return (
    <div style={{ border: "2px solid #333", borderRadius: 8, overflow: "hidden" }}>
      <header style={{ backgroundColor: "#333", color: "#fff", padding: "16px 20px" }}>
        <h2>{cabecalho.titulo}</h2>
        <p style={{ fontSize: 13, opacity: 0.8 }}>{cabecalho.subtitulo}</p>
      </header>
      <main style={{ padding: 16 }}>
        {secoes.map((s, i) => (
          <section key={i} style={{ marginBottom: 16 }}>
            <h4 style={{ borderBottom: "1px solid #ddd", paddingBottom: 6, marginBottom: 8 }}>{s.titulo}</h4>
            <p style={{ fontSize: 14, color: "#444" }}>{s.texto}</p>
          </section>
        ))}
      </main>
      <footer style={{ backgroundColor: "#f0f0f0", padding: "10px 16px", fontSize: 12, color: "#666", textAlign: "center" }}>
        {rodape}
      </footer>
    </div>
  );
}

// ── Componente auxiliar de seção ──────────────────────────
function Section({ num, titulo, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 16, borderBottom: "2px solid #333", paddingBottom: 6, marginBottom: 12 }}>
        {num}. {titulo}
      </h2>
      {children}
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────
export default function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [filtro, setFiltro] = useState("");

  const produtos = [
    { nome: "Notebook", preco: 3499.99 },
    { nome: "Mouse", preco: 89.90 },
    { nome: "Teclado", preco: 199.00 },
  ];

  const colunas = ["Nome", "Cargo", "Salário"];
  const dados = [
    { Nome: "Ana", Cargo: "Dev", "Salário": "R$ 8.000" },
    { Nome: "Bruno", Cargo: "Designer", "Salário": "R$ 6.500" },
    { Nome: "Carla", Cargo: "PM", "Salário": "R$ 9.000" },
  ];

  const stats = [
    { label: "Usuários", valor: 1240, cor: "#2563eb" },
    { label: "Vendas", valor: 84, cor: "#16a34a" },
    { label: "Erros", valor: 3, cor: "#dc2626" },
  ];

  const campos = [
    { nome: "nome", label: "Nome completo", placeholder: "Ex: João Silva" },
    { nome: "email", label: "E-mail", tipo: "email", placeholder: "Ex: joao@email.com" },
    { nome: "senha", label: "Senha", tipo: "password", placeholder: "••••••••" },
  ];

  const frutas = ["Abacaxi", "Banana", "Cenoura", "Alface", "Abóbora", "Limão", "Maçã"];

  const layout = {
    cabecalho: { titulo: "Minha Empresa", subtitulo: "Soluções em tecnologia" },
    secoes: [
      { titulo: "Sobre nós", texto: "Somos uma empresa focada em inovação e qualidade de software." },
      { titulo: "Nossos serviços", texto: "Desenvolvimento web, mobile e consultoria em TI." },
    ],
    rodape: "© 2026 Minha Empresa. Todos os direitos reservados.",
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24, fontFamily: "monospace" }}>
      <h1 style={{ fontSize: 20, marginBottom: 28, textAlign: "center" }}>
        📋 Lista 03 — ReactJS: Components e Props
      </h1>

      <Section num={21} titulo="Card com children">
        <Card><p>Conteúdo <strong>qualquer</strong> dentro do Card!</p></Card>
        <Card><span>Outro card com um <em>elemento diferente</em>.</span></Card>
      </Section>

      <Section num={22} titulo="ListaProdutos">
        <ListaProdutos produtos={produtos} />
      </Section>

      <Section num={23} titulo="BotaoCustomizado">
        <BotaoCustomizado texto="Pequeno" cor="#6b7280" tamanho="small" />
        <BotaoCustomizado texto="Médio Azul" cor="#2563eb" tamanho="medium" />
        <BotaoCustomizado texto="Grande Verde" cor="#16a34a" tamanho="large" />
        <BotaoCustomizado texto="Perigo" cor="#dc2626" tamanho="medium" />
      </Section>

      <Section num={24} titulo="Alerta">
        <Alerta tipo="sucesso" mensagem="Operação realizada com sucesso!" />
        <Alerta tipo="erro" mensagem="Ocorreu um erro inesperado." />
        <Alerta tipo="aviso" mensagem="Atenção: verifique os dados antes de continuar." />
      </Section>

      <Section num={25} titulo="TabelaGenerica">
        <TabelaGenerica colunas={colunas} dados={dados} />
      </Section>

      <Section num={26} titulo="Modal">
        <button
          onClick={() => setModalAberto(true)}
          style={{ padding: "10px 20px", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}
        >
          Abrir Modal
        </button>
        {modalAberto && (
          <Modal
            titulo="Título do Modal"
            conteudo="Este é o conteúdo do modal reutilizável, recebido via props."
            rodape={
              <button
                onClick={() => setModalAberto(false)}
                style={{ padding: "8px 16px", backgroundColor: "#dc2626", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}
              >
                Fechar
              </button>
            }
            onFechar={() => setModalAberto(false)}
          />
        )}
      </Section>

      <Section num={27} titulo="Dashboard">
        <Dashboard titulo="Painel de Controle" stats={stats} />
      </Section>

      <Section num={28} titulo="Formulario">
        <Formulario titulo="Cadastro de Usuário" campos={campos} />
      </Section>

      <Section num={29} titulo="ListaFiltrada">
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontSize: 13 }}>Filtro: </label>
          <input
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            placeholder="Digite para filtrar..."
            style={{ padding: "6px 10px", border: "1px solid #aaa", borderRadius: 4, marginLeft: 8 }}
          />
        </div>
        <ListaFiltrada lista={frutas} criterio={filtro} />
      </Section>

      <Section num={30} titulo="PaginaDinamica">
        <PaginaDinamica layout={layout} />
      </Section>
    </div>
  );
}