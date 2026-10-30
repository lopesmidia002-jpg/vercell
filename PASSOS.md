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
- [x] Implementação de todas as 14 seções da Landing Page com fidelidade cirúrgica ao mockup de referência (`versell.png`).
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

### [x] Passo 3: Auditoria Final de Performance, Acessibilidade WCAG e Fechamento de Release
- [x] Auditoria de 100% das âncoras internas e rotas da página (`#pix`, `#produtos`, `#para-quem`, `#desenvolvedores`, `#docs`, `#faq`, `#suporte`, `#planos`, `#como-comecar`, `#seguranca`, `#politicas`).
- [x] Auditoria de integridade de botões de conversão e rotas de suporte (WhatsApp direto, painel Finance, canais de Compliance e Denúncias).
- [x] Verificação de tempo de resposta em execução Docker (< 150ms por requisição).
- [x] Validação de container em estado `Healthy` ininterrupto no Docker.

---

### [x] Passo 4: Refinamento Pixel-Perfect de Alinhamento com a Referência Original
- [x] Reestruturação do Bento Grid para o layout original de 3 linhas (Linha 1: 2 colunas + 1 coluna; Linha 2: 3 colunas; Linha 3: 2 colunas + 1 coluna).
- [x] Card 1 (Conta digital Versell): Foto da modelo posicionada à direita com máscara de degradê lateral suave e destaque em verde `#5B7500`.
- [x] Card 2 (API de Pix): Ambient light no canto inferior direito, ícone `< >` e título minimalista idêntico ao original.
- [x] Limpeza e remoção de barras secundárias extras nos cards de Subcontas, Split, Pix Automático e Antifraude.
- [x] Card 6 (Painel e monitoramento): Mockup dos MacBooks centralizado e rente à base inferior, com ícone `Eye` e destaque em verde.
- [x] Calibração de cores globais com a imagem de referência: Fundo `#F6F7F2` e verde de texto `#5B7500`.
- [x] Ajuste da Navbar para `sticky top-0`, eliminando sobreposições em capturas full-page.
- [x] Carrossel / Ticker com efeito de sombreamento e fade suave nas bordas bilaterais (`w-24 sm:w-40 md:w-60`), textura sutil de grid de fundo e novos pills brancos com squircle neon `#D2FB07`.
- [x] Hero Section com tela de quadrados em efeito leve de fundo (`48x48px`) e ícones minimalistas.
- [x] **Tag Badges Pixel-Perfect:** Criação do componente unificado `TagBadge.tsx` com a pílula interna pastel `(• Versell)` com ponto neon e texto de seção sem barra divisória `|`, idêntico à captura original.
- [x] **Ícones do Carrossel / Ticker:** Correção e alinhamento cirúrgico dos ícones de cada pill com a referência original: substituição de `Users2` por `Users` (Subcontas), `GitFork` por `Split` (Split automático), `Calendar` para Pix Automático, `Webhook` para Webhooks em tempo real, `Key` para mTLS + OAuth2, `CreditCard` para QR Code e Copia e Cola, `ShieldCheck` e label 'Antifraude', e `Headphones` para Suporte.
- [x] **Banners / Cards de Valor (`ValueCards.tsx`):** Ajuste dos badges (`Receba`, `Distribua` neon, `Movimente`), chevrons conectores entre cards, gradiente suave e glow no card central, e ícones circulares `CircleCheck` sem linha divisória.
- [x] Validação completa no container Docker em execução e compilação do build standalone de produção.
