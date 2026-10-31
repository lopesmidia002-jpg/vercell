# DOCUMENTAÇÃO TÉCNICA - LANDING PAGE INSTITUCIONAL VERSELL

## 1. Visão Geral da Arquitetura
A Landing Page da Versell foi construída com foco em performance extrema, fidelidade visual de design (*pixel-perfect*), princípios **Mobile First** e isolamento total via Docker.

- **Framework:** Next.js (App Router, React 18/19, TypeScript)
- **Estilização:** Tailwind CSS com tokens customizados:
  - Fundo geral: `#F6F7F2` (Ivory/Off-White suave idêntico ao design original)
  - Textura de Fundo: Grade sutil de quadrados `48x48px` na Hero e `32x32px` no carrossel
  - Verde de destaque em textos claros: `#5B7500` (Moss/Olive Green de alto contraste)
  - Verde neon de destaque em fundos dark e botões: `#D2FB07` / `#C6F500`
- **Aceleração Gráfica:** Translações 3D com `will-change: transform` e `translate3d` para evitar quedas de frame em dispositivos móveis
- **Ícones:** Lucide React + SVGs customizados da Versell
- **Tipografia:** Helvetica Neue local com fallbacks geométricos (Plus Jakarta Sans, Inter)
- **Containerização:** Docker Multi-stage (`node:20-alpine`) com targets `dev` e `runner`
- **Status do Container:** `versell-app` (Up / Healthy na porta `3000`)
- **Status da Imagem Standalone:** `versell-prod` compilada com sucesso (22 kB page size / 109 kB First Load JS)

---

## 2. Ajustes Pixel-Perfect (Hero, Badges, Bento Grid, Carrossel e Navbar)
1. **Componente de Tag Badge (`TagBadge.tsx`):**
   - Reprodução cirúrgica da pílula original: contorno externo branco com borda suave `border border-black/[0.08]` e sombra sutil `shadow-[0_2px_8px_rgba(0,0,0,0.02)]`.
   - Pílula interna pastel `#EEF3DB` com ponto indicador circular neon limpo e sólido (`w-2.5 h-2.5 rounded-full bg-[#D2FB07]`, sem anéis escuros internos).
   - Nome **Versell** em peso normal (`font-normal`), sem negrito, na cor `#556F00`, aplicado automaticamente em todos os locais da página onde o componente é utilizado (Hero, ValueCards, BentoGrid, SolutionsGrid, ThreeSteps, DevSection, SecuritySection, FaqSection, OrbitalSupport e PreFooterCta).
   - Texto de identificação de seção em `font-normal text-[#222222]` sem barras divisórias artificiais.
2. **Hero Section:**
   - Adicionada tela com quadrados em efeito leve de fundo (`bg-[size:48px_48px]`), estendendo-se por toda a seção e sob a luz ambiente neon do ícone 3D.
   - **Tipografia do Título Principal:** A frase `"Quem vende no Pix,"` foi ajustada para peso de fonte normal (`font-normal`), sem negrito, enquanto a segunda linha `"vende com Versell."` mantém o destaque em negrito (`font-bold`) na cor verde oliva `#5B7500`, exatamente como na referência original.
   - **Botões CTA Ampliados e Proporcionais:** Botão principal ("Abrir minha conta") e secundário ("Falar com especialista") ampliados para `min-h-[56px] sm:min-h-[62px]` com padding generoso (`px-9 sm:px-11`), tipografia em peso normal (`font-normal`), sem negrito, e leve sombreamento difuso (`shadow-[0_2px_12px_rgba(210,251,7,0.4)]` no botão neon e `shadow-[0_2px_8px_rgba(0,0,0,0.03)]` no botão branco), idênticos à referência original.
   - Ícones de diferenciais inline minimalistas em verde oliva de destaque (`#5B7500` / `stroke-[2]`): `Zap` (Pix 24/7), `ShieldCheck` (escudo com tique de verificação para "Infraestrutura completa") e `Code` (`< >` para "API e sandbox"), acompanhados por texto neutro `#555555`.
3. **Carrossel / Ticker:**
   - Degradê bilateral suave nos cantos (`w-24 sm:w-40 md:w-60 z-20`) para entrada e saída contínua de elementos.
   - Fundo com padrão sutil de grade quadriculada.
   - Tags brancas com squircle neon `#D2FB07`.
   - **Ícones 100% alinhados à referência original:**
     - `Pix na hora, 24/7`: `Zap`
     - `API de Pix`: `Code`
     - `QR Code e Copia e Cola`: `QrCode` (ícone de código QR de resposta rápida)
     - `Subcontas`: `Users` (duas silhuetas com cabeças arredondadas)
     - `Split automático`: `Split` (bifurcação em Y com setas divergentes sem nós circulares)
     - `Pix Automático`: `RefreshCw` (setas circulares de recorrência e renovação)
     - `Webhooks em tempo real`: `Webhook` (triskelion de 3 pás oficial)
     - `mTLS + OAuth2`: `Lock` (cadeado de autenticação segura e criptografia)
     - `Antifraude inteligente`: `ShieldCheck` (escudo com tique de verificação e label completa)
     - `Suporte`: `Headphones` (fone de ouvido com haste)
4. **Bento Grid (`BentoGrid.tsx`):**
   - **Enquadramento Preciso da Foto da Modelo (Card 1):**
     - Aplicação de `objectPosition: "74% top"` na imagem da modelo (`Pagina-Versell-1-1-scaled.webp`). Com essa calibração exata, o rosto, o cabelo trançado de ambos os lados, o suéter branco e o smartphone que ela segura ficam perfeitamente centralizados e visíveis, eliminando o corte anterior na lateral direita e replicando fielmente o mockup original.
     - Suavização do degradê de transição lateral em `w-24 bg-gradient-to-r from-white via-white/80 to-transparent`.
   - **Ampliação de Altura dos Banners Centrais e Proporções Gerais:**
     - Linha 2 (os 3 banners: `Subcontas`, `Split automático`, `Pix Automático`): ampliada para `min-h-[350px] sm:min-h-[380px]` com padding `p-8 sm:p-10`, respeitando as proporções verticais generosas e elegantes do design de referência.
     - Linha 1 (`min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]`): Card 1 com foto da modelo perfeitamente enquadrada; Card 2 com luz ambiente difusa no canto inferior.
     - Linha 3 (`min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]`): Mockup dos MacBooks centralizado e rente à base com proporção generosa.
   - **Ícones e Títulos:**
     - Card 1 (Conta digital Versell): `Wallet` com traço fino e destaque em verde oliva `#5B7500`.
     - Card 2 (API de Pix): `Code` (colchetes `< >` puros sem a barra diagonal `/`).
     - Card 3 (Subcontas): `Users` (duas silhuetas clássicas) e título `"Subcontas"` com destaque na cor verde oliva `#5B7500`.
     - Card 4 (Split automático): `Split` (duas setas divergentes sem nós circulares).
     - Card 5 (Pix Automático): `Calendar` com abas superiores.
     - Card 6 (Painel e monitoramento): `Eye`.
     - Card 7 (Antifraude inteligente): `ShieldCheck`.
5. **Header / Navbar (`Navbar.tsx`):**
   - `sticky top-0` com backdrop-blur para estabilidade visual perfeita.
   - **Tipografia Leve e Sem Negrito:** Todas as palavras da barra superior utilizam peso normal (`font-normal`), eliminando qualquer negrito tanto nos links (`Pix`, `Produtos`, `Para quem`, `Desenvolvedores`, `FAQ` e `Documentação ↗`) quanto nos botões (`Entrar` e `Falar com especialista`).
   - **Destaque no Item "Pix":** O link `"Pix"` recebe a cor verde oliva oficial da marca (`text-[#5B7500] font-normal`), exatamente como na referência original.
   - **Botão Entrar:** Estilizado em formato pílula com contorno suave e fundo branco (`rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-normal text-[#111111] hover:border-black/30 shadow-sm`).
   - **Botão CTA ("Falar com especialista"):** Tipografia em peso normal (`font-normal`), sem negrito, em verde neon `#D2FB07` com sombreamento/glow neon difuso característico (`shadow-[0_4px_20px_rgba(210,251,7,0.5)]`).
6. **Banners / Cards de Valor (`ValueCards.tsx`):**
   - **Três cards calibrados ao design original:** Dispostos lado a lado com fluxo sequencial *Receba ➔ Distribua ➔ Movimente*.
   - **Badges Padronizados, Ampliados e Sem Negrito:**
     - Card 1: Badge pastel `"Receba"` (`#EEF3DB`) em peso normal com padding ampliado (`px-5 py-2 text-sm`) e texto verde oliva `#425405`.
     - Card 2: Badge neon fluorescente `"Distribua"` (`#D2FB07`) em peso normal com padding ampliado (`px-5 py-2 text-sm`) e texto preto `#111111`.
     - Card 3: Badge pastel `"Movimente"` (`#EEF3DB`) em peso normal com padding ampliado (`px-5 py-2 text-sm`) e texto verde oliva `#425405`.
   - **Efeito Fiel de Fundo no Card Central:** Gradiente vertical suave que cobre exatamente a metade superior do card (`linear-gradient(180deg, #F1FBC4 0%, #F8FDE2 42%, #FFFFFF 68%)`), transicionando naturalmente para branco puro na metade inferior, acompanhado por borda neon `border-[#D2FB07]/70` e sombra exterior difusa `shadow-[0_10px_35px_rgba(210,251,7,0.2)]`.
   - **Ícones de Verificação Circulares:** Marcadores de benefícios substituídos pelo ícone circular com tique (`CheckCircle2` em `#5B7500` com traço fino `stroke-[1.75]`).
   - **Setas Conectoras de Fluxo:** Chevrons discretos em verde neon (`ChevronRight`) dispostos nos intervalos entre os cards no desktop para guiar a leitura do fluxo operacional.

7. **Padronização Global de Tipografia (Remoção de Negrito em Palavras Pretas):**
   - Em conformidade estrita com o padrão de design da Versell e a solicitação do usuário, **todas as palavras e frases de cor preta** (`#111111`, `#000000`, `text-black`, `text-neutral-800`, `text-[#222222]`) que continham classes de negrito (`font-bold`, `font-semibold`, `font-extrabold`) foram convertidas para peso regular/normal (`font-normal`).
   - O negrito (`font-bold`) foi **preservado exclusivamente nas palavras e expressões coloridas de destaque** em verde oliva oficial (`#5B7500`) e verde neon fluorescente (`#D2FB07`).
   - Essa harmonia tipográfica dual-weight foi aplicada integralmente em todos os componentes:
     - `Hero.tsx`: `"Quem vende no Pix,"` (`font-normal`), `"vende com Versell."` (`font-bold text-[#5B7500]`), botões com texto preto em `font-normal`.
     - `BentoGrid.tsx`: Todos os títulos de cards com palavras pretas em `font-normal` e palavras-chave verdes em `font-bold` (`"Conta digital "`, `"API de "`, `"automático"`, `"Pix "`, `"Painel e "`, `"Antifraude "`).
     - `ValueCards.tsx`: Título de seção e títulos de cards em `font-normal text-[#111111]`, badge "DIVIDA" em `font-normal text-[#111111]`.
     - `DevSection.tsx`: `"API de Pix "` em `font-normal`, botão de ação em `font-normal text-black`, link Postman em `font-normal`.
     - `SecuritySection.tsx`: `"Segurança em "` em `font-normal`, menção à Baas Pago em `font-normal`, link de políticas e cards de segurança em `font-normal`.
     - `SolutionsGrid.tsx`: `"Feita para quem "` em `font-normal`, títulos dos 6 cards em `font-normal`.
     - `ThreeSteps.tsx`: `"Comece a receber em "` em `font-normal`, badges numéricos e títulos de passos em `font-normal`, botão CTA em `font-normal text-black`.
     - `FaqSection.tsx`: `"Perguntas "` em `font-normal`, perguntas do acordeão em `font-normal text-[#111111]`.
     - `VersellPayBanner.tsx`: Título do banner e link em `font-normal`.
     - `OrbitalSupport.tsx`: `"Um time do seu lado "` em `font-normal`, botão WhatsApp em `font-normal text-black`.
     - `PreFooterCta.tsx`: `"Quem vende no Pix,"` em `font-normal`, botão CTA em `font-normal text-black`.
     - `Footer.tsx`: Botão CTA em `font-normal text-black`.
8. **Calibração Visual do Carrossel / Ticker (`Ticker.tsx`):**
   - Remoção de negrito em todas as palavras das tags (`font-normal text-[#111111]`).
   - Ícones com traço fino refinado (`stroke-[1.75]`), eliminando traços grossos/pesados.
   - Aumento proporcional de escala: padding expandido para `px-5 py-2.5 sm:px-6 sm:py-3`, squircle neon ampliado para `w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#D2FB07]` e tamanho do texto ajustado para `text-sm sm:text-[15px]`.
   - Ícone de chave `Key` para "mTLS + OAuth2" e label simplificado "Antifraude" conforme a captura original.

9. **Calibração Visual dos Cards de Soluções (`SolutionsGrid.tsx`):**
   - **Correção dos 6 Ícones:**
     - **SaaS:** Ícone `Layers` (3 camadas isométricas empilhadas).
     - **E-commerce:** Ícone `ShoppingCart` (carrinho de compras).
     - **Infoproduto:** Ícone `MonitorPlay` (tela de monitor com botão de play no centro e pedestal).
     - **ERP:** Ícone `Building` (edifício comercial com janelas e portal).
     - **Gateways e plataformas:** Ícone `Landmark` (instituição bancária com colunas e frontão).
     - **Nicho hot:** Ícone `Eye` (olho com pupila central).
   - **Dimensões, Squircles e Padding dos Cards:**
     - Squircles escuros ampliados para `w-12 h-12 rounded-2xl bg-[#0D0E10]` com ícones em verde neon `#D2FB07` ampliados para `w-6 h-6 stroke-[1.8]`.
     - Proporções verticais dos cards aumentadas com padding generoso `p-8 sm:p-9 md:p-10`, bordas arredondadas `rounded-[32px]` e altura mínima `min-h-[260px] sm:min-h-[280px]`.
     - Espaçamento vertical generoso `mb-6 sm:mb-8` entre o ícone e o título.

10. **Reestruturação da Seção de 3 Passos (`ThreeSteps.tsx`):**
    - **Remoção dos Cards Retangulares Fechados:** Eliminação dos cards brancos caixote, permitindo que a linha do tempo repouse de forma elegante e limpa sobre a superfície suave `#F6F7F2` da página, idêntico à captura original.
    - **Linha Horizontal Contínua Neon:** Linha conectiva de 2px em verde neon fluorescente (`#D2FB07`) interligando os 3 círculos no desktop através de seu eixo central.
    - **Círculos Numerados Minimalistas:** Círculos `01`, `02` e `03` estilizados com fundo branco (`bg-white`), contorno fino em verde neon (`border-2 border-[#D2FB07]`), sombra suave e alinhados à esquerda junto ao texto.
    - **Alinhamento à Esquerda e Textos Fiéis:** Títulos e descrições com alinhamento textual à esquerda em tipografia sem negrito (`font-normal text-[#111111]`).
    - **Botão CTA Amplo e Centralizado:** Botão "Abrir minha conta" em formato pílula generoso (`min-h-[56px] sm:min-h-[60px] px-12 sm:px-16`) em verde neon fluorescente `#D2FB07`.

---

## 3. Instruções de Execução via Docker (100% Isolado)

### Pré-requisitos
- Docker Desktop ou Docker Engine instalado e em execução no host.

### Comandos Rápidos

1. **Subir a aplicação com hot-reload no container (Ambiente de Desenvolvimento):**
   ```bash
   docker compose up --build -d
   ```

2. **Visualizar logs em tempo real:**
   ```bash
   docker compose logs -f versell-app
   ```

3. **Verificar status e healthcheck do container:**
   ```bash
   docker compose ps
   ```

4. **Gerar e rodar o container de produção standalone (`runner`):**
   ```bash
   docker build -t versell-prod --target runner .
   docker run -p 3000:3000 versell-prod
   ```

5. **Testar resposta HTTP do container:**
   ```bash
   curl -I http://localhost:3000/
   ```

6. **Parar a aplicação:**
   ```bash
   docker compose down
   ```

### Portas e Acessos
- **URL da Aplicação:** `http://localhost:3000`
- **Mapeamento de Porta:** `3000:3000`

---

## 4. Variáveis de Ambiente
Configurações pré-definidas no ambiente do container:
```env
PORT=3000
NODE_ENV=development
HOSTNAME=0.0.0.0
WATCHPACK_POLLING=true
```

---

## 5. Auditoria de Ativos e Rotas (Testados e Validados no Docker)
| Rota / Ativo | Status HTTP | Descrição |
|---|---|---|
| `/` | `200 OK` | Landing Page institucional completa |
| `/assets/logo-versell4.svg` | `200 OK` | Vetor do logotipo para a barra superior |
| `/assets/logo-versell3.svg` | `200 OK` | Vetor do logotipo para o rodapé escuro |
| `/assets/logo_versell.webp` | `200 OK` | Ícone volumétrico 3D acrílico |
| `/assets/suporte-fora.png` | `200 OK` | Anel orbital externo (568x568) |
| `/assets/suporte-meio.png` | `200 OK` | Anel orbital intermediário (445x436) |
| `/assets/suporte-dentro.png` | `200 OK` | Anel orbital interno (301x300) |
| `/assets/MacBook-Air-2022-3.webp` | `200 OK` | Mockup do dashboard multi-telas |
| `/assets/Pagina-Versell-1-1-scaled.webp` | `200 OK` | Imagem editorial app smartphone |
