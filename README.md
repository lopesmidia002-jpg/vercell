# Versell - Landing Page Institucional Full-Stack

> **"Quem vende no Pix, vende com Versell."**  
> Reprodução cirúrgica (*pixel-perfect*), moderna e de alta performance da Landing Page institucional da fintech **Versell**, construída com princípios estritos de **Mobile First** e 100% conteinerizada em Docker.

---

## ⚡ Tecnologias & Stack
- **Framework:** Next.js (App Router, React 18/19, TypeScript)
- **Design System & Estilização:** Tailwind CSS com tokens customizados Neon Lime (`#D2FB07`)
- **Ícones:** Lucide React + SVGs oficiais da Versell
- **Tipografia:** Helvetica Neue (local) com fallbacks geométricos (Plus Jakarta Sans, Inter)
- **Infraestrutura:** Docker Multi-stage (`node:20-alpine`) & Docker Compose

---

## 🚀 Como Executar (100% no Docker)

### Pré-requisitos
- Docker e Docker Compose instalados no sistema.

### 1. Iniciar a aplicação
```bash
docker compose up --build -d
```

### 2. Acessar no navegador
Abra [http://localhost:3000](http://localhost:3000) no seu navegador ou dispositivo móvel conectado à rede.

### 3. Visualizar logs
```bash
docker compose logs -f versell-app
```

### 4. Verificar status de saúde
```bash
docker compose ps
```

### 5. Encerrar os containers
```bash
docker compose down
```

---

## 📱 Filosofia Mobile First
- **Touch Target:** Todos os botões, links e acordeões respeitam a área tátil mínima de 44x44px.
- **Ergonomia e Thumb Zone:** Navegação por drawer lateral adaptada para operação com uma só mão.
- **Responsividade Sem Quebras:** Zero overflow horizontal garantido de telas pequenas (320px) até monitores 4K.
- **Animações Orbitais Otimizadas:** Efeito orbital concêntrico 24/7 com pausa ao toque ou hover.

---

## 🎨 Design Tokens & Cores
- **Lime Primário (Assinatura):** `#D2FB07` / `#C6F500`
- **Fundo Principal Claro:** `#FAFAFA` a `#FFFFFF`
- **Fundo Dark Sections & Rodapé:** `#0A0A0A` a `#0C0D0E`
- **Cards & Superfícies:** `#FFFFFF` com sombras `0 8px 30px rgba(0,0,0,0.04)` e cantos arredondados de 24px (`rounded-3xl`).

---

## 📂 Arquivos de Governança
Este repositório mantém 4 documentos centrais de sincronização e auditoria contínua:
1. `PROMPT.md`: Registro íntegro da especificação original e requisitos técnicos.
2. `CONTEXTO.md`: Visão da marca, modelo de negócio BaaS (Baas Pago), regras e design tokens.
3. `PASSOS.md`: Checklist sequencial e auditável de cada etapa executada.
4. `DOCUMENTACAO.md`: Guia técnico de arquitetura, portas, variáveis e catálogo de componentes.

---

## 🏛️ Conformidade Regulatória
A Versell Tecnologia LTDA (CNPJ 56.522.426/0001-23) é uma empresa de tecnologia. As contas de pagamento, transações Pix e a liquidação de recursos são operadas pela **Baas Pago Instituição de Pagamento** (CNPJ 37.387.828/0001-08) em estrita conformidade com o Banco Central do Brasil.

