# DOCUMENTAÇÃO TÉCNICA - LANDING PAGE INSTITUCIONAL VERSELL

## 1. Visão Geral da Arquitetura
A Landing Page da Versell foi construída com foco em performance extrema, fidelidade visual de design (*pixel-perfect*), princípios **Mobile First** e isolamento total via Docker.

- **Framework:** Next.js (App Router, React 18/19, TypeScript)
- **Estilização:** Tailwind CSS com tokens customizados Neon Lime (`#D2FB07`)
- **Aceleração Gráfica:** Translações 3D com `will-change: transform` e `translate3d` para evitar quedas de frame em dispositivos móveis
- **Ícones:** Lucide React + SVGs customizados da Versell
- **Tipografia:** Helvetica Neue local com fallbacks geométricos (Plus Jakarta Sans, Inter)
- **Containerização:** Docker Multi-stage (`node:20-alpine`) com targets `dev` e `runner`
- **Status do Container:** `versell-app` (Up / Healthy na porta `3000`)
- **Status da Imagem Standalone:** `versell-prod` compilada com sucesso (22 kB page size / 109 kB First Load JS)

---

## 2. Instruções de Execução via Docker (100% Isolado)

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

## 3. Variáveis de Ambiente
Configurações pré-definidas no ambiente do container:
```env
PORT=3000
NODE_ENV=development
HOSTNAME=0.0.0.0
WATCHPACK_POLLING=true
```

---

## 4. Estrutura do Projeto
```
├── public/
│   ├── assets/
│   │   ├── logo-versell3.svg        # Logo branca (Footer)
│   │   ├── logo-versell4.svg        # Logo preta (Navbar)
│   │   ├── logo_versell.webp        # Ícone 3D em acrílico verde neon
│   │   ├── MacBook-Air-2022-3.webp  # Mockup de notebooks com dashboard
│   │   ├── Pagina-Versell-1-1-scaled.webp # Imagem editorial mobile app
│   │   ├── suporte-dentro.png       # Anel orbital interno (300px)
│   │   ├── suporte-meio.png         # Anel orbital intermediário (445px)
│   │   ├── suporte-fora.png         # Anel orbital externo (568px)
│   │   └── versell.png              # Mockup de referência
│   └── fonts/                       # Arquivos OTF/TTF Helvetica Neue
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout com metadataBase, fontes e metadados
│   │   ├── page.tsx                 # Composição da Landing Page
│   │   └── globals.css              # Estilos globais e keyframes GPU (spin-gpu, float-gpu, marquee-gpu)
│   └── components/
│       ├── Navbar.tsx               # Barra de navegação com drawer mobile, backdrop e atalhos de acessibilidade (Escape)
│       ├── Hero.tsx                 # Seção hero com elemento 3D flutuante e glow radial
│       ├── Ticker.tsx               # Marquee infinito acelerado por hardware com benefícios Pix
│       ├── ValueCards.tsx           # 3 cards "O Pix do jeito que o seu negócio precisa"
│       ├── BentoGrid.tsx            # Grade de produtos e recursos
│       ├── SolutionsGrid.tsx        # Segmentos atendidos (SaaS, E-commerce, etc.)
│       ├── ThreeSteps.tsx           # Fluxo de onboarding em 3 passos
│       ├── DevSection.tsx           # Terminal dark interativo de API (cURL, Node, Python)
│       ├── SecuritySection.tsx      # Infraestrutura Baas Pago e segurança
│       ├── OrbitalSupport.tsx       # Sistema orbital animado de suporte 24/7 (3 anéis concêntricos + touch pause)
│       ├── FaqSection.tsx           # Acordeão interativo com acessibilidade ARIA
│       ├── VersellPayBanner.tsx     # Card de integração cartão/checkout
│       ├── PreFooterCta.tsx         # Chamada final de alto impacto
│       └── Footer.tsx               # Rodapé completo com dados regulatórios
├── Dockerfile                       # Multi-stage build node:20-alpine (deps, dev, builder, runner)
├── docker-compose.yml               # Configuração do serviço Docker
├── .dockerignore                    # Exclusões de contexto Docker
├── .gitignore                       # Ignorados pelo Git
├── README.md                        # Documentação de apresentação do projeto
├── tailwind.config.ts               # Paleta de cores, sombras e animações
├── PROMPT.md                        # Registro original da missão
├── CONTEXTO.md                      # Contexto de negócio e tokens de design
├── PASSOS.md                        # Checklist auditável sequencial
└── DOCUMENTACAO.md                  # Manual técnico do desenvolvedor
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
