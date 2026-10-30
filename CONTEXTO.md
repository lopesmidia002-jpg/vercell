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
6. `suporte-dentro.png`, `suporte-meio.png`, `suporte-fora.png`: Sistema de 3 anéis orbitais concêntricos com animação de rotação contínua (horário e anti-horário) com pausa em `:hover`.
7. **Carrossel / Ticker:** Componente de alta fidelidade com rolagem contínua via GPU (`anim-marquee`), gradiente bilateral de atenuação suave nas bordas, fundo em micro-grid e pills brancas com squircles neon `#D2FB07` contendo ícones fiéis ao design original (`Zap`, `Code`, `QrCode`, `Users`, `Split`, `RefreshCw`, `Webhook`, `Lock`, `ShieldCheck` com label "Antifraude inteligente", `Headphones`).
8. **Banners / Cards de Valor (`ValueCards.tsx`):** Tríade de cards brancos puros direcionados ao fluxo de Pix: RECEBA, DIVIDA (neon `#D2FB07`) e MOVIMENTE, com tipografia em negrito, altura generosa (`min-h-[360px] sm:min-h-[380px]`) e lista de benefícios com marcadores `Check` em `#5B7500`.
9. **Navbar Superior (`Navbar.tsx`):** Barra de navegação com logotipo oficial Versell, links centrais contidos em elegante pílula branca arredondada flutuante com sombra suave, link de "Documentação ↗" em negrito, botão de texto limpo "Entrar" e botão de conversão neon "Falar com especialista".
10. **Bento Grid de Soluções (`BentoGrid.tsx`):** Grid moderno com proporções generosas idênticas ao original: Linha 2 (Subcontas, Split automático, Pix Automático) com altura ampliada para `min-h-[350px] sm:min-h-[380px]`, Linha 1 com enquadramento e calibração cirúrgica da foto da modelo via `objectPosition: "74% top"` (`min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]`), e ícones dedicados em squircles escuros (`Wallet`, `Code`, `Users`, `Split`, `Calendar`, `Eye`, `ShieldCheck`).
11. **Tag Badges Padronizados (`TagBadge.tsx`):** Pílula branca com sombra suave, inner pill pastel `#EEF3DB` com ponto indicador circular neon limpo e sólido (`bg-[#D2FB07]`) e nome `Versell` em peso normal (`font-normal`), sem negrito, aplicado globalmente em todos os pontos da página.

---

## 6. Governança e Repositório
- `.gitignore`: Regras completas de exclusão de artefatos de build Next.js, dependências Node, variáveis `.env` e caches de sistema.
- `README.md`: Documentação de apresentação da fintech, arquitetura Docker, guia de início rápido e catálogo de conformidade com o Banco Central.
- `PROMPT.md`, `CONTEXTO.md`, `PASSOS.md`, `DOCUMENTACAO.md`: Quatro pilares de rastreabilidade e governança contínua.
- **Status do Projeto:** v1.0.0 Release Concluída com 100% de integridade em Docker e conformidade Mobile First.



