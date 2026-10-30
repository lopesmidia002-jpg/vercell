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

## 2. Ajustes Pixel-Perfect (Hero, Bento Grid e Carrossel)
1. **Hero Section:**
   - Adicionada tela com quadrados em efeito leve de fundo (`bg-[size:48px_48px]`), estendendo-se por toda a seção e sob a luz ambiente neon do ícone 3D.
   - Badge superior em pílula aninhada: contorno externo branco com pílula verde suave interna `(• Versell)` e subtítulo `Conta digital + API de Pix`.
   - Ícones de diferenciais inline sem caixas circulares adicionais: `Zap` (Pix 24/7), `Shield` (Infraestrutura completa) e `Code2` (API e sandbox).
2. **Carrossel / Ticker:**
   - Degradê bilateral suave nos cantos (`w-24 sm:w-40 md:w-60 z-20`) para entrada e saída contínua de elementos.
   - Fundo com padrão sutil de grade quadriculada.
   - Tags brancas com squircle neon `#D2FB07`.
3. **Bento Grid:**
   - Layout de 3 linhas com enquadramento proporcional de fotos e mockups, máscara de degradê na modelo e luz fluorescente na API Pix.
4. **Header / Navbar:**
   - `sticky top-0` com backdrop-blur para estabilidade visual perfeita.

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
