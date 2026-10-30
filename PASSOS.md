# CHECKLIST DE EXECUÇÃO SEQUENCIAL - PROJETO VERSELL

> **REGRA DE OPERAÇÃO:** Conforme diretiva global de governança, o avanço entre etapas ocorre de forma estritamente sequencial. Cada passo concluído é documentado e validado antes da transição para a próxima fase, sendo que **o próximo passo só será iniciado mediante solicitação explícita do usuário**.

---

### [x] Passo 1: Governança, Infraestrutura Docker e Implementação Completa da Landing Page com Assets (Mobile-First)
- [x] Criação e sincronização dos 4 arquivos de governança: `PROMPT.md`, `CONTEXTO.md`, `PASSOS.md` e `DOCUMENTACAO.md` (e espelho `DOCUMENTAÇÃO.md`).
- [x] Criação dos arquivos estruturais de repositório: `.gitignore` e `README.md`.
- [x] Incorporação da diretriz estrita **Mobile First** no design system e na hierarquia de componentes.
- [x] Mapeamento e estruturação de assets em `/public/assets` e fontes tipográficas em `/public/fonts`.
- [x] Configuração da infraestrutura Docker multi-stage (`node:20-alpine`) com `Dockerfile`, `docker-compose.yml` e `.dockerignore`.
- [x] Inicialização do projeto Next.js com Tailwind CSS, TypeScript e Lucide Icons.
- [x] Implementação de todas as 14 seções da Landing Page com fidelidade cirúrgica ao mockup de referência (`versell.png`):
  - [x] **01. Navbar Superior:** Responsiva, logo `logo-versell4.svg`, links com indicação visual, menu mobile drawer (touch $\ge 44$px) e botões de ação ("Entrar", "Falar com especialista").
  - [x] **02. Hero Section:** Headline com gradiente neon, badges de certificação, botões de ação primário e secundário, elemento 3D flutuante (`logo_versell.webp`) com halo radial neon.
  - [x] **03. Ticker Infinito:** Linha horizontal contínua e fluida de benefícios Pix em tempo real.
  - [x] **04. Seção 3 Cards de Valor:** "O Pix do jeito que o seu negócio precisa" (Receba, Divida, Movimente).
  - [x] **05. Bento Grid de Produtos:** Layout moderno com o card editorial (`Pagina-Versell-1-1-scaled.webp`), API de Pix, Subcontas, Split automático, Pix Automático, Painel Finance (`MacBook-Air-2022-3.webp`) e Antifraude.
  - [x] **06. Grid de Soluções por Segmento:** "Feita para quem vende online" (SaaS, E-commerce, Infoproduto, ERP, Gateways, Nicho Hot).
  - [x] **07. Onboarding em 3 Passos:** "Comece a receber em 3 passos" com indicadores visuais numerados e CTA central.
  - [x] **08. Área de Desenvolvedores (API First):** Bloco de código dark com alternador de abas interativas (cURL, Node.js, Python), destaques de sintaxe e badges de integração.
  - [x] **09. Seção de Segurança:** "Segurança em cada Pix" destacando Baas Pago Instituição de Pagamento, canais de compliance e denúncia, e grid 2x2 de camadas de segurança.
  - [x] **10. Suporte Humano 24/7 Orbital:** Card escuro com sistema orbital concêntrico (`suporte-dentro.png`, `suporte-meio.png`, `suporte-fora.png`), animações de rotação CSS independentes, centro de contato WhatsApp e pausa no hover.
  - [x] **11. FAQ Interativo:** Acordeão moderno expansivo com as 8 principais dúvidas respondidas.
  - [x] **12. Banner VersellPay:** Chamada para gateway de cartão e checkout unificado.
  - [x] **13. Pre-Footer Dark:** Chamada de alto impacto com elemento 3D e badges de confiança.
  - [x] **14. Footer Completo:** Dark background `#0A0A0A`, `logo-versell3.svg`, links institucionais e regulatórios, dados do Bacen/Baas Pago, CNPJ e canais oficiais.
- [x] Inicialização, build e validação do container Docker (`versell-app`) na porta `3000`.

---

### [x] Passo 2: Otimização de Animações Orbitais, Responsividade Avançada e Testes E2E
- [x] Calibração de animações com aceleração gráfica por hardware (`translate3d`, `will-change: transform`) para mobile nos anéis orbitais, ticker e flutuação 3D.
- [x] Implementação de suporte tátil completo (`onTouchStart`/`onTouchEnd`) e hover para pausar o sistema orbital e exibir feedback de interação.
- [x] Otimização da acessibilidade (WCAG 2.1 AA):
  - [x] Drawer móvel com backdrop overlay, fechamento via tecla `Escape`, travamento de rolagem do body e atributos ARIA.
  - [x] Acordeão do FAQ com atributos semânticos (`aria-expanded`, `aria-controls`, `role="region"`).
  - [x] Touch targets auditados $\ge 44$px para todos os elementos clicáveis no mobile.
- [x] Ajuste de tipografia responsiva fluida (`text-[32px]` a `text-6xl`) prevenindo quebras indesejadas em smartphones compactos (320px-375px).
- [x] Build multi-stage de produção standalone (`target: runner`) testado e validado no Docker com sucesso (`versell-prod` gerado, 22 kB first load).
- [x] Adição de `metadataBase` para resolução correta de OpenGraph e SEO.

---

### [ ] Passo 3: Auditoria Final de Performance, Acessibilidade WCAG e Fechamento de Release
- [ ] Auditoria final de performance e renderização cross-browser (Chrome, Safari iOS, Firefox, Edge).
- [ ] Validação dos formulários, botões de ação e âncoras internas.
- [ ] Consolidação do manual de produção e entrega do pacote final.
- *(Aguardando solicitação explícita do usuário para início deste passo)*
