# CONTEXTO DE NEGÓCIO, DESIGN SYSTEM E ARQUITETURA - VERSELL

## 1. Visão Geral da Fintech Versell
A **Versell** é uma fintech brasileira de tecnologia voltada para infraestrutura de pagamentos instantâneos (Pix), subcontas, divisão automatizada de receitas (*split* de pagamento) e conta digital corporativa PJ para empresas de economia digital.

- **Posicionamento:** "Quem vende no Pix, vende com Versell."
- **Parceiro de Infraestrutura Bancária (BaaS):** A Versell opera sobre a infraestrutura da **Baas Pago Instituição de Pagamento** (CNPJ: 37.387.828/0001-08), garantindo liquidação direta, segurança regulatória compatível com os padrões do Banco Central do Brasil (Bacen) e segregação de contas de pagamento.
- **Diferencial Central:** Liquidação em 1 segundo, operação 24/7 (incluindo noites, fins de semana e feriados), taxas competitivas a partir de 0,49%, antifraude inteligente e suporte humano de prontidão 24 horas por dia.

---

## 2. Personas e Mercados Atendidos
1. **SaaS e Assinaturas Recorrentes:** Cobranças automatizadas via Pix com autorização única (*Pix Automático*).
2. **E-commerce:** Checkout ultra-rápido com confirmação instantânea e liberação imediata de pedidos.
3. **Infoprodutores e Afiliados:** Venda de cursos, mentorias e comunidades com divisão automática (*split*) para coprodutores e afiliados na hora do pagamento.
4. **ERPs e Plataformas de Gestão:** Centralização de recebimentos integrada nativamente via API aos ERPs parceiros.
5. **Gateways e Plataformas:** Operação massiva de Pix em escala para múltiplos sellers com subcontas segregadas.
6. **Nicho Hot (+18):** Operações com verificação de maioridade legal, com privacidade, discrição e segurança jurídica.

---

## 3. Diretriz Arquitetural: Mobile First
A experiência do usuário foi projetada estritamente com abordagem **Mobile First**:
- **Área de Toque Mínima (Touch Target):** Mínimo de 44x44px para botões, links de menu, accordions e itens interativos.
- **Espaçamento e Ergonomia:** Zonas de toque confortáveis (*thumb zone*), navegação por drawer/hamburger fluida em telas pequenas.
- **Tipografia Fluida:** Títulos e chamadas responsivas com escalonamento via Tailwind (`text-2xl sm:text-4xl md:text-5xl lg:text-6xl`).
- **Sem Overflow Horizontal:** Garantia de 100% de integridade visual e sem overflow horizontal desde telas de 320px até ultrawide 4K.
- **Otimização de Assets Mobile:** Carregamento otimizado de imagens WebP e SVG vetoriais com suporte a telas retina de alta densidade de pixels.
- **Aceleração por Hardware (GPU):** Translações 3D isoladas (`translate3d(0, 0, 0)`, `will-change: transform`) para animações dos anéis concêntricos e ticker sem consumo excessivo de bateria.
- **Acessibilidade Semântica (WCAG 2.1 AA):** Navegação por teclado (fechamento por tecla Escape no menu), controle de rolagem de tela e marcação ARIA em acordeões e drawers.

---

## 4. Design System & Design Tokens

### Cores Principais
| Token | Hex | Aplicação |
|---|---|---|
| `moss-green` | `#5B7500` / `#658200` | Cor de destaque em palavras-chave sobre fundos claros |
| `lime-primary` | `#D2FB07` / `#C6F500` | Cor de destaque primária da marca, CTAs, botões pill, halos neon |
| `lime-glow` | `rgba(210, 251, 7, 0.25)` | Halo de luz radial e reflexos neon nos elementos 3D |
| `background-page` | `#F6F7F2` | Superfície principal suave e texturizada da landing page |
| `surface-card` | `#FFFFFF` | Cards brancos puros com borda `rgba(0,0,0,0.05)` e sombra suave |
| `dark-deep` | `#0A0A0A` a `#0C0D0E` | Seção orbital de suporte 24h, terminal de código e footer |
| `text-dark` | `#111111` / `#000000` | Títulos e elementos de alto contraste |
| `text-muted` | `#666666` | Textos de apoio, subtítulos e descrições secundárias |
| `text-light` | `#FFFFFF` / `#E5E5E5` | Textos sobre superfícies dark |

### Tipografia
- **Família:** Helvetica Neue (local) com fallback para Plus Jakarta Sans, Inter, Geist Sans e system sans-serif.
- **Configurações Numéricas e Alternativas:** `font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11'`.
- **Pesos:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800/900 (Heavy/Black).
- **Tracking:** Títulos com tracking levemente negativo (`-0.02em` / `tracking-tight`).

### Raios e Sombras
- **Bordas Arredondadas:** `rounded-2xl` (16px) e `rounded-3xl` (24px) para cards; `rounded-full` para botões pill e badges.
- **Sombras:** `0 8px 30px rgba(0, 0, 0, 0.04)` para cards claros; `0 0 50px rgba(210, 248, 0, 0.15)` para destaques neon.

---

## 5. Mapeamento de Assets & Efeitos Visuais
1. `logo_versell.webp`: Elemento 3D da seção Hero e Pre-footer com animação CSS `@keyframes float`.
2. `logo-versell4.svg`: Logotipo escuro na Navbar com acento neon.
3. `logo-versell3.svg`: Logotipo claro no Footer com acento neon.
4. `MacBook-Air-2022-3.webp`: Mockup triplo do painel de monitoramento Finance da Versell.
5. `Pagina-Versell-1-1-scaled.webp`: Imagem de alta resolução no card de soluções/conta digital.
6. `suporte-dentro.png`, `suporte-meio.png`, `suporte-fora.png`: Sistema de 3 anéis orbitais concêntricos com rotação contínua (horário e anti-horário), núcleo WhatsApp ampliado em verde neon fluorescente com ícone oficial preto, luz ambiente centralizada e sem iluminação deslocada sobre o anel intermediário.
16. **Seção Orbital de Suporte 24h (`OrbitalSupport.tsx`):** Layout limpo idêntico ao mockup original: título com destaque `"24 horas por dia"` em verde neon, parágrafo explicativo e sistema de órbitas interativo com núcleo WhatsApp em verde neon fluorescente com halo aveludado e suave (`shadow-[0_0_25px_rgba(210,251,7,0.2),0_0_45px_rgba(210,251,7,0.08)]`), sem mancha de luz espalhada no fundo e sem botões inferiores ou tags secundárias.
7. **Carrossel / Ticker:** Componente de alta fidelidade com rolagem contínua via GPU (`anim-marquee`), gradiente bilateral de atenuação suave nas bordas, fundo em micro-grid e pills brancas com proporções generosas (`px-5 py-2.5 sm:px-6 sm:py-3`), texto em peso regular/normal (`font-normal text-[#111111]`), squircles neon `#D2FB07` aumentados (`w-7 h-7 sm:w-8 sm:h-8 rounded-xl`) contendo ícones com traço fino refinado (`stroke-[1.75]`): `Zap`, `Code`, `QrCode`, `Users`, `Split`, `RefreshCw`, `Webhook`, `Key`, `ShieldCheck` (Antifraude) e `Headphones` (Suporte).
8. **Banners / Cards de Valor (`ValueCards.tsx`):** Tríade de cards direcionados ao fluxo contínuo de Pix: **Receba**, **Distribua** e **Movimente**, com badges internos ampliados e confortáveis (`px-5 py-2 text-sm`), títulos em peso normal, Card Central destacado com gradiente vertical cobrindo a metade superior (`#F1FBC4` a `#FFFFFF`), borda neon `border-[#D2FB07]/70`, lista de benefícios com ícones circulares checados (`CheckCircle2`) em `#5B7500` e chevrons conetores discretos entre os cards no desktop.
9. **Navbar Superior (`Navbar.tsx`):** Barra de navegação com logotipo oficial Versell, links minimalistas em peso normal (`font-normal`), link "Pix" destacado em verde oliva (`text-[#5B7500]`), botão "Entrar" em contorno pill e botão neon "Falar com especialista" com sombreamento difuso suave.
10. **Seção de Desenvolvedores (`DevSection.tsx`):** Bloco institucional com TagBadge suavizado em cinza `#555555`, título com quebra e cores fiéis (`"API de Pix "` em preto regular + `"simples e robusta"` em negrito verde oliva `#5B7500`), lista de 4 recursos com ícones bare em traço fino (`Code`, `Key`, `Webhook`, `FlaskConical`), link Postman em verde oliva com seta horizontal `→`, e janela de terminal dark `#0C0D0E` contendo título `criar-cobranca.sh`, badge `Cash In`, sintaxe curl colorida em ciano/neon e bloco `# Resposta`.
10. **Bento Grid de Soluções (`BentoGrid.tsx`):** Grid moderno com proporções generosas idênticas ao original: títulos com palavras pretas em peso normal (`font-normal`) e palavras-chave de destaque em negrito verde oliva (`font-bold text-[#5B7500]`), Linha 2 com altura ampliada para `min-h-[350px] sm:min-h-[380px]`, Linha 1 com enquadramento cirúrgico da foto da modelo via `objectPosition: "74% top"`, e ícones em squircles escuros.
11. **Padrão Tipográfico Dual-Weight Global:** Em conformidade com o design original, todas as frases e títulos do projeto adotam o contraste elegante entre texto preto em peso regular (`font-normal`) e destaques de marca em verde oliva/neon em negrito (`font-bold text-[#5B7500]` / `font-bold text-[#D2FB07]`).
12. **Diferenciais da Hero (`Hero.tsx`):** Ícones inline em verde oliva da marca (`#5B7500`): `Zap` (Pix 24/7), `ShieldCheck` com checkmark (Infraestrutura completa) e `Code` `< >` (API e sandbox), com tipografia neutra `#555555`.
13. **Botões de Ação da Hero (`Hero.tsx`):** Botões ampliados para dimensões generosas (`min-h-[56px] sm:min-h-[62px] px-9 sm:px-11`), com peso de fonte normal (`font-normal`), sem negrito, e sombreamento sutil e elegante idêntico ao original.
14. **TagBadges de Seção (`TagBadge.tsx`):** Componente unificado com proporções ampliadas (~52-54px de altura total), pílula interna pastel `#EDF4D4` (~38-40px de altura) com ponto neon `#D2FB07` e halo suave, nome "Versell" em `#556F00` e rótulo de seção em `#333333` com tipografia `text-sm sm:text-[15px]`, replicado em todas as 10 seções da landing page.
15. **Seção de Segurança (`SecuritySection.tsx`):** Título `"Segurança em cada Pix"` em linha única com dual-color (`#111111` e `#5B7500`), menção institucional em negrito `"Bass Pago Instituição de Pagamento"`, canais de e-mail sem ícone e com endereços em negrito sublinhados (`denuncia@versell.com.br` e `compliance@versell.com.br`), e 4 cards com ícones alinhados à referência (`UserCheck`, `Eye`, `Key` e `ShieldCheck`).
14. **Cards de Soluções e Segmentos (`SolutionsGrid.tsx`):** Grade de 6 cards com proporções verticais generosas (`min-h-[260px] sm:min-h-[280px] p-8 sm:p-9 md:p-10 rounded-[32px]`), squircles ampliados `w-12 h-12 rounded-2xl bg-[#0D0E10]` com ícones neon `w-6 h-6 stroke-[1.8]` rigorosamente fiéis à captura original: `Layers` (SaaS), `ShoppingCart` (E-commerce), `MonitorPlay` (Infoproduto), `Building` (ERP), `Landmark` (Gateways e plataformas) e `Eye` (Nicho hot).
15. **Linha do Tempo em 3 Passos (`ThreeSteps.tsx`):** Fluxo operacional em 3 passos sem cards retangulares, com linha horizontal contínua em verde neon (`#D2FB07`) interligando círculos brancos numerados com contorno neon (`01`, `02`, `03`), títulos e descrições com alinhamento textual à esquerda e botão CTA amplo centralizado.
17. **Botões CTA Pill Interativos com Hover Effect (`CtaButton.tsx`):** Padronização integral de todos os botões no estilo CTA (#D2FB07) com comportamento responsivo ao cursor: fundo verde neon com texto preto centralizado no repouso; halo de luz difusa neon expansiva (`hover:shadow-[0_0_32px_rgba(210,251,7,0.75)]`) e emersão à direita de badge circular branco com ícone diagonal `ArrowUpRight` (`↗`) em preto fino com transição suave ao passar o mouse.
18. **Seção de FAQ / Perguntas Frequentes (`FaqSection.tsx`):** Título em linha única sem negrito (`"Perguntas"` em preto e `"Frequentes"` em cinza neutro), accordion com botões minimalistas em verde oliva (`+` fechado e `x` aberto rotacionado), borda sutil verde neon (`border-[#D2FB07]`) no card expandido e respostas completas cadastradas para todas as 8 perguntas.
19. **Card de Cartão e Checkout (`VersellPayBanner.tsx`):** Card estilizado com sobremesa suave em gradiente neon pastel (`#EEF9BD` a `#FFFFFF`), título com frase em negrito `"Também precisa de cartão e checkout?"`, link `"versellpay.com"` em peso normal (`font-normal`) com escala ampliada (`text-[15px] sm:text-base`) na cor verde oliva `#5B7500` acompanhado por seta horizontal `→` (`stroke-[1.8]`) e ícone de cartão de crédito em traço fino neon no squircle escuro.
20. **Card CTA Pré-Footer e TagBadge Dark (`PreFooterCta.tsx` e `TagBadge.tsx`):** Card escuro estilizado com iluminação ambiente inferior difusa, logotipo 3D de acrílico verde da Versell nítido e volumétrico em escala proporcional com tonalidade metálica oliva escura (`brightness-[0.52]`), botão CTA ampliado e confortável ocupando 1/3 da largura do card, mini badge interna com fundo cinza destacado (`#242528`), dot de precisão com anel oliva e núcleo neon, e ícones bare em verde neon fluorescente (`Zap`, `ShieldCheck` e `Code`) sem fundos circulares.

---

## 6. Governança e Repositório
- `.gitignore`: Regras completas de exclusão de artefatos de build Next.js, dependências Node, variáveis `.env` e caches de sistema.
- `README.md`: Documentação de apresentação da fintech, arquitetura Docker, guia de início rápido e catálogo de conformidade com o Banco Central.
- `PROMPT.md`, `CONTEXTO.md`, `PASSOS.md`, `DOCUMENTACAO.md`: Quatro pilares de rastreabilidade e governança contínua.
- **Status do Projeto:** v1.0.0 Release Concluída com 100% de integridade em Docker e conformidade Mobile First.



