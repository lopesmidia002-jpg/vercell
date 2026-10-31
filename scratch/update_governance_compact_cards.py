import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc_alt_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
ctx_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

passos_addition = """
---

### [x] Passo 49: Calibração Final do Espaçamento dos Cards no Mobile (`BentoGrid.tsx`)
- [x] **Redução Cirúrgica do Espaço em Branco nos Cards Textuais:**
  - [x] Removida a classe `sm:min-h-[480px]` do Card 2 (`API de Pix`) e do Card 7 (`Antifraude inteligente`), restringindo a altura mínima estática exclusivamente ao breakpoint desktop `lg:min-h-[520px]`.
  - [x] Calibrado o padding interno no mobile de `p-8` (32px) para `p-6` (24px) em todos os cards textuais (`p-6 sm:p-8 lg:p-12`), proporcionando maior área de leitura para o texto e eliminando o vazio inferior.
  - [x] Compactados os espaçamentos internos no mobile: margem inferior dos ícones reduzida de `mb-6` (24px) para `mb-4 sm:mb-6` (16px), e margem inferior dos títulos de `mb-3` (12px) para `mb-2 sm:mb-3` (8px).
  - [x] A altura do Card 2 no mobile foi reduzida para 200px (com espaço restante abaixo do texto de apenas ~25px), e os Cards 3, 4, 5 e 7 para 222px, atingindo uma diagramação compacta, equilibrada e sem vãos vazios, idêntica ao design esperado.
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando redução de altura para 200px no Card 2 e 222px nos demais cards textuais em viewport mobile (390x844).
  - [x] Comparativo visual gerado [bento_card_mobile_spacing_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/bento_card_mobile_spacing_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

doc_item = """
---
41. **Calibração Final do Espaçamento dos Cards no Mobile (`BentoGrid.tsx`):**
    - **Cards Compactos com Proporções Orgânicas:** Remoção do `sm:min-h-[480px]` dos cards de coluna única antes do desktop, reajuste do padding móvel para `p-6 sm:p-8 lg:p-12` e encurtamento das margens dos ícones (`mb-4 sm:mb-6`) e títulos (`mb-2 sm:mb-3`). Com isso, a altura do card de API de Pix no mobile passou para 200px (vão inferior reduzido para 25px) e dos demais cards textuais para 222px, extinguindo o excesso de espaço em branco no mobile e preservando 100% da integridade da grade simétrica no desktop.
"""

ctx_item = """
---
44. **Calibração Final do Espaçamento dos Cards no Mobile (`BentoGrid.tsx`):** Otimização do espaçamento vertical dos cards no mobile com padding `p-6 sm:p-8`, margens `mb-4` em ícones e `mb-2` em títulos, e eliminação de `sm:min-h-[480px]` em cards empilhados. A altura dos cards no mobile foi padronizada em 200px-222px com vão inferior de apenas 25px, eliminando grandes áreas em branco.
"""

# Update PASSOS.md
with open(passos_path, 'r', encoding='utf-8') as f:
    passos_content = f.read()
if "Passo 49" not in passos_content:
    passos_content += passos_addition
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_content)
    print("Updated PASSOS.md")

# Update DOCUMENTACAO.md and DOCUMENTAÇÃO.md
for p in [doc_path, doc_alt_path]:
    with open(p, 'r', encoding='utf-8') as f:
        doc_content = f.read()
    if "Calibração Final do Espaçamento dos Cards no Mobile" not in doc_content:
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
if "Calibração Final do Espaçamento dos Cards no Mobile" not in ctx_content:
    if "## 6. Governança e Repositório" in ctx_content:
        parts = ctx_content.split("## 6. Governança e Repositório")
        ctx_content = parts[0].rstrip() + "\n" + ctx_item + "\n\n## 6. Governança e Repositório" + parts[1]
    else:
        ctx_content += "\n" + ctx_item
    with open(ctx_path, 'w', encoding='utf-8') as f:
        f.write(ctx_content)
    print("Updated CONTEXTO.md")

