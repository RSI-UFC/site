/* RSI — Residência em Segurança da Informação
   Static reproduction of the design mock (Residencia SI.dc.html).
   Vanilla JS SPA: 8 screens, filtering, FAQ accordion, contact form. */

(() => {
  "use strict";

  // ---------- Static props ----------
  const sigla = "RSI";
  const nomeProjeto = "Residência em Segurança da Informação";
  const universidade = "Universidade Federal do Ceará";
  const ano = 2026;

  // ---------- External links ----------
  const BLOG_URL = "https://blog.rsiproject.org";
  const FORGE_URL = "https://forge.rsiproject.org";
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeEB6xQY_3g_KJ1RHjPDCHxl42ZqHmZiXUz3rjmalJcpHRang/viewform";

  // ---------- Data ----------
  const papers = [
    { title:"Applying DevSecOps Approach in Legacy Computing Infrastructures: A Case Study in Public Sector of Brazil", authors:"Lima, J. C. C.; Campos, F. R. M.; Gomes, R. L.; Rodrigues, E. B.; Andrade, R. M. C.; Silva, C. L.; Bentes, D. C.; Cialdini, A. S.", venue:"LADC 2025 · CCIS (Springer)", year:2026, area:"DevSecOps", abstract:"Estudo de caso sobre a adoção de práticas de DevSecOps em infraestruturas de computação legadas no setor público brasileiro.", url:"https://doi.org/10.1007/978-3-032-11539-3_1", linkLabel:"Springer" },
    { title:"Análise de Severidade e Explorabilidade de Vulnerabilidades de Segurança no Setor Público", authors:"Lima, J. C. C.; et al.", venue:"SBSEG 2025 · Anais Estendidos", year:2025, area:"Vulnerabilidades", abstract:"Análise da severidade e da explorabilidade de vulnerabilidades de segurança identificadas em sistemas do setor público.", url:"https://doi.org/10.5753/sbseg_estendido.2025.12672", linkLabel:"DOI" },
    { title:"Testes de Segurança Estáticos na Esteira de Desenvolvimento de Aplicações: Um Estudo de Caso na SEPLAG-CE", authors:"Campos, F. R. M.; et al.", venue:"SBSEG 2025 · Trilha Indústria", year:2025, area:"DevSecOps", abstract:"Estudo de caso sobre a integração de testes de segurança estáticos (SAST) na esteira de desenvolvimento de aplicações da SEPLAG-CE." }
  ];
  const areaNames = ["Todas","DevSecOps","Vulnerabilidades"];
  const yearNames = ["Todos","2026","2025"];

  const teamGroups = [
    { role:"Orientação", members:[
      { name:"Emanuel Bezerra", focus:"Professor Orientador", photo:"img/members/emanuelbezerra.jpg" },
      { name:"Ramon Martins", focus:"Especialista em segurança ofensiva @ PrideSecurity", photo:"img/members/ramonmartins.png" },
      { name:"Igor Benevides", focus:"Specialist Red Team Operator @ CovertSwarm", photo:"img/members/igorbenevides.jpg" },
      { name:"Jarelio Filho", focus:"Especialista em segurança ofensiva @ PrideSecurity" },
      { name:"Davi Chaves", focus:"Especialista em segurança defensiva @ BlueDiamond", photo:"img/members/davichaves.jpg" }
    ]},
    { role:"Bolsistas", members:[
      { name:"André Peixoto", focus:"Bolsista do projeto" },
      { name:"Davi", focus:"Programa Cientista Chefe" },
      { name:"João Guilherme", focus:"Programa Cientista Chefe", photo:"img/members/joaoguilherme.jpg" }
    ]},
    { role:"Voluntários", members:[
      { name:"Caio Capêlo", focus:"Voluntário" },
      { name:"Dimitri", focus:"Voluntário" },
      { name:"Luna", focus:"Voluntário" },
      { name:"Alexandre Grangeiro", focus:"Voluntário" },
      { name:"Bento", focus:"Voluntário" },
      { name:"Denilo", focus:"Voluntário" },
      { name:"João Duarte", focus:"Voluntário", photo:"img/members/joaoduarte.jpg" }
    ]}
  ];

  const events = [
    { title:"Processo Seletivo 2026.2", type:"Seletivo", day:"", month:"Jul 2026", local:"a definir", status:"Próximo" }
  ];
  const tabNames = ["Todos","Próximos","Realizados"];

  const selSteps = [
    { n:"1", title:"Inscrição", desc:"Preencha o formulário e envie seu currículo. Aberto a estudantes de graduação e pós-graduação." },
    { n:"2", title:"Prova técnica", desc:"Avaliação online de fundamentos: redes, sistemas operacionais, criptografia e lógica de programação." },
    { n:"3", title:"Desafio prático (CTF)", desc:"CTF de 48h com desafios de web, forense e exploração para avaliar a prática na mão." },
    { n:"4", title:"Entrevista", desc:"Conversa com a coordenação sobre motivação, disponibilidade e linha de pesquisa de interesse." },
    { n:"5", title:"Resultado", desc:"Divulgação dos selecionados e início da integração à equipe e aos grupos de estudo." }
  ];
  const requisitos = [
    "Estar matriculado em curso de graduação ou pós-graduação.",
    "Disponibilidade de 12 a 16 horas semanais.",
    "Noções de programação (qualquer linguagem).",
    "Vontade de aprender — não exigimos experiência prévia em segurança.",
    "Noções de redes.",
    "Noções de terminal."
  ];
  const cronograma = [
    { fase:"Inscrições", data:"até 22 jul" },
    { fase:"CTF online", data:"23–30 jul" },
    { fase:"Entrevistas", data:"a partir de 01 ago" }
  ];
  const faqData = [
    { q:"Preciso já saber sobre segurança?", a:"Não. Avaliamos fundamentos e potencial. A residência existe justamente para formar — buscamos curiosidade e comprometimento." },
    { q:"A residência é remunerada?", a:"Há bolsas para parte das vagas, conforme editais e parcerias vigentes. Os detalhes são informados no edital de cada turma." },
    { q:"Posso participar de outro campus ou à distância?", a:"Sim, parte das atividades é híbrida. Encontros práticos presenciais acontecem nos laboratórios do projeto." },
    { q:"Quanto tempo dura?", a:"O ciclo padrão é de 12 meses, com possibilidade de continuidade em projetos de pesquisa." }
  ];
  const linhas = [
    { tag:"01", title:"AppSec", desc:"Segurança de aplicações, fuzzing e revisão de código." },
    { tag:"02", title:"Red Team", desc:"Pentest, exploração e simulação de adversários." },
    { tag:"03", title:"Blue Team", desc:"Detecção, resposta a incidentes e defesa de infraestrutura." }
  ];
  const stats = [
    { num:"2016", label:"Ano de fundação" },
    { num:"60+", label:"Residentes formados" },
    { num:"4", label:"Artigos publicados" },
    { num:"15", label:"Membros" }
  ];
  const contatos = [
    { label:"E-mail", value:"rsi@dc.ufc.br", href:"mailto:rsi@dc.ufc.br" },
    { label:"Onde estamos", value:"Departamento de Computação · UFC — Campus do Pici, Fortaleza/CE" }
  ];
  const navDefs = [
    { id:"home", label:"Início" },
    { id:"sobre", label:"Sobre" },
    { href:BLOG_URL, label:"Blog" },
    { href:FORGE_URL, label:"Forge" },
    { id:"selecao", label:"Seletivo" },
    { id:"artigos", label:"Artigos" },
    { id:"equipe", label:"Equipe" },
    { id:"eventos", label:"Eventos" },
    { id:"contato", label:"Contato" }
  ];

  // ---------- State ----------
  const state = {
    page:"home", postCat:"Todos", postSearch:"", paperArea:"Todas",
    paperYear:"Todos", eventTab:"Todos", openFaq:-1, contactSent:false
  };

  // ---------- Helpers ----------
  const esc = (s) => String(s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");

  // Initials for members without a photo (e.g. "André Peixoto" -> "AP", "Davi" -> "DA")
  const initials = (name) => {
    const words = String(name).trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return "?";
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  const grad = "linear-gradient(135deg,#818CF8,#6366F1 45%,#22D3EE)";

  // ---------- Reusable pieces ----------
  function postCard(p, minH) {
    return `
      <article class="hov-lift" style="background:linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:24px;display:flex;flex-direction:column;min-height:${minH}px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#0A0A12;background:linear-gradient(135deg,#818CF8,#22D3EE);padding:4px 10px;border-radius:6px;">${esc(p.cat)}</span>
          <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6E6E86;">${esc(p.read)}</span>
        </div>
        <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:18px;line-height:1.3;color:#EDEDF6;margin:0 0 10px;">${esc(p.title)}</h3>
        <p style="color:#8E8EA6;font-size:14px;line-height:1.6;margin:0 0 auto;">${esc(p.excerpt)}</p>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);">
          <span style="font-size:13px;color:#9A9AB0;">${esc(p.author)}</span>
          <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6E6E86;">${esc(p.date)}</span>
        </div>
      </article>`;
  }

  function sectionHeader(kicker, kickerColor, title, btnLabel, btnGo) {
    return `
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;">
        <div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:${kickerColor};">${kicker}</div>
          <h2 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:32px;letter-spacing:-.02em;color:#F2F2FA;margin:12px 0 0;">${esc(title)}</h2>
        </div>
        <button data-go="${btnGo}" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#A5B4FC;background:none;border:none;cursor:pointer;">${esc(btnLabel)} →</button>
      </div>`;
  }

  function pageHeader(kicker, title, sub) {
    return `
      <section style="max-width:1240px;margin:0 auto;padding:88px 32px ${sub ? "24px" : "32px"};">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#818CF8;">${kicker}</div>
        <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:46px;letter-spacing:-.025em;color:#F4F4FB;margin:18px 0 0;">${title}</h1>
        ${sub ? `<p style="color:#A0A0B6;font-size:17px;line-height:1.7;margin:16px 0 0;max-width:640px;">${esc(sub)}</p>` : ""}
      </section>`;
  }

  // ---------- Screens ----------
  function screenHome() {
    return `
    <div>
      <section style="max-width:1240px;margin:0 auto;padding:96px 32px 64px;">
        <div style="max-width:780px;">
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#818CF8;">// Projeto de Extensão · ${esc(universidade)}</div>
          <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:60px;line-height:1.04;letter-spacing:-.03em;color:#F4F4FB;margin:20px 0 0;">Formamos a próxima geração em <span style="background:linear-gradient(120deg,#A5B4FC,#22D3EE);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">segurança da informação</span>.</h1>
          <p style="color:#A0A0B6;font-size:18px;line-height:1.7;margin:24px 0 0;max-width:640px;">Laboratório de segurança da informação e projeto de extensão da Universidade Federal do Ceará, reunimos todos os apaixonados pela área e elevamos o nível através de pesquisa, ensino e extensão. Unimos estudantes, profissionais na área e empresas parceiras para elevar o nível técnico da segurança no Ceará.</p>
          <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:34px;">
            <button data-go="selecao" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;padding:15px 26px;border-radius:11px;border:none;cursor:pointer;color:#0A0A12;background:${grad};box-shadow:0 14px 36px -12px rgba(99,102,241,.6);">Processo seletivo →</button>
            <button data-go="sobre" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;padding:15px 26px;border-radius:11px;cursor:pointer;color:#E6E6F0;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.14);">Conheça o projeto</button>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:72px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.07);border-radius:18px;overflow:hidden;">
          ${stats.map(s => `
            <div style="background:#0B0B14;padding:28px 26px;">
              <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:38px;letter-spacing:-.02em;background:linear-gradient(120deg,#C7D2FE,#67E8F9);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">${esc(s.num)}</div>
              <div style="color:#8E8EA6;font-size:14px;margin-top:6px;">${esc(s.label)}</div>
            </div>`).join("")}
        </div>
      </section>

      <section style="max-width:1240px;margin:0 auto;padding:48px 32px;">
        <div style="position:relative;overflow:hidden;border:1px solid rgba(34,211,238,.22);border-radius:24px;padding:48px;background:radial-gradient(640px 360px at 0% 0%, rgba(34,211,238,.16), transparent 60%), linear-gradient(180deg,#0C0C16,#0A0A12);display:flex;justify-content:space-between;align-items:center;gap:40px;flex-wrap:wrap;">
          <div style="max-width:560px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#67E8F9;">// Forge · Plataforma CTF</div>
            <h2 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:34px;letter-spacing:-.02em;color:#F4F4FB;margin:14px 0 0;line-height:1.12;">Treine e seja avaliado na Forge</h2>
            <p style="color:#A0A0B6;font-size:16.5px;line-height:1.7;margin:14px 0 0;">Nossa plataforma de CTF para o processo seletivo e para o treinamento contínuo dos membros. Desafios de web, forense, exploração e criptografia — resolva, pontue e evolua.</p>
            <a href="${FORGE_URL}" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;padding:15px 26px;border-radius:11px;text-decoration:none;margin-top:26px;color:#0A0A12;background:linear-gradient(135deg,#22D3EE,#818CF8);box-shadow:0 14px 36px -12px rgba(34,211,238,.5);">Acessar a Forge →</a>
          </div>
          <div style="font-family:'JetBrains Mono',monospace;color:#5BE6FB;font-size:13px;line-height:1.9;background:rgba(8,8,15,.55);border:1px solid rgba(34,211,238,.18);border-radius:14px;padding:22px 26px;min-width:240px;">
            <div style="color:#6E6E86;">$ ./forge --start</div>
            <div>[+] carregando desafios…</div>
            <div>[+] web · forense · pwn · crypto</div>
            <div style="color:#A5B4FC;">[✓] boa sorte, residente</div>
          </div>
        </div>
      </section>

      <section style="max-width:1240px;margin:0 auto;padding:48px 32px;">
        ${sectionHeader("// Pesquisa", "#67E8F9", "Artigos em destaque", "Todas as publicações", "artigos")}
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:30px;">
          ${papers.slice(0,2).map(p => `
            <article class="hov-cyan" style="background:linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:26px;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
                <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:#67E8F9;border:1px solid rgba(34,211,238,.35);padding:4px 10px;border-radius:6px;">${esc(p.area)}</span>
                <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6E6E86;">${esc(p.venue)} · ${esc(p.year)}</span>
              </div>
              <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:19px;line-height:1.32;color:#EDEDF6;margin:0 0 10px;">${esc(p.title)}</h3>
              <p style="color:#8E8EA6;font-size:14px;line-height:1.6;margin:0 0 14px;">${esc(p.abstract)}</p>
              <div style="font-size:13px;color:#9A9AB0;font-style:italic;">${esc(p.authors)}</div>
            </article>`).join("")}
        </div>
      </section>

      <section style="max-width:1240px;margin:0 auto;padding:64px 32px 96px;">
        <div style="position:relative;overflow:hidden;border:1px solid rgba(129,140,248,.25);border-radius:24px;padding:56px 48px;background:radial-gradient(700px 400px at 100% 0%, rgba(99,102,241,.22), transparent 60%), linear-gradient(180deg,#0D0D17,#0A0A12);">
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#818CF8;">// Vagas abertas · 2026.2</div>
          <h2 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:38px;letter-spacing:-.02em;color:#F4F4FB;margin:16px 0 0;max-width:620px;line-height:1.1;">Quer entrar para a residência?</h2>
          <p style="color:#A0A0B6;font-size:17px;line-height:1.7;margin:16px 0 28px;max-width:560px;">Inscrições abertas para residentes nas linhas de Appsec, Redteam &amp; BlueTeam.</p>
          <button data-go="selecao" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;padding:15px 28px;border-radius:11px;border:none;cursor:pointer;color:#0A0A12;background:${grad};box-shadow:0 14px 36px -12px rgba(99,102,241,.6);">Ver processo seletivo →</button>
        </div>
      </section>
    </div>`;
  }

  function screenSobre() {
    return `
    <div>
      <section style="max-width:1240px;margin:0 auto;padding:88px 32px 32px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#818CF8;">// Sobre o projeto</div>
        <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:46px;line-height:1.06;letter-spacing:-.025em;color:#F4F4FB;margin:18px 0 0;max-width:780px;">${esc(nomeProjeto)}</h1>
        <p style="color:#A0A0B6;font-size:18px;line-height:1.75;margin:24px 0 0;max-width:720px;">Somos um projeto de extensão da ${esc(universidade)} dedicado a formar talentos em cibersegurança por meio de pesquisa aplicada, prática intensiva e colaboração com a indústria. Atuamos como uma ponte entre a academia e o mercado.</p>
      </section>

      <section style="max-width:1240px;margin:0 auto;padding:40px 32px;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
          ${[
            ["Missão","Capacitar estudantes e profissionais em segurança ofensiva, defensiva e forense, com ética e responsabilidade."],
            ["Como funciona","Residências de 12 meses com mentoria, grupos de estudo, CTFs internos e projetos de pesquisa orientados."],
            ["Para empresas","Parcerias de pesquisa, desafios reais e acesso a uma comunidade de talentos em segurança."]
          ].map(([h,p]) => `
            <div style="background:linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:28px;">
              <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:18px;color:#EDEDF6;margin:0 0 10px;">${esc(h)}</h3>
              <p style="color:#8E8EA6;font-size:14.5px;line-height:1.65;margin:0;">${esc(p)}</p>
            </div>`).join("")}
        </div>
      </section>

      <section style="max-width:1240px;margin:0 auto;padding:40px 32px 96px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#67E8F9;">// Linhas de pesquisa</div>
        <h2 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:30px;letter-spacing:-.02em;color:#F2F2FA;margin:12px 0 28px;">Em que trabalhamos</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
          ${linhas.map(l => `
            <div class="hov-indigo-4" style="background:#0B0B14;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:22px;display:flex;gap:14px;align-items:flex-start;">
              <span style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#818CF8;border:1px solid rgba(129,140,248,.3);border-radius:8px;padding:6px 9px;flex:none;">${esc(l.tag)}</span>
              <div>
                <div style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:16px;color:#EDEDF6;">${esc(l.title)}</div>
                <div style="color:#8E8EA6;font-size:13.5px;line-height:1.55;margin-top:5px;">${esc(l.desc)}</div>
              </div>
            </div>`).join("")}
        </div>
      </section>
    </div>`;
  }

  function pill(label, active, attr) {
    if (active) {
      return `<button ${attr} style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;padding:8px 16px;border-radius:999px;border:1px solid transparent;cursor:pointer;color:#0A0A12;background:linear-gradient(135deg,#818CF8,#22D3EE);">${esc(label)}</button>`;
    }
    return `<button ${attr} class="pill" style="font-family:'JetBrains Mono',monospace;font-size:13px;padding:8px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.12);cursor:pointer;color:#B8B8C8;background:rgba(255,255,255,.02);">${esc(label)}</button>`;
  }
  function pillSm(label, active, attr) {
    if (active) {
      return `<button ${attr} style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;padding:7px 14px;border-radius:999px;border:1px solid transparent;cursor:pointer;color:#0A0A12;background:linear-gradient(135deg,#818CF8,#22D3EE);">${esc(label)}</button>`;
    }
    return `<button ${attr} class="pill" style="font-family:'JetBrains Mono',monospace;font-size:13px;padding:7px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.12);cursor:pointer;color:#B8B8C8;background:rgba(255,255,255,.02);">${esc(label)}</button>`;
  }

  function screenSelecao() {
    return `
    <div>
      ${pageHeader("// Processo seletivo · 2026.2", "Como entrar", "Um processo em cinco etapas, pensado para avaliar fundamentos e prática. Não exigimos experiência prévia — exigimos vontade de aprender.")}
      <section style="max-width:1240px;margin:0 auto;padding:32px;">
        <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:48px;align-items:start;">
          <div style="display:flex;flex-direction:column;gap:0;">
            ${selSteps.map(step => `
              <div style="display:flex;gap:20px;">
                <div style="display:flex;flex-direction:column;align-items:center;flex:none;">
                  <div style="width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;color:#0A0A12;background:linear-gradient(135deg,#818CF8,#22D3EE);">${esc(step.n)}</div>
                  <div style="width:2px;flex:1;background:linear-gradient(180deg,rgba(129,140,248,.5),rgba(129,140,248,.05));min-height:24px;"></div>
                </div>
                <div style="padding-bottom:30px;">
                  <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:19px;color:#EDEDF6;margin:8px 0 6px;">${esc(step.title)}</h3>
                  <p style="color:#8E8EA6;font-size:14.5px;line-height:1.65;margin:0;max-width:440px;">${esc(step.desc)}</p>
                </div>
              </div>`).join("")}
          </div>
          <div style="position:sticky;top:96px;display:flex;flex-direction:column;gap:20px;">
            <div style="background:linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:26px;">
              <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:16px;color:#EDEDF6;margin:0 0 16px;">Requisitos</h3>
              <div style="display:flex;flex-direction:column;gap:12px;">
                ${requisitos.map(r => `
                  <div style="display:flex;gap:10px;align-items:flex-start;color:#A8A8BE;font-size:14px;line-height:1.5;">
                    <span style="color:#22D3EE;flex:none;font-family:'JetBrains Mono',monospace;">›</span>
                    <span>${esc(r)}</span>
                  </div>`).join("")}
              </div>
            </div>
            <div style="background:radial-gradient(400px 200px at 100% 0%, rgba(99,102,241,.2), transparent 60%), #0B0B14;border:1px solid rgba(129,140,248,.25);border-radius:16px;padding:26px;">
              <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:16px;color:#EDEDF6;margin:0 0 14px;">Cronograma</h3>
              ${cronograma.map(c => `
                <div style="display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:13.5px;">
                  <span style="color:#9A9AB0;">${esc(c.fase)}</span>
                  <span style="font-family:'JetBrains Mono',monospace;color:#C7D2FE;">${esc(c.data)}</span>
                </div>`).join("")}
              <a href="${FORM_URL}" target="_blank" rel="noopener" style="display:block;text-align:center;width:100%;margin-top:18px;font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;padding:13px;border-radius:10px;text-decoration:none;color:#0A0A12;background:${grad};">Quero me inscrever →</a>
            </div>
          </div>
        </div>
      </section>

      <section style="max-width:900px;margin:0 auto;padding:48px 32px 96px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#67E8F9;">// Dúvidas frequentes</div>
        <h2 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:28px;letter-spacing:-.02em;color:#F2F2FA;margin:12px 0 24px;">FAQ</h2>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${faqData.map((f,i) => {
            const open = state.openFaq === i;
            return `
              <div style="background:#0B0B14;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden;">
                <button data-faq="${i}" style="width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;background:none;border:none;cursor:pointer;padding:20px 22px;text-align:left;">
                  <span style="font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:16px;color:#EDEDF6;">${esc(f.q)}</span>
                  <span style="font-family:'JetBrains Mono',monospace;font-size:20px;color:#818CF8;flex:none;">${open ? "−" : "+"}</span>
                </button>
                ${open ? `<div style="padding:0 22px 20px;color:#8E8EA6;font-size:14.5px;line-height:1.7;">${esc(f.a)}</div>` : ""}
              </div>`;
          }).join("")}
        </div>
      </section>
    </div>`;
  }

  function screenArtigos() {
    const filtered = papers.filter(p =>
      (state.paperArea === "Todas" || p.area === state.paperArea) &&
      (state.paperYear === "Todos" || String(p.year) === state.paperYear)
    );
    return `
    <div>
      ${pageHeader("// Produção científica", "Artigos publicados", "Trabalhos da equipe em conferências e periódicos de segurança da informação.")}
      <section style="max-width:1240px;margin:0 auto;padding:0 32px;">
        <div style="display:flex;flex-wrap:wrap;gap:24px;margin-top:0;">
          <div style="display:flex;flex-direction:column;gap:9px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#6E6E86;">Área</span>
            <div style="display:flex;gap:9px;flex-wrap:wrap;">
              ${areaNames.map(a => pillSm(a, state.paperArea === a, `data-paperarea="${esc(a)}"`)).join("")}
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:9px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#6E6E86;">Ano</span>
            <div style="display:flex;gap:9px;flex-wrap:wrap;">
              ${yearNames.map(y => pillSm(y, state.paperYear === y, `data-paperyear="${esc(y)}"`)).join("")}
            </div>
          </div>
        </div>
      </section>
      <section style="max-width:1240px;margin:0 auto;padding:28px 32px 96px;">
        <div style="display:flex;flex-direction:column;gap:14px;">
          ${filtered.map(p => `
            <article class="hov-cyan" style="background:linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:26px 28px;display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;">
              <div style="flex:1;min-width:280px;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;">
                  <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:#67E8F9;border:1px solid rgba(34,211,238,.35);padding:4px 10px;border-radius:6px;">${esc(p.area)}</span>
                  <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6E6E86;">${esc(p.venue)} · ${esc(p.year)}</span>
                </div>
                <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:20px;line-height:1.32;color:#EDEDF6;margin:0 0 10px;">${esc(p.title)}</h3>
                <p style="color:#8E8EA6;font-size:14.5px;line-height:1.6;margin:0 0 12px;max-width:760px;">${esc(p.abstract)}</p>
                <div style="font-size:13.5px;color:#9A9AB0;font-style:italic;">${esc(p.authors)}</div>
              </div>
              ${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener" class="pdf" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#A5B4FC;text-decoration:none;border:1px solid rgba(129,140,248,.3);border-radius:9px;padding:9px 15px;white-space:nowrap;flex:none;">${esc(p.linkLabel || "Link")} ↗</a>` : ""}
            </article>`).join("")}
        </div>
        ${filtered.length === 0 ? `<div style="text-align:center;color:#6E6E86;font-family:'JetBrains Mono',monospace;font-size:14px;padding:60px 0;">Nenhum artigo nesse filtro.</div>` : ""}
      </section>
    </div>`;
  }

  function screenEquipe() {
    return `
    <div>
      ${pageHeader("// Quem faz", "Equipe", "Coordenação, pesquisadores e residentes que mantêm o projeto em movimento.")}
      <section style="max-width:1240px;margin:0 auto;padding:24px 32px 96px;display:flex;flex-direction:column;gap:44px;">
        ${teamGroups.map(g => `
          <div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:22px;">
              <h2 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:22px;color:#F2F2FA;margin:0;">${esc(g.role)}</h2>
              <span style="flex:1;height:1px;background:rgba(255,255,255,.08);"></span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
              ${g.members.map(m => `
                <div class="hov-indigo" style="background:linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:22px;display:flex;flex-direction:column;align-items:flex-start;">
                  ${m.photo
                    ? `<img src="${m.photo}" alt="${esc(m.name)}" style="width:64px;height:64px;border-radius:16px;object-fit:cover;object-position:${m.pos || 'center'};background:linear-gradient(135deg,#818CF8,#22D3EE);margin-bottom:16px;">`
                    : `<div style="width:64px;height:64px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:20px;color:#0A0A12;background:linear-gradient(135deg,#818CF8,#22D3EE);margin-bottom:16px;">${esc(initials(m.name))}</div>`}
                  <div style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:16px;color:#EDEDF6;">${esc(m.name)}</div>
                  <div style="color:#8E8EA6;font-size:13.5px;margin-top:4px;">${esc(m.focus)}</div>
                </div>`).join("")}
            </div>
          </div>`).join("")}
      </section>
    </div>`;
  }

  function screenEventos() {
    const filtered = events.filter(e =>
      state.eventTab === "Todos" ||
      (state.eventTab === "Próximos" && e.status === "Próximo") ||
      (state.eventTab === "Realizados" && e.status === "Realizado")
    );
    return `
    <div>
      ${pageHeader("// Atividades", "Eventos &amp; atividades", "Workshops, palestras, bootcamps e CTFs — abertos à comunidade.")}
      <section style="max-width:1240px;margin:0 auto;padding:0 32px;">
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:0;">
          ${tabNames.map(t => pill(t, state.eventTab === t, `data-eventtab="${esc(t)}"`)).join("")}
        </div>
      </section>
      <section style="max-width:1240px;margin:0 auto;padding:24px 32px 96px;">
        <div style="display:flex;flex-direction:column;gap:14px;">
          ${filtered.map(e => `
            <article class="hov-indigo-4" style="background:linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:24px 28px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
              <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:74px;height:74px;border-radius:14px;background:rgba(129,140,248,.1);border:1px solid rgba(129,140,248,.2);flex:none;">
                ${e.day
                  ? `<span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:22px;color:#C7D2FE;line-height:1;">${esc(e.day)}</span>
                <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8E8EA6;margin-top:4px;">${esc(e.month)}</span>`
                  : `<span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;text-align:center;color:#8E8EA6;line-height:1.4;">${esc(e.month)}</span>`}
              </div>
              <div style="flex:1;min-width:220px;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:7px;">
                  <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:#67E8F9;border:1px solid rgba(34,211,238,.3);padding:3px 9px;border-radius:6px;">${esc(e.type)}</span>
                </div>
                <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:18px;color:#EDEDF6;margin:0;">${esc(e.title)}</h3>
                <div style="font-size:13.5px;color:#8E8EA6;margin-top:6px;">${esc(e.local)}</div>
              </div>
              ${e.status === "Próximo"
                ? `<span style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;color:#0A0A12;background:linear-gradient(135deg,#818CF8,#22D3EE);padding:7px 14px;border-radius:999px;flex:none;">Próximo</span>`
                : `<span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#8E8EA6;border:1px solid rgba(255,255,255,.12);padding:6px 13px;border-radius:999px;flex:none;">Realizado</span>`}
            </article>`).join("")}
        </div>
      </section>
    </div>`;
  }

  function screenContato() {
    return `
    <div>
      <section style="max-width:1240px;margin:0 auto;padding:88px 32px 96px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#818CF8;">// Fale com a gente</div>
        <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:46px;letter-spacing:-.025em;color:#F4F4FB;margin:18px 0 0;">Contato</h1>
        <p style="color:#A0A0B6;font-size:17px;line-height:1.7;margin:16px 0 40px;max-width:600px;">Workshops para escolas e universidades, interesse no processo seletivo ou outras dúvidas — escolha o caminho abaixo.</p>

        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px;align-items:stretch;">
          <!-- Workshops -->
          <div style="background:radial-gradient(420px 220px at 0% 0%, rgba(34,211,238,.14), transparent 60%), linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(34,211,238,.22);border-radius:18px;padding:30px;display:flex;flex-direction:column;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#67E8F9;">// Escolas e universidades</div>
            <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:24px;letter-spacing:-.02em;color:#F4F4FB;margin:14px 0 0;">Solicitar workshops</h3>
            <p style="color:#A0A0B6;font-size:15px;line-height:1.7;margin:12px 0 24px;">Levamos workshops e palestras de segurança da informação para escolas e universidades. Conte pra gente o público, o tema e a data desejada, e montamos uma proposta.</p>
            <a href="mailto:rsi@dc.ufc.br?subject=Solicita%C3%A7%C3%A3o%20de%20workshop%20%E2%80%94%20escola%2Funiversidade&body=Institui%C3%A7%C3%A3o%3A%20%0AP%C3%BAblico%2Fturma%3A%20%0ATema%20de%20interesse%3A%20%0AData%20desejada%3A%20%0A" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;padding:14px 22px;border-radius:11px;text-decoration:none;color:#0A0A12;background:linear-gradient(135deg,#22D3EE,#818CF8);box-shadow:0 14px 36px -14px rgba(34,211,238,.5);align-self:flex-start;margin-top:auto;">Solicitar workshop →</a>
          </div>
          <!-- Processo seletivo -->
          <div style="background:radial-gradient(420px 220px at 100% 0%, rgba(99,102,241,.18), transparent 60%), linear-gradient(180deg,#101019,#0B0B12);border:1px solid rgba(129,140,248,.25);border-radius:18px;padding:30px;display:flex;flex-direction:column;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#818CF8;">// Quer ser residente?</div>
            <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:24px;letter-spacing:-.02em;color:#F4F4FB;margin:14px 0 0;">Processo seletivo</h3>
            <p style="color:#A0A0B6;font-size:15px;line-height:1.7;margin:12px 0 24px;">Tem interesse em entrar para a residência? Demonstre interesse e a gente te avisa sobre as próximas seleções.</p>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:auto;">
              <a href="${FORM_URL}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;padding:14px 22px;border-radius:11px;text-decoration:none;color:#0A0A12;background:${grad};box-shadow:0 14px 36px -14px rgba(99,102,241,.6);">Tenho interesse →</a>
              <button data-go="selecao" style="font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;padding:14px 22px;border-radius:11px;cursor:pointer;color:#E6E6F0;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.14);">Ver as etapas</button>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:20px;">
          ${contatos.map(c => `
            <div style="background:#0B0B14;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:22px;">
              <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#6E6E86;margin-bottom:8px;">${esc(c.label)}</div>
              <div style="font-size:15.5px;color:#EDEDF6;">${c.href ? `<a href="${esc(c.href)}" class="footlink" style="color:#A5B4FC;text-decoration:none;">${esc(c.value)}</a>` : esc(c.value)}</div>
            </div>`).join("")}
        </div>
      </section>
    </div>`;
  }

  // ---------- Chrome ----------
  function nav() {
    const items = navDefs.map(n => {
      if (n.href) {
        return `
        <a href="${esc(n.href)}" class="nav-link inactive" style="position:relative;text-decoration:none;font-family:'IBM Plex Sans',sans-serif;font-size:14.5px;padding:6px 0;">
          <span style="color:#9A9AB0;">${esc(n.label)}</span>
        </a>`;
      }
      const active = state.page === n.id;
      return `
        <button data-go="${n.id}" class="nav-link ${active ? "active" : "inactive"}" style="position:relative;background:none;border:none;cursor:pointer;font-family:'IBM Plex Sans',sans-serif;font-size:14.5px;padding:6px 0;">
          <span style="color:${active ? "#FFFFFF" : "#9A9AB0"};${active ? "font-weight:500;" : ""}">${esc(n.label)}</span>
          ${active ? `<span style="position:absolute;left:0;right:0;bottom:-12px;height:2px;background:linear-gradient(90deg,#818CF8,#22D3EE);border-radius:2px;"></span>` : ""}
        </button>`;
    }).join("");
    return `
      <nav style="position:sticky;top:0;z-index:50;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);background:rgba(8,8,15,.72);border-bottom:1px solid rgba(255,255,255,.07);">
        <div style="max-width:1240px;margin:0 auto;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;">
          <button data-go="home" style="display:flex;align-items:center;gap:12px;background:none;border:none;cursor:pointer;padding:0;">
            <img src="assets/logo-gradient.png" alt="Logo" style="width:34px;height:34px;display:block;filter:drop-shadow(0 4px 14px rgba(99,102,241,.45));">
            <span style="display:flex;flex-direction:column;align-items:flex-start;line-height:1;">
              <span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;letter-spacing:.04em;color:#F4F4FB;">${esc(sigla)}</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#7E7E97;margin-top:3px;">Segurança da Informação</span>
            </span>
          </button>
          <div style="display:flex;align-items:center;gap:26px;flex-wrap:wrap;">
            ${items}
            <button data-go="selecao" style="font-family:'JetBrains Mono',monospace;font-weight:600;font-size:13px;padding:10px 18px;border-radius:9px;border:none;cursor:pointer;color:#0A0A12;background:${grad};box-shadow:0 10px 26px -12px rgba(99,102,241,.7);">Inscreva-se</button>
          </div>
        </div>
      </nav>`;
  }

  function footer() {
    return `
      <footer style="border-top:1px solid rgba(255,255,255,.07);background:rgba(8,8,15,.6);">
        <div style="max-width:1240px;margin:0 auto;padding:48px 32px;display:flex;justify-content:space-between;gap:32px;flex-wrap:wrap;">
          <div style="max-width:340px;">
            <div style="display:flex;align-items:center;gap:11px;">
              <img src="assets/logo-gradient.png" alt="Logo" style="width:30px;height:30px;display:block;">
              <span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px;color:#F4F4FB;">${esc(sigla)}</span>
            </div>
            <p style="color:#7E7E97;font-size:13.5px;line-height:1.65;margin:16px 0 0;">${esc(nomeProjeto)} · ${esc(universidade)}.</p>
            <div style="display:flex;gap:14px;margin-top:18px;">
              <a href="https://www.instagram.com/rsi.ufc" target="_blank" rel="noopener" class="footlink" style="color:#7E7E97;text-decoration:none;display:flex;" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.youtube.com/@rsi-ufc" target="_blank" rel="noopener" class="footlink" style="color:#7E7E97;text-decoration:none;display:flex;" title="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/40768351/" target="_blank" rel="noopener" class="footlink" style="color:#7E7E97;text-decoration:none;display:flex;" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div style="display:flex;gap:56px;flex-wrap:wrap;">
            <div style="display:flex;flex-direction:column;gap:11px;">
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5E5E76;">Projeto</span>
              <button data-go="sobre" class="footlink" style="background:none;border:none;color:#A0A0B6;font-size:14px;text-align:left;cursor:pointer;padding:0;">Sobre</button>
              <button data-go="equipe" class="footlink" style="background:none;border:none;color:#A0A0B6;font-size:14px;text-align:left;cursor:pointer;padding:0;">Equipe</button>
              <button data-go="eventos" class="footlink" style="background:none;border:none;color:#A0A0B6;font-size:14px;text-align:left;cursor:pointer;padding:0;">Eventos</button>
            </div>
            <div style="display:flex;flex-direction:column;gap:11px;">
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5E5E76;">Conteúdo</span>
              <a href="${BLOG_URL}" class="footlink" style="text-decoration:none;color:#A0A0B6;font-size:14px;">Blog</a>
              <a href="${FORGE_URL}" class="footlink" style="text-decoration:none;color:#A0A0B6;font-size:14px;">Forge</a>
              <button data-go="artigos" class="footlink" style="background:none;border:none;color:#A0A0B6;font-size:14px;text-align:left;cursor:pointer;padding:0;">Artigos</button>
              <button data-go="selecao" class="footlink" style="background:none;border:none;color:#A0A0B6;font-size:14px;text-align:left;cursor:pointer;padding:0;">Processo seletivo</button>
            </div>
          </div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,.06);">
          <div style="max-width:1240px;margin:0 auto;padding:20px 32px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#5E5E76;">© ${ano} ${esc(sigla)} — ${esc(universidade)}.</div>
        </div>
      </footer>`;
  }

  const screens = {
    home: screenHome, sobre: screenSobre, selecao: screenSelecao,
    artigos: screenArtigos, equipe: screenEquipe, eventos: screenEventos, contato: screenContato
  };

  const root = document.getElementById("app");

  function render() {
    const body = (screens[state.page] || screenHome)();
    root.innerHTML = `
      <div style="min-height:100vh;background:#08080F;color:#E6E6F0;font-family:'IBM Plex Sans',system-ui,sans-serif;background-image:radial-gradient(1000px 560px at 82% -8%, rgba(99,102,241,.20), transparent 60%), radial-gradient(760px 520px at -5% 2%, rgba(34,211,238,.11), transparent 55%);">
        ${nav()}
        ${body}
        ${footer()}
      </div>`;
  }

  function go(id) {
    state.page = id;
    state.openFaq = -1;
    if (window.location.hash !== "#" + id) {
      try { window.history.replaceState(null, "", "#" + id); } catch (_) {}
    }
    render();
    try { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }
    catch (e) { try { window.scrollTo(0, 0); } catch (_) {} }
  }

  // ---------- Events ----------
  root.addEventListener("click", (ev) => {
    const t = ev.target.closest("[data-go],[data-postcat],[data-paperarea],[data-paperyear],[data-eventtab],[data-faq]");
    if (!t) return;
    if (t.hasAttribute("data-go")) { go(t.getAttribute("data-go")); return; }
    if (t.hasAttribute("data-postcat")) { state.postCat = t.getAttribute("data-postcat"); render(); return; }
    if (t.hasAttribute("data-paperarea")) { state.paperArea = t.getAttribute("data-paperarea"); render(); return; }
    if (t.hasAttribute("data-paperyear")) { state.paperYear = t.getAttribute("data-paperyear"); render(); return; }
    if (t.hasAttribute("data-eventtab")) { state.eventTab = t.getAttribute("data-eventtab"); render(); return; }
    if (t.hasAttribute("data-faq")) {
      const i = parseInt(t.getAttribute("data-faq"), 10);
      state.openFaq = state.openFaq === i ? -1 : i;
      render();
      return;
    }
  });

  root.addEventListener("input", (ev) => {
    const el = ev.target;
    if (el.hasAttribute && el.hasAttribute("data-postsearch")) {
      const caret = el.selectionStart;
      state.postSearch = el.value;
      render();
      const next = root.querySelector("[data-postsearch]");
      if (next) { next.focus(); try { next.setSelectionRange(caret, caret); } catch (_) {} }
    }
  });

  root.addEventListener("submit", (ev) => {
    if (ev.target.hasAttribute && ev.target.hasAttribute("data-contact")) {
      ev.preventDefault();
      state.contactSent = true;
      render();
    }
  });

  const initial = (window.location.hash || "").replace("#", "");
  if (screens[initial]) state.page = initial;
  render();
})();
