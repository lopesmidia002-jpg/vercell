<!--  --># CHECKLIST DE EXECUÇÃO SEQUENCIAL - PROJETO VERSELL

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
- [x] **Ampliação de Altura e Proporções dos Banners do Bento Grid (`BentoGrid.tsx`):**
  - [x] Linha 2 (os 3 banners centrais: `Subcontas`, `Split automático`, `Pix Automático`): altura mínima ampliada para `min-h-[350px] sm:min-h-[380px]` com padding `p-8 sm:p-10`, respeitando as proporções verticais generosas e o alinhamento visual idêntico à captura original.
  - [x] Linha 1 (`min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]`): Foto da modelo calibrada com `objectPosition: "74% top"` eliminando cortes laterais e centralizando rosto, tranças e smartphone com degradê suave à esquerda; Card 2 com luz ambiente difusa no canto inferior.
  - [x] Linha 3 (`min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]`): Mockup dos MacBooks centralizado e rente à base com proporção generosa.
- [x] **Header / Navbar (`Navbar.tsx`):** Links flutuantes minimalistas com todas as palavras em peso normal (`font-normal`), "Pix" destacado em verde oliva (`text-[#5B7500]`), botão "Entrar" com contorno pill arredondado suave e botão "Falar com especialista" em peso normal com sombreamento neon difuso (`shadow-[0_4px_20px_rgba(210,251,7,0.5)]`).
- [x] **Carrossel / Ticker (`Ticker.tsx`):** Ícones cirurgicamente alinhados: `QrCode` (QR Code e Copia e Cola), `Users` (Subcontas), `Split` (Split automático), `RefreshCw` (Pix Automático), `Webhook` (Webhooks em tempo real), `Lock` (mTLS + OAuth2), `ShieldCheck` (Antifraude inteligente), `Code` (API de Pix), `Zap` (Pix na hora, 24/7) e `Headphones` (Suporte).
- [x] **Banners / Cards de Valor (`ValueCards.tsx`):** Três cards brancos limpos (`bg-white rounded-[32px] p-8 sm:p-9 min-h-[360px] sm:min-h-[380px]`), badges padronizados (`RECEBA`, `DIVIDA` neon `#D2FB07`, `MOVIMENTE`), títulos em negrito e ícones `Check` com traço firme `#5B7500`.
- [x] **Hero Section Diferenciais e Botões CTA (`Hero.tsx`):** Botões CTA ampliados para `min-h-[56px] sm:min-h-[62px]` com padding `px-9 sm:px-11`, peso de fonte normal (`font-normal`), sem negrito, e leve sombreamento difuso (`shadow-[0_2px_12px_rgba(210,251,7,0.4)]` no botão neon e `shadow-[0_2px_8px_rgba(0,0,0,0.03)]` no botão branco); ícones inline em verde oliva da marca (`#5B7500` / `stroke-[2]`).
- [x] **Tag Badges Pixel-Perfect (`TagBadge.tsx`):** Remoção de negrito do nome `Versell` (`font-normal`), ponto neon limpo e sólido (`bg-[#D2FB07]`), e texto em `font-normal text-[#222222]`, aplicado globalmente em todos os pontos da página.
- [x] Validação completa no container Docker em execução (HTTP 200 OK) e compilação limpa sem erros.
