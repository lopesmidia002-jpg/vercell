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

### [ ] Passo 2: Otimização de Animações Orbitais, Responsividade Avançada e Testes E2E
- [ ] Refinamento e calibração fina das animações CSS/hardware acceleration para mobile (`transform-gpu`, `will-change`).
- [ ] Testes de interação tátil, swipe e acessibilidade em leitores de tela e navegação por teclado (WCAG 2.1 AA).
- [ ] Verificação de tempo de resposta em conexões 3G/4G e auditoria de bundle size.
- *(Aguardando solicitação explícita do usuário para início deste passo)*

---

### [ ] Passo 3: Auditoria Final de Performance, Acessibilidade WCAG e Fechamento de Release
- [ ] Auditoria Google Lighthouse (Performance, Acessibilidade, Melhores Práticas, SEO).
- [ ] Verificação final de integridade de todos os links, âncoras e formulários.
- [ ] Documentação final consolidada para entrega em produção.
- *(Aguardando solicitação explícita do usuário para início deste passo)*

