import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc_alt_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
ctx_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

passos_addition = """
---

### [x] Passo 47: Otimização do Espaçamento dos Cards do Bento Grid no Mobile (`BentoGrid.tsx`)
- [x] **Redução de Espaço em Branco Vazio nos Cards de Conteúdo Textual:**
  - [x] Ajustadas as alturas mínimas dos cards no mobile para `min-h-0`, restringindo as alturas mínimas generosas exclusivamente aos breakpoints maiores (`sm:min-h-...` ou `md:min-h-[380px]` e `lg:min-h-[520px]`).
  - [x] Card 2 (`API de Pix`): `min-h-0 sm:min-h-[480px] lg:min-h-[520px]`.
  - [x] Cards 3, 4 e 5 (`Subcontas`, `Split automático`, `Pix Automático`): substituído `min-h-[350px] sm:min-h-[380px]` por `min-h-0 md:min-h-[380px]`.
  - [x] Card 6 (`Painel e monitoramento`): `min-h-0 sm:min-h-[480px] lg:min-h-[520px]`.
  - [x] Card 7 (`Antifraude inteligente`): `min-h-0 sm:min-h-[480px] lg:min-h-[520px]`.
  - [x] No mobile, a altura de cada card textual foi reduzida de ~380-440px para ~250px, eliminando mais de 150-190px de espaço vazio desnecessário por card, mantendo o espaçamento interno limpo, equilibrado e proporcional ao conteúdo textual, conforme a solicitação do usuário.
  - [x] No desktop e tablet, a integridade da grade simétrica e as proporções verticais generosas com alinhamento uniforme permanecem 100% preservadas.
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP em viewport mobile (390x844) confirmando altura padronizada de 250px nos cards de texto (Cards 2, 3, 4, 5 e 7) e enquadramento limpo.
  - [x] Comparativo visual gerado [bento_mobile_cards_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/bento_mobile_cards_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

doc_item = """
---
39. **Otimização do Espaçamento dos Cards do Bento Grid no Mobile (`BentoGrid.tsx`):**
    - **Remoção de Vãos Verticais Excessivos em Telas Móveis:** Aplicação de `min-h-0` no breakpoint mobile para todos os cards do Bento Grid, condicionando as alturas mínimas estáticas apenas aos breakpoints `sm:`, `md:` e `lg:` (`min-h-0 md:min-h-[380px]` nos cards de Subcontas, Split e Pix Automático; `min-h-0 sm:min-h-[480px] lg:min-h-[520px]` nos cards de API de Pix e Antifraude). Essa alteração eliminou os ~150-190px de espaço em branco vazio abaixo dos textos no mobile, padronizando a altura dos cards textuais em 250px elegantes e perfeitamente proporcionados, mantendo intactas as proporções simétricas no desktop.
"""

ctx_item = """
---
42. **Redução de Espaços em Branco dos Cards do Bento Grid no Mobile (`BentoGrid.tsx`):** Eliminação das alturas mínimas estáticas (`min-h-[350px]`, `min-h-[440px]`) no mobile, substituindo-as por `min-h-0` em conjunto com classes responsivas (`md:min-h-[380px]` e `lg:min-h-[520px]`). No mobile, os cards textuais (API de Pix, Subcontas, Split, Pix Automático e Antifraude) ajustam-se organicamente a ~250px de altura com espaçamento interno equilibrado, extinguindo grandes vãos vazios e preservando o alinhamento de colunas no desktop.
"""

# Update PASSOS.md
with open(passos_path, 'r', encoding='utf-8') as f:
    passos_content = f.read()
if "Passo 47" not in passos_content:
    passos_content += passos_addition
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_content)
    print("Updated PASSOS.md")

# Update DOCUMENTACAO.md and DOCUMENTAÇÃO.md
for p in [doc_path, doc_alt_path]:
    with open(p, 'r', encoding='utf-8') as f:
        doc_content = f.read()
    if "Otimização do Espaçamento dos Cards do Bento Grid no Mobile" not in doc_content:
        # insert before '## 4. Variáveis de Ambiente'
        if "## 4. Variáveis de Ambiente" in doc_content:
            parts = doc_content.split("## 4. Variáveis de Ambiente")
            doc_content = parts[0].rstrip() + "\n" + doc_item + "\n\n## 4. Variáveis de Ambiente" + parts[1]
        else:
            doc_content += "\n" + doc_item
        with open(p, 'w', encoding='utf-8') as f:
            f.write(doc_content)
        print(f"Updated {p}")

# Update CONTEXTO.md
with open(ctx_path, 'r', encoding='utf-8') as f:
    ctx_content = f.read()
if "Redução de Espaços em Branco dos Cards do Bento Grid no Mobile" not in ctx_content:
    if "## 6. Governança e Repositório" in ctx_content:
        parts = ctx_content.split("## 6. Governança e Repositório")
        ctx_content = parts[0].rstrip() + "\n" + ctx_item + "\n\n## 6. Governança e Repositório" + parts[1]
    else:
        ctx_content += "\n" + ctx_item
    with open(ctx_path, 'w', encoding='utf-8') as f:
        f.write(ctx_content)
    print("Updated CONTEXTO.md")

