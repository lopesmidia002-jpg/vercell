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

## 2. Ajustes Pixel-Perfect (Hero, Badges, Bento Grid, Carrossel, Banners de Valor e Navbar)
1. **Componente de Tag Badge (`TagBadge.tsx`):**
   - Reprodução cirúrgica da pílula original: contorno externo branco com borda suave, pílula interna pastel `#EEF3DB` contendo o ponto indicador neon duplo (`#D2FB05` e núcleo `#627D08`) e texto da marca `Versell` em `#5B7500`.
   - Texto de identificação de seção sem a barra divisória artificial `|`, idêntico à captura de tela da referência.
2. **Hero Section:**
   - Adicionada tela com quadrados em efeito leve de fundo (`bg-[size:48px_48px]`), estendendo-se por toda a seção e sob a luz ambiente neon do ícone 3D.
   - Ícones de diferenciais inline sem caixas circulares adicionais: `Zap` (Pix 24/7), `Shield` (Infraestrutura completa) e `Code2` (API e sandbox).
3. **Carrossel / Ticker:**
   - Degradê bilateral suave nos cantos (`w-24 sm:w-40 md:w-60 z-20`) para entrada e saída contínua de elementos.
   - Fundo com padrão sutil de grade quadriculada.
   - Tags brancas com squircle neon `#D2FB07`.
   - **Ícones 100% alinhados à referência original:**
     - `Pix na hora, 24/7`: `Zap`
     - `API de Pix`: `Code2`
     - `QR Code e Copia e Cola`: `CreditCard`
     - `Subcontas`: `Users` (duas silhuetas com cabeças arredondadas)
     - `Split automático`: `Split` (bifurcação em Y com setas divergentes sem nós circulares)
     - `Pix Automático`: `Calendar` (calendário com espirais superiores)
     - `Webhooks em tempo real`: `Webhook` (triskelion de 3 pás oficial)
     - `mTLS + OAuth2`: `Key` (chave inclinada a 45º com cabeça circular inferior e dentes)
     - `Antifraude`: `ShieldCheck` (escudo com tique de verificação)
     - `Suporte`: `Headphones` (fone de ouvido com haste)
4. **Bento Grid (`BentoGrid.tsx`):**
   - Layout de 3 linhas com enquadramento proporcional de fotos e mockups, máscara de degradê na modelo e luz fluorescente na API Pix.
   - **Ícones 100% alinhados à referência original:**
     - Card 1 (Conta digital Versell): `Wallet` com traço fino e proporção equilibrada.
     - Card 2 (API de Pix): `Code` (colchetes `< >` puros sem a barra diagonal `/`).
     - Card 3 (Subcontas): `Users` (duas silhuetas clássicas) e título `"Subcontas"` com destaque na cor verde oliva `#5B7500`.
     - Card 4 (Split automático): `Split` (duas setas divergentes sem os nós circulares do GitFork).
     - Card 5 (Pix Automático): `Calendar` com abas superiores.
     - Card 6 (Painel e monitoramento): `Eye`.
     - Card 7 (Antifraude inteligente): `ShieldCheck`.
5. **Header / Navbar (`Navbar.tsx`):**
   - `sticky top-0` com backdrop-blur para estabilidade visual perfeita.
   - **Links bare minimalistas:** Removido o invólucro pill artificial em torno dos links de navegação; os links agora flutuam diretamente sobre o fundo da barra, com espaçamento equilibrado (`space-x-6 lg:space-x-8`).
   - **Link Pix em destaque:** Link `"Pix"` destacado em verde oliva da marca (`#5B7500`), exatamente como na referência original.
   - **Botão Entrar:** Estilizado como botão pill vazado com borda sutil (`rounded-full border border-black/15 px-5 py-2`), abandonando o estilo de texto puro sem contorno.
   - **Botão CTA:** `"Falar com especialista"` em verde neon fluorescente `#D2FB07` com tipografia seminegrito.
6. **Banners / Cards de Valor (`ValueCards.tsx`):**
   - **Badges padronizados:** Card 1 com badge pastel `"Receba"` (`#EEF3DB`), Card 2 com badge neon fluorescente `"Distribua"` (`#D2FB07`) em vez do antigo "DIVIDA", e Card 3 com badge pastel `"Movimente"` (`#EEF3DB`).
   - **Conectores em chevron:** Inseridos chevrons (`ChevronRight`) neon `#D2FB07` alinhados entre o Card 1 e Card 2, e entre o Card 2 e Card 3.
   - **Card central em destaque:** Card 2 estilizado com gradiente vertical suave (`from-[#F2FCD0]/90 via-[#F9FCE9]/50 to-white`), borda sutil em tom limão `#D2FB07]/50` e aura radial de glow difuso ao fundo.
   - **Ícones de verificação:** Substituição dos antigos checkmarks por `CircleCheck` (`CheckCircle2`) com traço fino em tom moss green `#5B7500`.
   - **Eliminação de divisória:** Removida a linha divisória artificial `border-t` acima dos bullets, garantindo espaçamento orgânico e fluido como no design original.

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
| `/assets/MacBook-Air-2022-3.webp` | `200 OK` | Mockup do painel de monitoramento Finance |
| `/assets/Pagina-Versell-1-1-scaled.webp` | `200 OK` | Imagem da modelo com smartphone |
| `/assets/suporte-dentro.png` | `200 OK` | Anel orbital interno de suporte 24h |
| `/assets/suporte-meio.png` | `200 OK` | Anel orbital intermediário |
| `/assets/suporte-fora.png` | `200 OK` | Anel orbital externo |
| `/assets/versell.png` | `200 OK` | Mockup completo de referência para auditoria |
| `/api/health` | `200 OK` | Endpoint de verificação de integridade Docker |
