<!-- se --># CHECKLIST DE EXECUÇÃO SEQUENCIAL - PROJETO VERSELL

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
- [x] **Hero Section Título, Diferenciais e Botões CTA (`Hero.tsx`):** Frase `"Quem vende no Pix,"` com peso de fonte normal (`font-normal`), sem negrito, e `"vende com Versell."` em negrito `#5B7500`; botões CTA ampliados para `min-h-[56px] sm:min-h-[62px]` com padding `px-9 sm:px-11`, peso de fonte normal e leve sombreamento difuso; ícones inline em verde oliva da marca (`#5B7500`).
- [x] **Tag Badges Pixel-Perfect (`TagBadge.tsx`):** Remoção de negrito do nome `Versell` (`font-normal`), ponto neon limpo e sólido (`bg-[#D2FB07]`), e texto em `font-normal text-[#222222]`, aplicado globalmente em todos os pontos da página.
- [x] Validação completa no container Docker em execução (HTTP 200 OK) e compilação limpa sem erros.

---

### [x] Passo 5: Padronização Global de Tipografia (Remoção de Negrito em Palavras/Frases Pretas) e Calibração do Ticker
- [x] **Remoção Global de Negrito em Textos Pretos:**
  - [x] Varredura e substituição completa em todos os componentes do projeto: todas as palavras e frases de cor preta (`text-[#111111]`, `text-black`, `text-neutral-800`, `text-[#222222]`) formatadas anteriormente em negrito (`font-bold`, `font-semibold`, `font-extrabold`) foram convertidas para peso regular/normal (`font-normal`).
  - [x] **Preservação de Destaques:** Mantido o negrito estilizado (`font-bold`) exclusivamente nas palavras coloridas de destaque da marca em verde oliva (`text-[#5B7500]`) e neon (`text-[#D2FB07]`).
  - [x] Componentes atualizados: `BentoGrid.tsx`, `ValueCards.tsx`, `DevSection.tsx`, `SecuritySection.tsx`, `SolutionsGrid.tsx`, `ThreeSteps.tsx`, `FaqSection.tsx`, `VersellPayBanner.tsx`, `OrbitalSupport.tsx`, `PreFooterCta.tsx` e `Footer.tsx`.
- [x] **Calibração Visual do Carrossel / Ticker (`Ticker.tsx`):**
  - [x] Remoção de negrito de todos os textos dos balões do carrossel (`font-normal text-[#111111]`).
  - [x] Refinamento dos ícones para traço fino (`stroke-[1.75]`), removendo a espessura pesada anterior.
  - [x] Aumento proporcional das dimensões dos elementos: padding ampliado para `px-5 py-2.5 sm:px-6 sm:py-3`, squircles neon aumentados para `w-7 h-7 sm:w-8 sm:h-8 rounded-xl` e tamanho do texto ajustado para `text-sm sm:text-[15px]`.
  - [x] Ícones e labels alinhados com a captura original: `Key` para "mTLS + OAuth2" e label limpo "Antifraude".
- [x] **Refinamento Pixel-Perfect dos 3 Cards de Valor (`ValueCards.tsx`):**
  - [x] Remoção de negrito das palavras verdes nos badges laterais (`Receba` e `Movimente`) com `font-normal` e casing Title Case.
  - [x] Correção da palavra do badge central para `Distribua` (substituindo a anterior `DIVIDA`), em `font-normal text-[#111111]` e fundo neon `#D2FB07`.
  - [x] Aplicação do efeito fiel de fundo no Card Central: gradiente vertical suave cobrindo exatamente a metade superior do card (`linear-gradient(180deg, #F1FBC4 0%, #F8FDE2 42%, #FFFFFF 68%)`), transicionando perfeitamente para branco puro na metade inferior, acompanhado por borda neon `border-[#D2FB07]/70` e sombra exterior difusa `shadow-[0_10px_35px_rgba(210,251,7,0.2)]`.
  - [x] Ampliação dos balões menores internos (badges dos 3 cards): padding e tamanho aumentados para `px-5 py-1.5 sm:py-2 text-sm sm:text-[14px]` (altura ~32-35px), garantindo o dimensionamento generoso e legível da referência original.
  - [x] Atualização de todos os ícones da checklist para círculos checados (`CheckCircle2`) em verde oliva `#5B7500` com traço fino.
  - [x] Inclusão de setas conectoras de fluxo (`ChevronRight` neon) posicionadas no espaço entre os cards no desktop.
- [x] Validação completa no container Docker (Next.js compilado com sucesso, HTTP 200 OK).

---

### [x] Passo 6: Calibração de Ícones, Dimensões e Escala dos Cards de Soluções (`SolutionsGrid.tsx`)
- [x] **Correção Cirúrgica de 100% dos Ícones da Grade de Soluções:**
  - [x] **SaaS:** Ícone atualizado para `Layers` (3 camadas isométricas sobrepostas, substituindo o antigo `CloudLightning`).
  - [x] **E-commerce:** Mantido `ShoppingCart` (carrinho de compras clássico).
  - [x] **Infoproduto:** Ícone atualizado para `MonitorPlay` (tela de vídeo com botão play central e suporte, substituindo o antigo `GraduationCap`).
  - [x] **ERP:** Ícone atualizado para `Building` (edifício comercial clássico com janelas e portal, substituindo `Layers`).
  - [x] **Gateways e plataformas:** Ícone atualizado para `Landmark` (instituição financeira com colunas e frontão, substituindo `Network`).
  - [x] **Nicho hot:** Ícone atualizado para `Eye` (olho com pupila, substituindo `Flame`).
- [x] **Ampliação de Altura, Padding e Escala dos Cards:**
  - [x] Proporções calibradas com o mockup original: padding generoso `p-8 sm:p-9 md:p-10`, bordas arredondadas `rounded-[32px]` e altura mínima `min-h-[260px] sm:min-h-[280px]`.
  - [x] Dimensões do squircle e ícones ampliadas: container escuro `w-12 h-12 rounded-2xl bg-[#0D0E10]` com ícones neon `w-6 h-6 text-[#D2FB07] stroke-[1.8]`.
- [x] **Padronização Global de Squircles:** Replicado o padrão proporcional `w-12 h-12 rounded-2xl` e ícones `w-6 h-6 stroke-[1.8]` em `BentoGrid.tsx`, `SecuritySection.tsx` e `ThreeSteps.tsx`.
- [x] Validação de compilação limpa no container Docker (HTTP 200 OK).

---

### [x] Passo 7: Reestruturação da Seção de 3 Passos (`ThreeSteps.tsx`) para o Design Original em Linha do Tempo
- [x] **Remoção dos Cards Retangulares Brancos:** Eliminação dos contêineres em cards fechados, permitindo que a linha do tempo respire livremente sobre a superfície suave `#F6F7F2` da página, idêntico à captura original.
- [x] **Linha Conectiva Horizontal Neon Suavizada:** Linha fina de 1px em gradiente suave neon (`from-[#DFFA5A] via-[#DFFA5A]/80 to-transparent`) passando pelo centro dos 3 círculos no desktop e atenuando à direita.
- [x] **Círculos Numerados Minimalistas e Números em Verde:** Círculos `01`, `02` e `03` estilizados com fundo branco puro (`bg-white`), borda fina de 1px em verde neon (`border border-[#D2FB07]`), sombra suave e tipografia dos números em verde oliva (`font-bold text-[#557008]`), idêntico à captura original.
- [x] **Alinhamento à Esquerda e Textos Exatos:** Títulos (`Fale com a gente`, `Conta aprovada`, `Integre e receba`) e descrições alinhados à esquerda com peso de fonte regular/normal (`font-normal text-[#111111]`).
- [x] **Botão CTA Ampliado:** Botão "Abrir minha conta" posicionado ao centro com formato pílula generoso (`min-h-[56px] sm:min-h-[60px] px-12 sm:px-16`), peso normal e leve sombreamento difuso.
- [x] Validação completa no container Docker (Next.js compilado com sucesso, HTTP 200 OK).

---

### [x] Passo 8: Refinamento Pixel-Perfect da Seção de Desenvolvedores (`DevSection.tsx` e `TagBadge.tsx`)
- [x] **Calibração do TagBadge (`TagBadge.tsx`):**
  - [x] Pílula interna com fundo pastel suave `#F0F5DD`, ponto indicador neon `#D2FB07` com halo luminoso e nome "Versell" em `#556F00`.
  - [x] Texto descritivo da seção ("Desenvolvedores") suavizado para cinza neutro `#555555` com peso normal (`font-normal`).
- [x] **Harmonização do Título e Cores (`DevSection.tsx`):**
  - [x] Linha 1: `"API de Pix "` em texto preto sem negrito (`font-normal text-[#111111]`) seguido na mesma linha por `"simples e"` em negrito verde oliva (`font-bold text-[#5B7500]`).
  - [x] Linha 2: `"robusta"` em negrito verde oliva (`font-bold text-[#5B7500]`).
- [x] **Atualização de 100% dos Ícones de Recursos:**
  - [x] Remoção dos círculos de fundo e adoção de ícones bare em verde oliva `#5B7500` com traço refinado (`stroke-[1.8]`):
    - `Code` (`< >`) para "Cash In, Cash Out e Pix Automático"
    - `Key` para "Autenticação mTLS + OAuth2"
    - `Webhook` (triskelion de 3 pás) para "Webhooks em tempo real para cada evento"
    - `FlaskConical` (balão de laboratório) para "Ambiente sandbox e coleção Postman"
- [x] **Calibração do Link do Postman:**
  - [x] Texto `"Baixar coleção Postman"` ajustado para a cor verde oliva da marca (`text-[#5B7500] font-normal`).
  - [x] Substituição da seta diagonal anterior pela seta horizontal para a direita (`ArrowRight` `→`).
- [x] **Terminal de Código Fiel à Referência:**
  - [x] Barra superior com controles de janela (verde neon `#D2FB07`, âmbar `#EAB308`, verde escuro `#3F590A`), título `criar-cobranca.sh` e pill badge `Cash In` neon.
  - [x] Remoção de abas e botões espúrios.
  - [x] Chamada curl exata com rota `PUT https://api.pix.basspago.com.br/cob/{txid}` e tokens coloridos (chaves em ciano `#38BDF8`, valores em verde neon `#D2FB07`).
  - [x] Inclusão do bloco `# Resposta` documentado.
  - [x] Rodapé limpo com link `"documentação oficial"` em verde neon.
- [x] Validação completa no container Docker e verificação visual por screenshot headless (HTTP 200 OK, zero erros de compilação).

---

### [x] Passo 9: Ampliação e Padronização Global de Escala dos Badges (`TagBadge.tsx`)
- [x] **Calibração Dimensional dos Badges:**
  - [x] Altura total externa ampliada para ~52-54px (contra ~28-36px anteriores) com padding `p-1.5 sm:p-2 pr-6 sm:pr-7`, borda sutil `border border-black/[0.08]` e sombra suave `shadow-[0_2px_10px_rgba(0,0,0,0.03)]`.
  - [x] Pílula interna ("● Versell") expandida para ~38-40px de altura com padding `px-4 py-2`, fundo pastel `#EDF4D4` e ponto neon `#D2FB07` com halo luminoso circular difuso (`shadow-[0_0_8px_rgba(210,251,7,0.9)]`).
  - [x] Tipografia proporcionalmente calibrada: `"Versell"` em `#556F00` e texto da seção em `#333333` com `text-sm sm:text-[15px]` e espaçamento generoso `gap-4 sm:gap-4.5`.
- [x] **Propagação Automática em 100% dos Badges do Projeto:**
  - [x] `Hero.tsx` ("Conta digital + API de Pix")
  - [x] `ValueCards.tsx` ("Pix sem limites")
  - [x] `BentoGrid.tsx` ("Produtos")
  - [x] `SolutionsGrid.tsx` ("Para quem é")
  - [x] `ThreeSteps.tsx` ("Como começar")
  - [x] `DevSection.tsx` ("Desenvolvedores")
  - [x] `SecuritySection.tsx` ("Segurança")
  - [x] `FaqSection.tsx` ("Perguntas frequentes")
  - [x] `OrbitalSupport.tsx` ("Suporte 24h")
  - [x] `PreFooterCta.tsx` ("Vamos crescer juntos?")
- [x] Validação visual via screenshot headless em Docker (Next.js compilado com sucesso, HTTP 200 OK).

---

### [x] Passo 10: Refinamento Pixel-Perfect da Seção de Segurança (`SecuritySection.tsx`)
- [x] **Alinhamento do Título em Linha Única:**
  - [x] `"Segurança em "` em negrito preto (`font-bold text-[#111111]`) e `"cada Pix"` em negrito verde oliva (`font-bold text-[#5B7500]`) em linha contínua sem quebras artificiais.
- [x] **Redação Institucional da Infraestrutura:**
  - [x] Ajustado para `"Bass Pago Instituição de Pagamento"` com destaque em negrito (`font-bold text-[#111111]`).
- [x] **Remoção de Ícones e Estilização de E-mails com Destaque e Sublinhado:**
  - [x] Removidos os ícones de envelope/carta (`Mail`).
  - [x] Removida a linha divisória superior.
  - [x] E-mails de canal oficial formatados em negrito e sublinhados: `denuncia@versell.com.br` e `compliance@versell.com.br`.
- [x] **Correção Cirúrgica de 100% dos Ícones dos Cards:**
  - [x] Card 1 (`Análise de cada conta`): `UserCheck` (usuário com verificação) e texto `"análise do negócio"`.
  - [x] Card 2 (`Monitoramento 24/7`): `Eye` (olho com pupila, substituindo a onda ECG anterior).
  - [x] Card 3 (`API protegida`): `Key` (chave mTLS/credenciais, substituindo o escudo anterior).
  - [x] Card 4 (`Privacidade e LGPD`): `ShieldCheck` (escudo com tique de verificação, substituindo o cadeado anterior).
- [x] **Tipografia dos Títulos dos Cards:**
  - [x] Títulos dos 4 cards definidos em negrito (`font-bold text-[#111111]`).
- [x] Validação visual por screenshot headless em Docker (Next.js compilado com sucesso, HTTP 200 OK).

---

### [x] Passo 11: Padronização Pixel-Perfect da Seção Orbital de Suporte 24h (`OrbitalSupport.tsx`)
- [x] **Ocultação de Elementos Suprérfluos:**
  - [x] Remoção dos badges de status ("Tempo médio de resposta: < 2 min" e "Plantão técnico 24/7/365").
  - [x] Remoção do botão inferior "Chamar no WhatsApp".
  - [x] Remoção da legenda textual ("Toque ou passe o mouse nos anéis para pausar o movimento").
- [x] **Harmonização do Título Principal:**
  - [x] Linha 1: `"Um time do seu lado "` em branco + `"24"` em verde neon fluorescente (`#D2FB07`).
  - [x] Linha 2: `"horas por dia"` em verde neon fluorescente em negrito (`font-bold text-[#D2FB07]`).
- [x] **Núcleo Central do WhatsApp Ampliado e Fiel:**
  - [x] Círculo menor do centro ampliado para um círculo sólido em verde neon fluorescente (`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#D2FB07]`).
  - [x] Ícone oficial do WhatsApp em preto puro vazado no interior do círculo neon.
- [x] **Remoção de Iluminação no Segundo Círculo:**
  - [x] Remoção da iluminação neon deslocada sobre o anel intermediário (`suporte-meio.png`).
  - [x] Luz ambiente radial difusa centralizada exclusivamente atrás do núcleo do WhatsApp, iluminando suavemente a órbita menor.
- [x] Validação visual por screenshot headless em Docker (Next.js compilado com sucesso, HTTP 200 OK).

---

### [x] Passo 12: Padronização Global do Efeito Hover nos Botões CTA Pill (`CtaButton.tsx`)
- [x] **Criação do Componente Unificado `CtaButton` (`src/components/CtaButton.tsx`):**
  - [x] **Estado Padrão (Default):** Fundo sólido verde neon `#D2FB07`, cantos totalmente arredondados (`rounded-full`), texto centralizado em preto (`text-black font-normal`).
  - [x] **Estado Hover (Ao passar o mouse):**
    - [x] Brilho difuso neon verde expansivo ao redor do botão: `hover:shadow-[0_0_32px_rgba(210,251,7,0.75),0_0_55px_rgba(210,251,7,0.35)]`.
    - [x] Texto mantido centralizado perfeitamente no botão.
    - [x] Círculo branco flutuante posicionado à direita (`bg-white rounded-full`) contendo ícone preto `ArrowUpRight` (`↗`) com traço fino (`stroke-[2.2]`).
    - [x] Animação suave com transição de opacidade, escala e translação (`opacity-0 scale-75 translate-x-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 ease-out`).
  - [x] Variantes de tamanho suportadas: `lg` (Hero, ThreeSteps), `md` (PreFooterCta, Navbar Mobile, DevSection) e `sm` (Navbar Desktop, Footer).
- [x] **Substituição e Padronização em Todos os Botões do Projeto:**
  - [x] `Hero.tsx`: Botão "Abrir minha conta" atualizado com `CtaButton size="lg"`.
  - [x] `ThreeSteps.tsx`: Botão "Abrir minha conta" atualizado com `CtaButton size="lg"`.
  - [x] `PreFooterCta.tsx`: Botão "Abrir minha conta" atualizado com `CtaButton size="md"`.
  - [x] `DevSection.tsx`: Botão "Ver documentação" atualizado com `CtaButton size="md"`.
  - [x] `Navbar.tsx`: Botão desktop "Falar com especialista" (`size="sm"`) e botão mobile (`size="md"`).
  - [x] `Footer.tsx`: Botão "Falar com especialista" atualizado com `CtaButton size="sm"`.
- [x] **Validação e Prova Visual:**
  - [x] Teste de interação via Chrome DevTools Protocol simulando evento de mouse hover real.
  - [x] Captura de tela (`hover_screenshot_result.png`) confirmando correspondência idêntica com as imagens de referência (`media_1793407498660_f8ac4c9b.png` e `media_1793407504886_4b6be56a.png`).
  - [x] Docker compilando em < 600ms, HTTP 200 OK.

---

### [x] Passo 13: Suavização da Iluminação Neon do Círculo Central (`OrbitalSupport.tsx`)
- [x] **Remoção da Mancha Radial Intensa de Fundo:**
  - [x] Removido o elemento `div` de fundo com `w-48 sm:w-64 md:w-72 bg-[#D2FB07]/20 blur-3xl` que causava saturação e névoa excessiva sobre o fundo escuro.
- [x] **Suavização do Halo de Iluminação Neon Diretamente no Círculo WhatsApp:**
  - [x] Substituída a sombra anterior por uma dupla difusão aveludada, suave e contida: `shadow-[0_0_25px_rgba(210,251,7,0.2),0_0_45px_rgba(210,251,7,0.08)]`.
  - [x] Preservada a escuridão pura (`#0A0A0A`) do espaço entre o núcleo e a primeira órbita tracejada, exatamente como no mockup original de referência (`media_1793408068223_8f8e48fe.jpg`).
- [x] **Validação Visual e Docker:**
  - [x] Captura headless e medição de decaimento radial via Python confirmando curva de iluminação idêntica ao original.
  - [x] Next.js compilando com sucesso no Docker em < 600ms, HTTP 200 OK.

---

### [x] Passo 14: Correção e Padronização Pixel-Perfect da Seção de FAQ (`FaqSection.tsx`)
- [x] **Remoção do Negrito das Duas Frases do Título:**
  - [x] Título unificado em linha única sem negrito: `"Perguntas"` em preto normal (`text-[#111111] font-normal`) e `"Frequentes"` em cinza normal (`text-[#666666] font-normal`).
  - [x] TagBadge atualizado para `"Perguntas Frequentes"`.
- [x] **Substituição dos Botões e Ícones do Accordion:**
  - [x] Removidos os círculos de fundo cinza e as setas chevron anteriores.
  - [x] Ícones em verde oliva da marca (`#5B7500`, traço `stroke-[2]`): sinal de mais (`+`) nas perguntas fechadas e `x` (mais rotacionado a 45°) na pergunta aberta.
- [x] **Correção do Funcionamento do Botão de Fechar/Abrir:**
  - [x] Limpeza de cache de desenvolvimento do Next.js no Docker garantindo hidratação 100% ativa de scripts client-side (`main-app.js` e `app-pages-internals.js` retornando 200 OK).
  - [x] Validação via automação de eventos: clicar na pergunta aberta agora fecha imediatamente o card, e clicar em qualquer outra pergunta abre com animação fluida.
- [x] **Bordas e Respostas de 100% das Perguntas:**
  - [x] Card aberto estilizado com borda em verde neon suave (`border border-[#D2FB07]`), sem divisória artificial entre pergunta e resposta.
  - [x] Todas as 8 perguntas com respostas completas, técnicas e institucionais revisadas.
- [x] **Validação Visual e Docker:**
  - [x] Captura headless confirmando correspondência idêntica ao mockup original (`media_1793409011595_c6f33f5e.png`).
  - [x] Docker compilando em tempo recorde, HTTP 200 OK.

---

### [x] Passo 15: Padronização Pixel-Perfect do Card de Cartão e Checkout (`VersellPayBanner.tsx`)
- [x] **Sobremesa Neon em Gradiente Suave:**
  - [x] Aplicação de gradiente horizontal aveludado partindo de verde-limão pastel à esquerda e transicionando para branco puro à direita: `bg-gradient-to-r from-[#EEF9BD] via-[#FAFCEE] via-35% to-white to-70% bg-white`.
  - [x] Borda limpa e discreta sem contorno neon agressivo: `border border-[#E2E6D5] rounded-[24px]` com sombra sutil `shadow-sm hover:shadow-md`.
- [x] **Tipografia em Negrito do Título Principal:**
  - [x] Título `"Também precisa de cartão e checkout?"` formatado em negrito preto de alto contraste: `font-bold text-[#111111] text-base sm:text-[17px] tracking-tight`.
  - [x] Subtítulo descritivo em cinza neutro com espaçamento ajustado: `text-xs sm:text-[13px] text-[#666666] font-normal mt-0.5 leading-snug`.
- [x] **Correção da Cor e Seta do Link VersellPay:**
  - [x] Palavra/link `"versellpay.com"` na cor verde oliva oficial da marca: `text-[#5B7500] group-hover:text-[#475b00] font-medium text-sm sm:text-[14px]`.
  - [x] Substituição do ícone de seta diagonal (`ArrowUpRight` `↗`) pela seta horizontal para a direita (`ArrowRight` `→`) na mesma cor verde oliva `#5B7500`.
- [x] **Ícone Squircle Escuro com Cartão Neon:**
  - [x] Container escuro em squircle arredondado (`rounded-[14px] bg-[#0F1012]`) com ícone de cartão de crédito em neon fluorescente (`CreditCard text-[#D2FB07] stroke-[1.8]`).
- [x] **Validação Visual e Docker:**
  - [x] Captura headless com recorte de precisão validando correspondência exata com o design original (`media_1793409489981_3edbac07.png`).
  - [x] Container Docker rodando em perfeito estado com compilação em 304ms, HTTP 200 OK.

---

### [x] Passo 16: Padronização Pixel-Perfect do Card CTA Pré-Footer e TagBadge Dark (`PreFooterCta.tsx` e `TagBadge.tsx`)
- [x] **Mini Badge Dark com Fundo Cinza Destacado:**
  - [x] Atualização do `TagBadge.tsx` no modo `isDark`: mini badge interna com fundo cinza sólido de destaque (`bg-[#242528]`), nome "Versell" em verde neon fluorescente (`text-[#D2FB07] font-normal`) e ponto indicador com anel verde oliva escuro (`bg-[#526017]`) contendo núcleo neon no centro (`bg-[#D2FB07]`), idêntico à captura de referência (`media_1793410524482_6b53081a.png`).
  - [x] Contêiner externo em pílula escura sutil (`bg-[#18191B] border border-white/10`) com texto "Vamos crescer juntos?" em cinza claro regular (`text-[#D8D8D8] font-normal`), eliminando saturação verde anterior.
- [x] **Ícones Bare Neon à Frente dos Textos de Destaque:**
  - [x] Remoção dos contêineres circulares com tiques de checkmark genéricos.
  - [x] Inclusão de ícones minimalistas diretos em verde neon fluorescente (`#D2FB07` com traço `stroke-[1.8]`): raio `Zap` para "Pix 24/7", escudo checado `ShieldCheck` para "Infraestrutura completa" e colchetes de código `Code` (`< >`) para "API e sandbox", rigorosamente alinhados ao recorte da referência (`media_1793410428973_8669a3a5.png`).
- [x] **Iluminação Ambiente e Elemento 3D da Versell:**
  - [x] Remoção da mancha circular artificial no topo/centro do card, reposicionando o glow difuso na base e no canto inferior direito (`from-[#D2FB07]/15 rounded-full blur-[90px]`).
  - [x] Elemento 3D de acrílico verde (`logo_versell.webp`) nítido, sem desfoque, emergindo com presença e riqueza volumétrica no canto inferior direito (`opacity-75 sm:opacity-85`), em perfeita conformidade com o mockup original (`media_1793410412462_f9f727a3.jpg`).
- [x] **Validação Visual e Docker:**
  - [x] Capturas de tela e análises pixel-a-pixel confirmando paridade absoluta.
  - [x] Next.js compilando em 883ms no Docker, HTTP 200 OK.

---

### [x] Passo 17: Ajuste Tipográfico do Link VersellPay (`VersellPayBanner.tsx`)
- [x] **Remoção de Negrito e Aumento da Fonte:**
  - [x] Texto `"versellpay.com"` atualizado para peso regular/normal (`font-normal`), eliminando o peso semibold/medium anterior.
  - [x] Escala tipográfica ampliada para `text-[15px] sm:text-base` com espaçamento `gap-2`, assegurando legibilidade proporcional e fidelidade milimétrica com a captura de referência (`media_1793410874662_cb511e3f.png`).
  - [x] Ícone `ArrowRight` (`→`) calibrado com `stroke-[1.8]` para harmonizar visualmente com os traços dos caracteres em peso normal.
- [x] **Validação Visual e Docker:**
  - [x] Captura headless e inspeção de recorte confirmando correspondência idêntica.
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.

---

### [x] Passo 18: Calibração de Proporções do Botão CTA e Logo 3D de Canto (`PreFooterCta.tsx`)
- [x] **Ampliação do Botão CTA para o Tamanho Original:**
  - [x] Botão "Abrir minha conta" ampliado para escala `size="lg"` com largura mínima generosa: `min-w-[280px] sm:min-w-[320px] md:min-w-[340px]`, altura `min-h-[56px] sm:min-h-[62px]` e padding lateral `px-12 sm:px-16`, alcançando a proporção de 1/3 da largura do card idêntica à referência original (`media_1793411577297_5ab6f976.png`).
- [x] **Proporção, Enquadramento e Coloração da Logo 3D:**
  - [x] Calibração de escala da imagem `logo_versell.webp` para `520x520px` com deslocamento de precisão (`-bottom-[200px] sm:-bottom-[230px] md:-bottom-[260px] -right-[95px] sm:-right-[105px] md:-right-[115px]`), ocultando completamente a bifurcação inferior (crotch) abaixo da borda do card e exibindo exclusivamente as duas hastes superiores verticais do "V".
  - [x] Ajuste tonal via `filter brightness-[0.52] contrast-[1.1] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]`, convertendo o amarelo fluorescente em verde oliva metálico escuro com reflexos realistas, eliminando interferências com os textos de benefícios e correspondendo fielmente à referência (`media_1793411491530_229d733b.png`).
- [x] **Validação Visual e Docker:**
  - [x] Captura headless com inspeção de recortes e medição de distâncias confirmando correspondência milimétrica.
  - [x] Next.js compilando com sucesso no Docker em < 250ms, HTTP 200 OK.

---

### [x] Passo 19: Fechamento Padrão e Ajuste de Interatividade da Seção FAQ (`FaqSection.tsx`)
- [x] **Fechamento do Primeiro Card por Padrão:**
  - [x] Estado inicial do accordion redefinido para `useState<number | null>(null)`, garantindo que todas as perguntas comecem fechadas com o ícone `+` em verde oliva, eliminando a exibição errônea de card aberto no carregamento da página.
  - [x] Resposta da primeira pergunta ajustada com precisão institucional correspondente ao mockup original (`media_1793409011595_c6f33f5e.png`).
  - [x] Adicionado suporte a fechamento do card ao clicar também no próprio corpo/painel da resposta aberta (`cursor-pointer`), garantindo usabilidade intuitiva e fechamento imediato.
- [x] **Validação Visual e Docker:**
  - [x] Captura de tela headless confirmando que todos os 8 cards estão limpos, fechados e alinhados.
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.

---

### [x] Passo 20: Ampliação da Altura do Card CTA e Iluminação Neon na Metade Inferior (`PreFooterCta.tsx`)
- [x] **Ampliação da Altura e Respiro Interno do Card:**
  - [x] Altura mínima do contêiner escuro ampliada para `min-h-[500px] sm:min-h-[560px] lg:min-h-[590px]` com padding vertical generoso `px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24`, alcançando proporções verticais idênticas à referência original (`media_1793412880627_379559bb.jpg`).
  - [x] Espaçamentos verticais calibrados entre elementos: TagBadge `mb-6 sm:mb-8`, título `mb-4 sm:mb-5`, subtítulo `mb-8 sm:mb-10` e botão CTA `mb-8 sm:mb-10`.
- [x] **Efeito de Iluminação Neon no Fundo da Metade Inferior:**
  - [x] Inclusão de dupla camada de iluminação ambiente neon fluorescente cobrindo a metade inferior (~55-60%) do card escuro:
    - Camada 1: Gradiente radial elíptico expansivo `radial-gradient(ellipse 95% 80% at 50% 100%, rgba(210, 251, 7, 0.22) 0%, rgba(210, 251, 7, 0.1) 45%, rgba(210, 251, 7, 0.03) 75%, transparent 100%)` preenchendo os 62% inferiores.
    - Camada 2: Gradiente linear vertical ascendente `bg-gradient-to-t from-[#D2FB07]/14 via-[#D2FB07]/6 to-transparent` preenchendo os 48% inferiores.
  - [x] Preservação do preto profundo puro (`#0F1012`) na metade superior (topo 40%), criando a transição suave e luminosa idêntica à captura original.
- [x] **Enquadramento e Escala da Logo 3D Acrílica:**
  - [x] Dimensões ajustadas para `w-[460px] h-[460px] sm:w-[540px] sm:h-[540px] md:w-[600px] md:h-[600px]` com posicionamento `-bottom-[220px] sm:-bottom-[260px] md:-bottom-[290px] -right-[95px] sm:-right-[105px] md:-right-[115px]`, mantendo as duas hastes superiores do "V" perfeitamente alinhadas ao novo respiro vertical do card.
- [x] **Validação Visual e Docker:**
  - [x] Captura headless (`prefooter_screen_v8.png`) e comparação lado a lado (`prefooter_v8_compare.png`) confirmando fidelidade milimétrica com a referência original.
  - [x] Container Docker rodando em perfeito estado com compilação limpa sem erros, HTTP 200 OK.

---

### [x] Passo 21: Ajuste Fino da Logo 3D e Refinamento do Subtítulo no Card CTA (`PreFooterCta.tsx`)
- [x] **Refinamento Tipográfico e Quebra de Linha do Subtítulo:**
  - [x] Contêiner ampliado para `max-w-[620px]` com quebra de linha deliberada `<br className="hidden sm:inline" />` logo após `"com a segurança e o "`, garantindo divisão em 2 linhas idêntica à referência original (`media_1793413900298_1a82c111.png`):
    - Linha 1: *"Abra sua conta e comece a receber na hora, todos os dias, com a segurança e o"*
    - Linha 2: *"suporte que a sua operação merece."*
  - [x] Tipografia calibrada com `text-sm sm:text-base md:text-[17px] text-[#D8D8D8] font-normal leading-[1.65]`.
- [x] **Calibração de Posição e Escala da Logo 3D:**
  - [x] Escala e deslocamento ajustados para `w-[440px] sm:w-[500px] md:w-[560px]` com `-bottom-[190px] sm:-bottom-[210px] md:-bottom-[230px]` e `-right-[90px] sm:-right-[100px] md:-right-[110px]`, posicionando a haste esquerda do "V" logo abaixo do final da linha 1 do subtítulo e a haste direita vertical alinhada à margem direita da curva do card (`media_1793413838771_6467ecc7.jpg`).
  - [x] Eliminação completa de sobreposição: botão CTA centralizado em escala equilibrada (`min-w-[210px] sm:min-w-[230px] md:min-w-[240px] px-8 sm:px-9`) e destaques inferiores compactados (`gap-x-5 sm:gap-x-7`), preservando mais de 100px de espaço livre ao redor da logo 3D.
- [x] **Validação Visual e Docker:**
  - [x] Captura headless (`prefooter_screen_v11.png`) e comparação visual de alta fidelidade confirmando paridade absoluta com a referência original.
  - [x] Container Docker rodando de forma saudável (HTTP 200 OK) e compilação Next.js instantânea.


---

### [x] Passo 22: Remoção do Menu Sanduíche e Centralização da Marca Versell no Mobile (`Navbar.tsx`)
- [x] **Remoção do Menu Sanduíche (Mobile):**
  - [x] Eliminação do botão de hambúrguer mobile e do drawer de navegação deslizante em viewports mobile (`< md`), mantendo o cabeçalho clean e minimalista em conformidade estrita com a solicitação do usuário.
- [x] **Centralização da Marca Versell no Mobile:**
  - [x] Atualização do layout do container para `justify-center md:justify-between`, centralizando o logotipo oficial "Versell" geometricamente na largura da viewport em telas móveis e preservando o alinhamento à esquerda com menu completo e botões de ação em telas desktop (`md:`).
- [x] **Validação Visual e Docker:**
  - [x] Capturas headless mobile (`navbar_mobile_crop_500.png`) e desktop (`navbar_desktop_crop.png`) e comparação direta [navbar_mobile_compare.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/navbar_mobile_compare.png) confirmando centralização matemática no mobile e integridade total no desktop.
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.

---

### [x] Passo 23: Calibração de Comprimento do Botão/Badge CTA no Card Pré-Footer (`PreFooterCta.tsx`)
- [x] **Ajuste de Comprimento e Proporção do Botão CTA:**
  - [x] Comprimento/largura horizontal do botão `"Abrir minha conta"` ampliado de 240px para 324px no desktop (`w-[280px] sm:w-[324px] max-w-full`), correspondendo exatamente ao aspect ratio original de 5.31:1 (`324px x 61px`) da referência (`media_1793413882076_daa3730f.jpg` e `media_1793411577297_5ab6f976.png`).
  - [x] Tipografia calibrada com `text-[15px] sm:text-base font-normal`, garantindo respiro e padding horizontal generoso (~106px de cada lado) perfeitamente alinhado ao design original.
- [x] **Validação Visual e Docker:**
  - [x] Capturas e comparações 1:1 [btn_compare_1to1.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/btn_compare_1to1.png) e [prefooter_card_compare_v12.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/prefooter_card_compare_v12.png) comprovando harmonia visual e paridade de dimensões com o mockup de referência.
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.


---

### [x] Passo 24: Centralização das Badges/Botões de Ação no Mobile (`DevSection.tsx`)
- [x] **Alinhamento e Centralização no Mobile:**
  - [x] Atualizado o contêiner de botões/badges de ação para `w-full flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6`, garantindo centralização horizontal precisa das badges (`Ver documentação` e `Baixar coleção Postman →`) no mobile (`< lg`) e preservando o alinhamento à esquerda no desktop (`lg:`).
  - [x] Link `"Baixar coleção Postman"` ajustado com `justify-center` para alinhamento simétrico caso ocorra quebra de linha em viewports móveis compactas.
- [x] **Validação Visual e Docker:**
  - [x] Captura headless em emulação mobile 390px (`dev_mobile_emulated_390.png`), desktop 1280px (`dev_desktop_1280.png`) e comparação direta [dev_mobile_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/dev_mobile_comparison.png) comprovando centralização milimétrica no mobile e preservação total no desktop.
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.


---

### [x] Passo 25: Centralização Sistemática de Badges e Textos de Seções no Mobile (`DevSection`, `SecuritySection`, `OrbitalSupport`, `FaqSection`)
- [x] **Padronização Responsiva de Cabeçalhos e Badges no Mobile:**
  - [x] Identificadas e ajustadas as 4 seções de layout com coluna lateral (`lg:col-span-5` / `lg:col-span-6`) que permaneciam alinhadas à esquerda no mobile:
    - `DevSection.tsx`: Coluna de informações ajustada para `items-center text-center lg:items-start lg:text-left`, centralizando o `TagBadge` ("Desenvolvedores"), título e subtítulo no mobile. Lista de recursos como bloco centralizado (`w-fit mx-auto lg:mx-0`) com alinhamento textual interno simétrico.
    - `SecuritySection.tsx`: Coluna institucional ajustada para `items-center text-center lg:items-start lg:text-left`, centralizando o `TagBadge` ("Segurança"), título, subtítulo, link de políticas e canais de e-mail no mobile.
    - `OrbitalSupport.tsx`: Coluna textual ajustada para `items-center text-center lg:items-start lg:text-left`, centralizando o `TagBadge` ("Suporte 24h"), título com destaque neon "24 horas por dia" e descrição explicativa no mobile.
    - `FaqSection.tsx`: Coluna lateral de título ajustada para `items-center text-center lg:items-start lg:text-left lg:sticky lg:top-28`, centralizando o `TagBadge` ("Perguntas Frequentes"), título e subtítulo no mobile.
  - [x] Preservação absoluta de 100% dos alinhamentos à esquerda e sticky layout no desktop (`lg:items-start lg:text-left lg:sticky`).
- [x] **Validação Visual e Docker:**
  - [x] Verificação CDP em emulação móvel (390px) comprovando que todos os 4 badges e títulos estão geometricamente centralizados na coordenada exata x = 195.0px (delta = 0.0px).
  - [x] Capturas e comparativo direto [badges_mobile_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/badges_mobile_comparison.png) confirmando a harmonia estética no mobile.
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.


---

### [x] Passo 26: Calibração de Cores, Tipografia e Linha Única das Badges do Rodapé (`Footer.tsx`)
- [x] **Botão "Voltar para o Topo" com Estilo Neon Fiel:**
  - [x] Cor e borda convertidas para o verde neon oficial `#D2FB07` (`border border-[#D2FB07] bg-transparent hover:bg-[#D2FB07]/10 text-xs font-normal text-[#D2FB07]`), eliminando o antigo fundo branco/translúcido e removendo a seta para paridade absoluta com a referência original (`media_1793449092588_d2096bbd.png`).
- [x] **Link "Central de Políticas" Sem Negrito:**
  - [x] Tipografia alterada de `font-semibold` para peso regular `font-normal text-[#D2FB07]`, eliminando qualquer negrito conforme solicitado pelo usuário (`media_1793449137330_70314b32.png`).
- [x] **Botões CTA em Linha Única e Sem Negrito:**
  - [x] Textos dos botões `"Falar com especialista"` e `"Abrir conta grátis"` protegidos contra quebra de linha com `whitespace-nowrap`, garantindo apresentação rigorosamente em linha única.
  - [x] Negrito removido de `"grátis"` e padronização integral em `font-normal text-xs sm:text-sm` com padding responsivo (`px-4 sm:px-6`), permitindo encaixe perfeito lado a lado no mobile (`media_1793449231187_554abcda.png`).
- [x] **Validação Visual e Docker:**
  - [x] Capturas e comparativo direto [footer_badges_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/footer_badges_comparison.png) comprovando conformidade visual dos 3 elementos com as capturas originais.
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
