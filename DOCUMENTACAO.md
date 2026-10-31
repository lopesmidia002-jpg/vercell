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
27. **Remoção de Negrito no Botão CTA "Abrir minha conta" (`CtaButton.tsx`, `Footer.tsx`):**
    - **Tipografia Leve nos Botões de Ação:** O componente reutilizável `CtaButton.tsx` teve sua tipografia alterada para `font-light text-black` (peso 300), utilizando a fonte leve `HelveticaNeueLight.otf`. Isso converte as ações principais ("Abrir minha conta" no Hero, ThreeSteps e PreFooterCta, além de "Falar com especialista" no Footer) para peso leve e elegante sem negrito.
28. **Correção da Quebra de Linha do Título de Desenvolvedores (`DevSection.tsx`):**
    - **Eliminação de Sobreposição com o Terminal:** Removida a imposição de linha única (`whitespace-nowrap`) no título de `DevSection.tsx`, restaurando a divisão idêntica ao design original com `<br />`: `"API de Pix simples e"` na primeira linha e `"robusta"` isolada na segunda linha, eliminando qualquer colisão ou corte de texto sob a janela do terminal no desktop.

---## 2. Ajustes Pixel-Perfect (Hero, Badges, Bento Grid, Carrossel e Navbar)
1. **Componente de Tag Badge (`TagBadge.tsx`):**
   - Reprodução cirúrgica da pílula original com escala e proporções ampliadas para o tamanho real: altura total calibrada para ~52-54px com contorno externo branco limpo `border border-black/[0.08]` e sombra sutil `shadow-[0_2px_10px_rgba(0,0,0,0.03)]`.
   - Pílula interna pastel `#EDF4D4` ampliada (`px-4 py-2` / altura ~38-40px) com ponto indicador circular neon limpo (`w-2.5 h-2.5 rounded-full bg-[#D2FB07]`) e halo luminoso difuso (`shadow-[0_0_8px_rgba(210,251,7,0.9)]`).
   - Nome **Versell** em peso normal (`font-normal`), na cor verde oliva `#556F00`, com tipografia `text-sm sm:text-[15px]`.
   - Texto de identificação de seção em `font-normal text-[#333333] text-sm sm:text-[15px]` com espaçamento generoso (`gap-4 sm:gap-4.5`) e padding lateral (`pr-6 sm:pr-7`), aplicado uniformemente em todos os 10 locais onde o componente é utilizado (Hero, ValueCards, BentoGrid, SolutionsGrid, ThreeSteps, DevSection, SecuritySection, FaqSection, OrbitalSupport e PreFooterCta).
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
   - **Remoção do Menu Sanduíche e Centralização da Marca no Mobile:** Em telas mobile (`< md`), o botão de menu sanduíche e o drawer deslizante foram completamente removidos, e o logotipo oficial "Versell" foi centralizado com exatidão na largura da viewport (`justify-center md:justify-between`). Em telas desktop (`md:`), a distribuição completa com menu e botões de ação laterais é preservada.
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

10. **Reestruturação e Calibração da Seção de 3 Passos (`ThreeSteps.tsx`):**
    - **Remoção dos Cards Retangulares Fechados:** Eliminação dos cards brancos caixote, permitindo que a linha do tempo repouse de forma elegante e limpa sobre a superfície suave `#F6F7F2` da página, idêntico à captura original.
    - **Linha Conectiva Horizontal Suavizada:** Linha fina de 1px em gradiente suave neon (`from-[#DFFA5A] via-[#DFFA5A]/80 to-transparent`) interligando os círculos no desktop a partir do centro do círculo `01` e atenuando delicadamente em direção à margem direita, eliminando o traço pesado anterior.
    - **Círculos e Numeração em Verde Oliva:** Círculos `01`, `02` e `03` estilizados com fundo branco (`bg-white`), contorno fino de 1px em verde neon (`border border-[#D2FB07]`), sombra difusa sutil e numeração em verde oliva oficial (`font-bold text-[#557008]`), exatamente idêntica à referência original.
    - **Alinhamento à Esquerda e Textos Fiéis:** Títulos e descrições com alinhamento textual à esquerda em tipografia sem negrito (`font-normal text-[#111111]`).
    - **Botão CTA Amplo e Centralizado:** Botão "Abrir minha conta" em formato pílula generoso (`min-h-[56px] sm:min-h-[60px] px-12 sm:px-16`) em verde neon fluorescente `#D2FB07`.

11. **Refinamento Pixel-Perfect da Seção de Desenvolvedores (`DevSection.tsx` e `TagBadge.tsx`):**
    - **TagBadge Suavizado:** Atualizado com pílula pastel suave `#F0F5DD`, ponto neon `#D2FB07` com halo luminoso sutil, texto da marca "Versell" em `#556F00` e texto identificador "Desenvolvedores" em cinza neutro suavizado `#555555` com peso normal (`font-normal`), harmonizando com o mockup original.
    - **Alinhamento e Cores do Título:** Quebra de linha e coloração exatas: `"API de Pix "` em texto preto sem negrito (`font-normal text-[#111111]`) seguido por `"simples e"` na mesma linha em verde oliva em negrito (`font-bold text-[#5B7500]`), e `"robusta"` na segunda linha em verde oliva em negrito (`font-bold text-[#5B7500]`).
    - **Ícones Minimalistas dos Recursos:** Substituição dos antigos círculos checados pelos 4 ícones bare correspondentes em verde oliva da marca (`#5B7500` / `stroke-[1.8]`): `<Code>` para "Cash In, Cash Out e Pix Automático", `<Key>` para "Autenticação mTLS + OAuth2", `<Webhook>` para "Webhooks em tempo real para cada evento" e `<FlaskConical>` para "Ambiente sandbox e coleção Postman".
    - **Link de Coleção do Postman:** Texto `"Baixar coleção Postman"` calibrado na cor verde oliva (`text-[#5B7500] font-normal`) acompanhado por seta horizontal para a direita (`ArrowRight` `→`).
    - **Centralização de Cabeçalho, Badges e Ações no Mobile:** Coluna de informações ajustada para `items-center text-center lg:items-start lg:text-left`, centralizando o `TagBadge` ("Desenvolvedores"), título, subtítulo, bloco de recursos e botões/badges de ação no mobile (`< lg`), mantendo alinhamento à esquerda no desktop (`lg:`).
    - **Janela de Terminal de Código Fiel:**
      - Barra superior com os 3 pontos de janela (verde neon `#D2FB07`, âmbar `#EAB308` e verde escuro `#3F590A`), nome de arquivo centralizado `criar-cobranca.sh` e badge pílula `Cash In` em verde neon translúcido no canto direito.
      - Remoção de abas (cURL, Node.js, Python) e botão Copiar artificiais.
      - Snippet de código com chamada curl exata (`PUT https://api.pix.basspago.com.br/cob/{txid}`) com tokens de sintaxe em ciano (`#38BDF8`) nas chaves JSON e verde neon (`#D2FB07`) nos valores e variáveis.
      - Adição da seção de retorno documentada (`# Resposta` com `status: ATIVA` e `pixCopiaECola`).
      - Rodapé com nota documental: `"Exemplo resumido da "` em cinza neutro e `"documentação oficial"` em link verde neon com sublinhado ao passar o cursor.

12. **Refinamento Pixel-Perfect da Seção de Segurança (`SecuritySection.tsx`):**
    - **Centralização de Cabeçalho e Badges no Mobile:** Coluna institucional ajustada para `items-center text-center lg:items-start lg:text-left`, centralizando o `TagBadge` ("Segurança"), título, descrição, link e canais de contato no mobile.
    - **Alinhamento do Título em Linha Única:** O título `"Segurança em cada Pix"` foi unificado em uma única linha fluida com `"Segurança em "` em negrito preto (`font-bold text-[#111111]`) e `"cada Pix"` em negrito verde oliva (`font-bold text-[#5B7500]`).
    - **Texto Institucional Bass Pago:** Redação atualizada para `"Bass Pago Instituição de Pagamento"` com destaque em negrito (`font-bold text-[#111111]`).
    - **Remoção dos Ícones de Carta e Formatação dos E-mails:**
      - Eliminados todos os ícones de envelope/carta (`Mail`).
      - Removida a borda divisória artificial superior (`border-t`).
      - E-mails de canal oficial estilizados com destaque em negrito e sublinhado (`font-bold text-[#111111] underline underline-offset-2`): `denuncia@versell.com.br` e `compliance@versell.com.br`.
    - **Correção dos 4 Ícones dos Cards:**
      - Card 1 (`Análise de cada conta`): mantido `UserCheck` (silhueta de usuário com selo de verificação) e texto ajustado para `"análise do negócio"`.
      - Card 2 (`Monitoramento 24/7`): ícone atualizado para `Eye` (olho com pupila), substituindo a onda de ECG anterior.
      - Card 3 (`API protegida`): ícone atualizado para `Key` (chave de credenciais/mTLS), substituindo o escudo anterior.
      - Card 4 (`Privacidade e LGPD`): ícone atualizado para `ShieldCheck` (escudo com tique de verificação de proteção legal), substituindo o cadeado anterior.
    - **Tipografia dos Títulos dos Cards:** Títulos dos 4 cards definidos em negrito (`font-bold text-[#111111]`) com proporções generosas idênticas ao mockup original.

13. **Padronização Pixel-Perfect da Seção Orbital de Suporte 24h (`OrbitalSupport.tsx`):**
    - **Centralização de Cabeçalho e Badges no Mobile:** Coluna de suporte ajustada para `items-center text-center lg:items-start lg:text-left`, centralizando o `TagBadge` ("Suporte 24h"), título e parágrafo no mobile.
    - **Ocultação de Elementos Suprérfluos:** Removidos os dois badges de status ("Tempo médio de resposta: < 2 min", "Plantão técnico 24/7/365"), o botão inferior "Chamar no WhatsApp" e o texto de instrução tátil ("Toque ou passe o mouse nos anéis..."), mantendo o layout limpo e minimalista fiel à referência original.
    - **Harmonização do Título:** Primeira linha `"Um time do seu lado 24"` com o numeral `"24"` destacado em verde neon fluorescente (`#D2FB07`), e segunda linha `"horas por dia"` em verde neon fluorescente em negrito (`font-bold text-[#D2FB07]`).
    - **Novo Ícone e Círculo WhatsApp:** Núcleo central ampliado para um círculo sólido em verde neon fluorescente (`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#D2FB07]`) contendo o ícone oficial do WhatsApp em preto puro vazado.
    - **Suavização da Iluminação Neon:** Remoção do elemento `div` de fundo com desfoque excessivo (`blur-3xl`), aplicando diretamente no botão central um halo neon suave, aveludado e com decaimento sutil (`shadow-[0_0_25px_rgba(210,251,7,0.2),0_0_45px_rgba(210,251,7,0.08)]`), preservando a escuridão límpida (`#0A0A0A`) do espaço entre o núcleo e a órbita menor, rigorosamente idêntico ao mockup original.

14. **Padronização Global do Efeito Hover nos Botões CTA Pill (`CtaButton.tsx`):**
    - **Arquitetura Componentizada:** Criação do componente `CtaButton` (`src/components/CtaButton.tsx`) reutilizável em todo o ecossistema da aplicação.
    - **Estado Padrão (Normal):** Pílula sólida em verde neon fluorescente (`#D2FB07`), cantos totalmente arredondados (`rounded-full`), texto perfeitamente centralizado em preto (`text-black font-normal`), sem seta aparente e com sombra suave.
    - **Estado Hover (Ao passar o cursor):**
      - **Halo Neon Expansivo:** Aplicação de efeito de iluminação difusa fluorescente ao redor de todo o botão: `hover:shadow-[0_0_32px_rgba(210,251,7,0.75),0_0_55px_rgba(210,251,7,0.35)]`.
      - **Centralização Preservada:** O rótulo do botão permanece rigidamente alinhado ao centro geométrico.
      - **Círculo Branco Flutuante:** Emersão à direita do botão de um círculo branco puro (`bg-white rounded-full`) contendo o ícone diagonal `ArrowUpRight` (`↗`) em preto com traço fino (`stroke-[2.2]`).
      - **Transição Fluida:** Animação combinada de escala, opacidade e translação suave (`transition-all duration-300 ease-out`).
    - **Adoção Unificada:** Replicado em todos os botões no estilo CTA do projeto: Hero ("Abrir minha conta"), ThreeSteps ("Abrir minha conta"), PreFooterCta ("Abrir minha conta"), DevSection ("Ver documentação"), Navbar (Desktop e Mobile: "Falar com especialista") e Footer ("Falar com especialista").

15. **Padronização Pixel-Perfect da Seção de FAQ (`FaqSection.tsx`):**
    - **Centralização de Cabeçalho e Badges no Mobile:** Coluna lateral ajustada para `items-center text-center lg:items-start lg:text-left lg:sticky lg:top-28`, centralizando o `TagBadge` ("Perguntas Frequentes"), título e subtítulo no mobile.
    - **Tipografia do Título Sem Negrito:** `"Perguntas"` em preto regular (`#111111`, peso 400) e `"Frequentes"` em cinza neutro (`#666666`, peso 400), alinhados em linha única, eliminando negrito prévio.
    - **Ícones de Expansão/Fechamento com Rotacionamento:** Substituição de chevrons por ícones minimalistas de traço fino em verde oliva (`#5B7500`): sinal `+` quando recolhido e `x` (rotação de 45°) quando expandido.
    - **Fechamento por Padrão e Interatividade Bidirecional:** Redefinição do estado inicial para todos os cards começarem fechados (`openIndex = null`), permitindo abrir qualquer pergunta ao clicar e recolher ao clicar novamente no botão de cabeçalho ou no corpo da resposta (`cursor-pointer`).
    - **Estilização de Card Ativo e Respostas Integrais:** Borda em verde neon sutil (`border border-[#D2FB07]`) no item expandido, sem divisória de linha cinza entre pergunta e resposta, e respostas completas cadastradas para todas as 8 perguntas frequentes.

16. **Padronização Pixel-Perfect do Card de Cartão e Checkout (`VersellPayBanner.tsx`):**
    - **Sobremesa Neon em Gradiente Suave:** Card estilizado com gradiente horizontal suave que entra com luz verde-limão pastel à esquerda e transita suavemente para branco puro na metade direita (`bg-gradient-to-r from-[#EEF9BD] via-[#FAFCEE] via-35% to-white to-70% bg-white rounded-[24px] border border-[#E2E6D5]`).
    - **Título em Negrito de Alto Contraste:** Frase `"Também precisa de cartão e checkout?"` ajustada para negrito (`font-bold text-[#111111] text-base sm:text-[17px] tracking-tight`), garantindo legibilidade e destaque visual fiel à referência original.
    - **Link e Seta em Verde Oliva sem Negrito:** O identificador `"versellpay.com"` calibrado em peso normal (`font-normal`), com escala tipográfica ampliada para `text-[15px] sm:text-base` na cor verde oliva `#5B7500`, acompanhado por seta horizontal à direita (`ArrowRight` `→`, `stroke-[1.8]`).
    - **Squircle Escuro e Cartão Neon:** Caixa de ícone escura compacta com cantos arredondados (`rounded-[14px] bg-[#0F1012]`) e ícone `CreditCard` com traço firme na cor verde neon `#D2FB07`.

17. **Padronização Pixel-Perfect do Card CTA Pré-Footer e TagBadge Dark (`PreFooterCta.tsx` e `TagBadge.tsx`):**
    - **Ampliação de Altura e Respiro Interno:** Contêiner do card escuro ampliado para altura mínima de `min-h-[500px] sm:min-h-[560px] lg:min-h-[590px]` com padding vertical generoso `px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24`, alcançando proporções verticais idênticas à referência original.
    - **Efeito de Iluminação Neon no Fundo da Metade Inferior:** Aplicação de dupla camada de gradiente ambiente verde neon no fundo do card cobrindo os ~55-60% inferiores (`radial-gradient` elíptico expansivo com decaimento suave e gradiente vertical ascendente `bg-gradient-to-t from-[#D2FB07]/14 via-[#D2FB07]/6 to-transparent`), preservando o preto profundo `#0F1012` no topo e banhando a metade inferior em uma iluminação aveludada contínua.
    - **Refinamento Tipográfico e Quebra do Subtítulo:** Subtítulo com texto em peso normal e cor suave (`text-sm sm:text-base md:text-[17px] text-[#D8D8D8] font-normal leading-[1.65] max-w-[620px]`), com quebra de linha exata após `"com a segurança e o "`, alinhando perfeitamente a leitura em 2 linhas idêntica à captura original.
    - **Botão/Badge CTA com Comprimento Calibrado ao Mockup Original:** Botão "Abrir minha conta" ampliado em seu comprimento horizontal para `w-[280px] sm:w-[324px] max-w-full` com tipografia `text-[15px] sm:text-base font-normal`, atingindo rigorosamente a proporção de 5.31:1 (324px de largura por 61px de altura) e respiro lateral idêntico à captura original.
    - **TagBadge Dark com Mini Badge Cinza Destacado:** No tema dark, a mini badge interna recebe fundo cinza sólido (`bg-[#242528]`), nome "Versell" em verde neon fluorescente (`text-[#D2FB07] font-normal`) e ponto indicador com anel verde oliva escuro (`bg-[#526017]`) e núcleo neon no centro (`bg-[#D2FB07]`), envolto por pílula externa sutil (`bg-[#18191B] border border-white/10`) com texto "Vamos crescer juntos?" em cinza claro (`text-[#D8D8D8] font-normal`).
    - **Ícones Bare Neon nos Recursos:** Remoção de círculos com tiques de checkmark genéricos, adotando ícones minimalistas diretos em neon `#D2FB07` com traço fino (`stroke-[1.8]`): `Zap` para "Pix 24/7", `ShieldCheck` para "Infraestrutura completa" e `Code` (`< >`) para "API e sandbox" em espaçamento harmonioso.
    - **Iluminação e Proporção Calibrada da Logo 3D de Canto:** Logotipo volumétrico 3D de acrílico verde da Versell calibrado para `560x560px` com deslocamento de precisão (`-bottom-[190px] sm:-bottom-[210px] md:-bottom-[230px] -right-[90px] sm:-right-[100px] md:-right-[110px]`), posicionando a haste esquerda inclinada logo abaixo do término da linha 1 do subtítulo e a haste direita vertical alinhada à margem direita da curva do card, com ampla folga em relação ao botão e destaques.

18. **Padronização das Badges e Ações do Rodapé (`Footer.tsx`):**
    - **Botão "Voltar para o Topo" Neon:** Estilizado em pílula com borda e texto em verde neon fluorescente `#D2FB07` (`border border-[#D2FB07] bg-transparent hover:bg-[#D2FB07]/10 text-xs font-normal text-[#D2FB07]`), sem seta, idêntico à captura original.
    - **Link "Central de Políticas" Sem Negrito:** Tipografia convertida para peso regular `font-normal text-[#D2FB07]`, eliminando qualquer negrito prévio.
    - **Botões CTA em Linha Única:** `"Falar com especialista"` e `"Abrir conta grátis"` com `whitespace-nowrap font-normal`, garantindo apresentação em uma linha única e eliminando quebras indesejadas no mobile.

19. **Título em Linha Única e Subtítulos Justificados à Esquerda no Mobile:**
    - **Título `DevSection.tsx` em Linha Única:** Remoção da quebra `<br />` que dividia `"API de Pix simples e"` e `"robusta"`, unificando em uma única linha contínua com `whitespace-nowrap` e escala fluida `text-[21px] min-[375px]:text-[23px] sm:text-3xl md:text-[44px] lg:text-[46px]`.
    - **Subtítulos e Recursos Justificados à Esquerda:** Parágrafos explicativos (`DevSection`, `SecuritySection`, `OrbitalSupport` e `FaqSection`) ajustados para alinhamento à esquerda (`text-left mx-0`), garantindo início nivelado na margem esquerda e leitura confortável no mobile, acompanhados de listas de recursos e canais de contato com `items-start text-left w-full`.

20. **Proteção de Linha Única nos Badges (`TagBadge.tsx`):**
    - **Texto Estritamente em Linha Única:** Inclusão de `whitespace-nowrap` no contêiner e no texto do componente `TagBadge`, com escala proporcional (`text-xs sm:text-[15px]` e respiros responsivos), impedindo qualquer quebra de linha interna ou deformação de badge em telas móveis compactas.

21. **Alinhamento à Esquerda dos Textos e Contatos de Segurança (`SecuritySection.tsx`):**
    - **Subtítulo, Políticas e Canais de E-mail:** Na coluna institucional de `SecuritySection`, subtítulo explicativo, link `"Conheça nossas políticas →"` e canais de compliance/denúncia formatados com alinhamento rigoroso à esquerda (`items-start text-left w-full`), nivelados no ponto `left: 16px` no mobile.

22. **Padronização Global de Todas as Badges Justificadas à Esquerda no Mobile:**
    - **Alinhamento Unificado à Margem Esquerda:** Todas as 10 badges do projeto (`Hero`, `ValueCards`, `BentoGrid`, `SolutionsGrid`, `ThreeSteps`, `DevSection`, `SecuritySection`, `OrbitalSupport`, `FaqSection` e `PreFooterCta`) ajustadas para alinhamento à esquerda no mobile (`items-start text-left` / `justify-start`), criando um ritmo vertical limpo, padronizado e simétrico com os títulos e subtítulos.

23. **Títulos de Seção em Linha Única e Justificados à Esquerda no Mobile (`ValueCards.tsx`, `SolutionsGrid.tsx`, `ThreeSteps.tsx`):**
    - **Linha Única sem Quebras:** Títulos principais de seções (`"O Pix do jeito que o seu negócio precisa"`, `"Feita para quem vende online"` e `"Comece a receber em 3 passos"`) protegidos com `whitespace-nowrap` e alinhados à margem esquerda (`text-left`) no mobile, eliminando palavras isoladas na segunda linha.

24. **Centralização das Ações e Badges da Seção Dev no Mobile (`DevSection.tsx`):**
    - **Ações Lado a Lado Centralizadas:** O botão `"Ver documentação"` e o link `"Baixar coleção Postman →"` calibrados com padding compacto responsivo e `justify-center`, permanecendo centralizados no mobile na mesma linha horizontal sem quebra indesejada.

25. **Remoção de Negrito em Links e Títulos de Soluções (`BentoGrid.tsx`, `SolutionsGrid.tsx`, `globals.css`):**
    - **Link de Ação "Abrir conta grátis →":** O link no card de produtos foi ajustado para `font-normal text-[#5B7500]` (peso 400), removendo o negrito (`font-semibold`).
    - **Títulos dos Cards de Soluções:** Adicionada a variante `HelveticaNeueLight.otf` para `font-weight: 300` em `globals.css` e aplicou-se `font-light text-[#111111]` aos 6 títulos (`"SaaS"`, `"E-commerce"`, `"Infoproduto"`, `"ERP"`, `"Gateways e plataformas"` e `"Nicho hot"`), eliminando a impressão de negrito e conferindo leveza e elegância visual fiéis às capturas de tela.

26. **Remoção de Negrito nos Títulos dos 3 Passos (`ThreeSteps.tsx`):**
    - **Títulos dos Passos Leves e Sem Negrito:** Os títulos `"Fale com a gente"`, `"Conta aprovada"` e `"Integre e receba"` na seção de introdução rápida foram atualizados para `font-light text-[#111111]` (peso 300), eliminando a espessura pesada e padronizando o peso da tipografia em sintonia com a grade de soluções.

25. **Remoção de Negrito em Links e Títulos de Soluções (`BentoGrid.tsx`, `SolutionsGrid.tsx`, `globals.css`):**
    - **Link de Ação "Abrir conta grátis →":** O link no card de produtos foi ajustado para `font-normal text-[#5B7500]` (peso 400), removendo o negrito (`font-semibold`).
    - **Títulos dos Cards de Soluções:** Adicionada a variante `HelveticaNeueLight.otf` para `font-weight: 300` em `globals.css` e aplicou-se `font-light text-[#111111]` aos 6 títulos (`"SaaS"`, `"E-commerce"`, `"Infoproduto"`, `"ERP"`, `"Gateways e plataformas"` e `"Nicho hot"`), eliminando a impressão de negrito e conferindo leveza e elegância visual fiéis às capturas de tela.

26. **Remoção de Negrito nos Títulos dos 3 Passos (`ThreeSteps.tsx`):**
    - **Títulos dos Passos Leves e Sem Negrito:** Os títulos `"Fale com a gente"`, `"Conta aprovada"` e `"Integre e receba"` na seção de introdução rápida foram atualizados para `font-light text-[#111111]` (peso 300), eliminando a espessura pesada e padronizando o peso da tipografia em sintonia com a grade de soluções.
29. **Ampliação do Sombreamento Neon no Núcleo do Suporte WhatsApp (`OrbitalSupport.tsx`):**
    - **Sombreamento Neon Amplo e Fiel ao Original:** Implementação de dupla camada de iluminação ambiente para o botão central do WhatsApp: uma aura difusa com `bg-[#D2FB07]/20 blur-2xl` e um degradê de sombra triplo (`shadow-[0_0_30px_rgba(210,251,7,0.5),0_0_65px_rgba(210,251,7,0.28),0_0_100px_rgba(210,251,7,0.15)]`), fazendo a luminosidade verde neon se irradiar amplamente sobre a órbita escura interna exatamente como na referência visual original.
30. **Calibração de Espaçamento dos Ícones de Destaque Pré-Footer (`PreFooterCta.tsx`):**
    - **Espaçamento Mais Compacto e Harmônico:** Redução do gap horizontal dos 3 itens de destaque ("Pix 24/7", "Infraestrutura completa" e "API e sandbox") para `gap-x-3.5 sm:gap-x-[18px]` e respiro de `gap-1.5` entre ícone e texto, evitando dispersão excessiva e afastando os elementos do logotipo 3D do canto inferior direito.

---## 3. Instruções de Execução via Docker (100% Isolado)

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
31. **Calibração de Espaçamento do Botão "Voltar para o Topo" no Rodapé (`Footer.tsx`):**
    - **Aproximação Vertical do Botão com o Texto:** Remoção de `justify-between` na coluna "Fale Conosco", aplicando `justify-start` com `mt-7` (gap de 28px), eliminando o vão exagerado de 109px e deixando o botão pílula neon posicionado harmoniosamente logo abaixo dos dados de contato e CNPJ, além de padronizar a tipografia do cabeçalho da coluna para "Fale Conosco" em peso regular.
32. **Ajuste da Linha Divisória do Texto Regulatório no Rodapé (`Footer.tsx`):**
    - **Listra Posicionada Exclusivamente Abaixo do Disclaimer:** Remoção da borda superior acima do parágrafo de conformidade legal e aplicação da listra divisória sutil (`border-b border-white/10`) estritamente abaixo do texto regulatório, além da atualização da razão social e CNPJ de acordo com a captura original do rodapé.

---
33. **Ampliação do Sombreamento Neon da Logo na Hero (`Hero.tsx`):**
    - **Halo Radial Neon Expansivo Centrado no Ícone 3D:** Implementação de elemento de luz ambiente radial concêntrico posicionado diretamente atrás do logotipo volumétrico 3D de acrílico da Versell (`w-[340px] sm:w-[440px] md:w-[520px] lg:w-[560px] h-[340px] sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-full` com `radial-gradient(circle, rgba(210,251,7,0.6)...) blur-3xl`), projetando um halo luminoso verde neon aveludado e contínuo que ilumina o fundo quadriculado com transição suave, fiel à referência visual original.

---
34. **Expansão do Sombreamento Neon no Lado Direito da Logo na Hero (`Hero.tsx`):**
    - **Halo Duplo de 360° com Cobertura Integral da Haste Direita:** Ampliação do raio do gradiente radial concêntrico para até 940px e adição de camada de foco neon a 56% horizontal cobrindo toda a haste vertical direita e a abertura do 'V', banhando o lado direito da grade com luz fluorescente contínua, sem cortes abruptos e em perfeita correspondência com a captura original.

---
35. **Suavização da Iluminação Neon de Fundo da Logo na Hero (`Hero.tsx`):**
    - **Gradiente Aveludado e Calibração de Opacidade:** Redução da opacidade central do halo radial para 42% e da camada da haste direita para 30%, proporcionando uma iluminação suave, harmoniosa e aveludada em 360° ao redor do ícone volumétrico sem estourar as quinas da malha quadriculada, preservando a pureza do fundo `#F6F7F2` e a fidelidade pixel-perfect ao mockup de referência.

---
36. **Calibração Final da Suavização do Sombreamento Neon da Logo na Hero (`Hero.tsx`):**
    - **Camada Única com Curva de Decaimento Fiel:** Halo radial neon unificado de 660px com opacidade aveludada de 36% no núcleo e decaimento contido a 85%, eliminando qualquer sangramento ou saturação amarelada nas quinas da malha quadriculada (`#F6F7F2`), reproduzindo exatamente o contraste elegante e a suavidade da captura original.

---
37. **Posicionamento do Sombreamento Neon à Direita da Logo na Hero (`Hero.tsx`):**
    - **Deslocamento Assimétrico Alinhado com a Haste Direita:** Reajuste da posição horizontal do halo radial para `left-[68%]` (ao invés de centralizado no contêiner da coluna), concentrando o brilho verde neon atrás da haste vertical direita e irradiando suavemente para o espaço à direita da logo, enquanto a lateral esquerda preserva o contraste límpido do fundo `#F6F7F2`, atingindo correspondência rigorosa com o mockup de referência.

---
38. **Alinhamento dos Computadores no Canto Inferior Direito do Card Painel e Monitoramento (`BentoGrid.tsx`):**
    - **Posicionamento Flutuante no Canto Inferior Direito:** Reestruturação da área do mockup dos 3 MacBooks no Card 6 de `BentoGrid.tsx`, substituindo a centralização `mx-auto` por alinhamento à direita e ao fundo (`ml-auto self-end object-right-bottom`), com margens negativas que eliminam o vão branco lateral (margem direita = 0px) e assentam os laptops na borda inferior do card, idêntico à captura original.

---

---
39. **Otimização do Espaçamento dos Cards do Bento Grid no Mobile (`BentoGrid.tsx`):**
    - **Remoção de Vãos Verticais Excessivos em Telas Móveis:** Aplicação de `min-h-0` no breakpoint mobile para todos os cards do Bento Grid, condicionando as alturas mínimas estáticas apenas aos breakpoints `sm:`, `md:` e `lg:` (`min-h-0 md:min-h-[380px]` nos cards de Subcontas, Split e Pix Automático; `min-h-0 sm:min-h-[480px] lg:min-h-[520px]` nos cards de API de Pix e Antifraude). Essa alteração eliminou os ~150-190px de espaço em branco vazio abaixo dos textos no mobile, padronizando a altura dos cards textuais em 250px elegantes e perfeitamente proporcionados, mantendo intactas as proporções simétricas no desktop.


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
