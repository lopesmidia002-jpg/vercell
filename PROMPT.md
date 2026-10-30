# PROMPT DE ESPECIFICAÇÃO - REPRODUÇÃO FULL-STACK LANDING PAGE VERSELL

## 1. Visão Geral da Missão
- **Projeto:** Landing Page Institucional da fintech **Versell**
- **Versão:** v1.0.0
- **Objetivo:** Clonar, estruturar e implementar com fidelidade cirúrgica (pixel-perfect) a Landing Page institucional completa da Versell, atendendo a todas as diretrizes de design, assets e arquitetura full-stack.
- **Ambiente:** 100% conteinerizado em Docker (`node:20-alpine`), sem dependência de serviços rodando no host.

---

## 2. Prompt Original do Usuário

```markdown
# MISSION: REPRODUÇÃO E DESENVOLVIMENTO FULL-STACK DA LANDING PAGE "VERSELL"

Você é um Engenheiro de Software Full-Stack sênior e UI/UX Designer de alta performance. Sua tarefa é clonar, estruturar e implementar com fidelidade cirúrgica (pixel-perfect) a Landing Page institucional da fintech **Versell**, utilizando todas as diretrizes de design, assets e arquitetura descritas abaixo. 

O projeto deve ser 100% conteinerizado em Docker, persistir todo o histórico e contexto em memória global contínua e gerar obrigatoriamente 4 arquivos centrais de governança: `PROMPT.md`, `CONTEXTO.md`, `PASSOS.md` e `DOCUMENTAÇÃO.md`.

---

## 1. GUIA DE DESIGN SYSTEM E ATIVOS (ASSETS)

### Paleta de Cores & Atmosfera
- **Lime Primário (Assinatura):** `#D2F800` / `#C6F500` (Verde-limão fluorescente / Neon).
- **Background Principal:** `#FAFAFA` a `#FFFFFF` com transições suaves para Dark/Black nas seções de destaque e rodapé.
- **Dark / Deep Space:** `#0A0A0A` a `#121212` (usado na seção orbital de suporte e no footer principal).
- **Superfícies & Cards:** Branco puro `#FFFFFF` com sombras ultra suaves (`0 8px 30px rgba(0,0,0,0.04)`), bordas translúcidas de 1px (`rgba(0,0,0,0.06)`) e cantos arredondados de 16px a 24px (`rounded-2xl` / `rounded-3xl`).
- **Tipografia & Textos:** Títulos em `#000000` / `#111111`, subtítulos e descrições em `#666666` e destaques em verde neon.

### Tipografia
- Fonte principal sans-serif geométrica moderna (Inter, Plus Jakarta Sans ou Geist Sans).
- `font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11'`.
- Títulos: Peso 700 / 800 com tracking levemente negativo (`tracking-tight`).

### Mapeamento dos Arquivos de Assets Fornecidos
Todos os assets já residem na pasta `/public/assets/` do projeto:
1. `logo_versell.webp` e `logo-versell4.svg`: Utilizar `logo-versell4.svg` na Navbar e Footer com contraste adaptativo (versão escura na barra clara, versão clara no footer escuro `logo-versell3.svg`).
2. `logo_versell.webp`: Ícone 3D em vidro acrílico verde-limão metálico com reflexos translúcidos. Deve ser o elemento de destaque Hero (`w-72` a `w-96`) com animação sutil de flutuação (*floating keyframe*).
3. `MacBook-Air-2022-3.webp`: Mockup triplo de notebooks exibindo o dashboard financeiro da Versell (Extrato, Home Banking e Gráficos analíticos). Aplicar na seção de produto/recursos.
4. `Pagina-Versell-1-1-scaled.webp`: Foto da modelo com smartphone no escritório escuro exibindo o app da Versell na tela. Integrar no card expansivo da grade de soluções.
5. `suporte-dentro.png`, `suporte-meio.png` e `suporte-fora.png`: Sistema de anéis orbitais com avatares de atendentes e nodes circulares neon para a seção de atendimento/suporte 24h. Aplicar animação CSS de rotação independente (`spin-slow` e `reverse-spin`).

---

## 2. ESTRUTURA DETALHADA DAS SEÇÕES DA LANDING PAGE

1. **Header / Navbar Superior:**
   - Logotipo Versell à esquerda (`logo-versell4.svg`).
   - Links de navegação centralizados: *Para Você, Para Empresas, API & Integração, Preços, Ajuda*.
   - Botões de ação à direita: *Entrar* (Ghost) e *Criar Conta* (Botão pill verde-limão com texto preto em negrito).

2. **Hero Section:**
   - Título de impacto: *"Quem vende no Pix, vende com Versell."*
   - Subtítulo focado em infraestrutura bancária, automação de pagamentos, liquidação imediata e taxas competitivas.
   - CTA primário: Botão arredondado verde neon *"Abra sua conta grátis"*.
   - Visual Hero: Composição com `logo_versell.webp` em 3D com luz de preenchimento neon em gradiente radial ao fundo.

3. **Ticker / Carrossel de Vantagens:**
   - Linha dinâmica horizontal com ícones e tags: *Sem intermediários • Liquidação em 1s • Taxas a partir de 0,49% • Dashboard em tempo real • Suporte humano*.

4. **Grade de Planos e Soluções (Bento Grid):**
   - Cards dedicados a:
     - **Pix para E-commerce e Infoprodutos**
     - **Gestão Integrada para PMEs**
     - **Conta Digital PJ completa**
   - Exibição de features em listas com bullets estilizados.

5. **Showcase do Ecossistema (Desktop & Mobile):**
   - Composição central utilizando `MacBook-Air-2022-3.webp` para demonstrar o painel analítico multi-tela.
   - Card interativo com `Pagina-Versell-1-1-scaled.webp` demonstrando a experiência mobile do app corporativo.

6. **Área para Desenvolvedores (API First):**
   - Visual em Dark Mode com bloco de código simulando chamada cURL / Node.js para criação de cobranças Pix instantâneas.
   - Documentação rápida, webhooks com latência sub-segundo e chave de sandbox imediata.

7. **Seção Suporte Humano 24/7 (Sistema Orbital):**
   - Fundo escuro (`#0C0D0E`).
   - Título: *"Um time de especialistas pronto 24 horas por dia"*.
   - Componente interativo orbital:
     - Container relativo com as imagens `suporte-fora.png`, `suporte-meio.png` e `suporte-dentro.png` sobrepostas concentricamente.
     - Aplicação de rotação contínua e suave via CSS (`animation: spin 30s linear infinite` nos anéis externos e sentido anti-horário no anel intermediário), com efeito hover de pausa e tooltips com os atendentes.

8. **FAQ (Perguntas Frequentes):**
   - Acordeão expansivo moderno cobrindo integração, tarifas, segurança bancária e prazos de repasse.

9. **Footer:**
   - Fundo `#0A0A0A`, linhas divisórias sutis, links de governança, conformidade com Banco Central do Brasil, CNPJ e logo `logo-versell3.svg` em contraste monocromático com detalhe neon.

---

## 3. ARQUITETURA DOCKER (RODANDO 100% ISOLADO)

Toda a aplicação deve rodar conteinerizada. Gere a configuração padrão multi-stage:

- `Dockerfile`:
  - Base: `node:20-alpine`
  - Build multi-stage (deps, builder, runner) otimizando para Next.js / Tailwind CSS ou Vite/React.
  - Porta exposta: `3000`.
- `docker-compose.yml`:
  - Serviço `versell-app` mapeando porta `3000:3000`.
  - Mapeamento de volumes para hot-reload em ambiente de desenvolvimento.
  - Healthcheck configurado.

---

## 4. OBRIGATORIEDADE DE GERAÇÃO DE ARQUIVOS DE GOVERNANÇA

Antes e durante a execução do código, você deve obrigatoriamente criar e manter sincronizados na raiz do workspace estes 4 arquivos markdown:

1. `PROMPT.md`:
   - Registro exato deste prompt base, versão de execução, lista de assets mapeados e diretivas técnicas exigidas.
2. `CONTEXTO.md`:
   - Visão geral da marca Versell, modelo de negócio (fintech/Pix gateway), personas-alvo, decisões de design system (cores, tipografia, tokens) e regras de negócio.
3. `PASSOS.md`:
   - Checklist sequencial e auditável de cada etapa executada (Setup do repositório -> Setup Docker -> Criação de componentes -> Animações orbitais -> Build de produção -> Verificação de integridade).
4. `DOCUMENTAÇÃO.md`:
   - Instruções completas de build, comando `docker compose up --build`, portas, variáveis de ambiente necessárias e manual dos componentes UI reutilizáveis.

---

## 5. PERSISTÊNCIA EM MEMÓRIA GLOBAL DO ANTIGRAVITY

- Salve todo o estado, tokens de design, árvore de componentes e status dos arquivos gerados na **memória global do agente/projeto** do Antigravity.
- Garanta que qualquer sessão posterior ou comando subsequente leia e preserve integralmente o contexto sem resets ou perdas de arquivos.
```

---

## 3. Mapeamento Técnico de Ativos
- `public/assets/logo-versell4.svg`: Logotipo oficial Versell com tipografia escura `#111111` e acento neon `#D2FB07` para fundo claro (Navbar).
- `public/assets/logo-versell3.svg`: Logotipo oficial Versell com tipografia branca `#FFFFFF` e acento neon `#D2FB07` para fundo escuro (Footer).
- `public/assets/logo_versell.webp`: Logomarca 3D volumétrica em vidro acrílico verde-limão neon translúcido com animação CSS floating.
- `public/assets/MacBook-Air-2022-3.webp`: Mockup triplo de notebooks demonstrando o painel web/Finance da Versell.
- `public/assets/Pagina-Versell-1-1-scaled.webp`: Foto editorial da modelo utilizando o app mobile Versell em ambiente corporativo dark.
- `public/assets/suporte-fora.png`: Anel orbital exterior do sistema de suporte (568x568px).
- `public/assets/suporte-meio.png`: Anel orbital intermediário do sistema de suporte (445x436px).
- `public/assets/suporte-dentro.png`: Anel orbital interno do sistema de suporte (301x300px).
- `public/assets/versell.png`: Mockup de referência visual em alta fidelidade.
- `public/fonts/`: Tipografia Helvetica Neue (Black, Bold, Heavy, Medium, Roman, Light, Thin).

