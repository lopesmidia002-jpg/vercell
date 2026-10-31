import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_36_text = """

---

### [x] Passo 36: Correção de Quebra de Linha do Título da Seção Dev (`DevSection.tsx`)
- [x] **Eliminação de Colisão com a Imagem/Card do Terminal:**
  - [x] Removido o `whitespace-nowrap` do título principal de `DevSection.tsx`, que estava forçando a frase em uma única linha extensa e provocando sobreposição com o terminal card (`media_1793453452730_55e073e0.png`).
  - [x] Restaurada a quebra de linha exata da referência original (`media_1793453518218_89fb4e60.jpg`):
    - **Linha 1:** `"API de Pix "` (preto) + `"simples e"` (verde oliva em negrito)
    - **Linha 2:** `<br />` + `"robusta"` (verde oliva em negrito)
- [x] **Validação Visual e Docker:**
  - [x] Medição CDP confirmando largura de 475px contida perfeitamente na coluna da esquerda sem qualquer sobreposição com o terminal no desktop (`left: 32px`), e renderização responsiva impecável no mobile (`left: 16px`).
  - [x] Comparativo visual gerado [dev_title_overlap_fixed_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/dev_title_overlap_fixed_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

passos_updated = passos.rstrip() + "\n" + passos_36_text.strip() + "\n"
with open(passos_path, 'w', encoding='utf-8') as f:
    f.write(passos_updated)
print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_28_text = """
28. **Correção da Quebra de Linha do Título de Desenvolvedores (`DevSection.tsx`):**
    - **Eliminação de Sobreposição com o Terminal:** Removida a imposição de linha única (`whitespace-nowrap`) no título de `DevSection.tsx`, restaurando a divisão idêntica ao design original com `<br />`: `"API de Pix simples e"` na primeira linha e `"robusta"` isolada na segunda linha, eliminando qualquer colisão ou corte de texto sob a janela do terminal no desktop.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '28. **Correção da Quebra de Linha do Título de Desenvolvedores' not in content:
        for marker in ['\n---\n', '\r\n---\r\n']:
            if marker in content:
                parts = content.split(marker, 1)
                new_content = parts[0].rstrip() + "\n" + item_28_text.strip() + "\n\n---" + parts[1]
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {os.path.basename(path)}")
                return

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_31_context = """31. **Correção da Quebra de Linha do Título Dev (`DevSection.tsx`):** Restauração da quebra original em 2 linhas (`"API de Pix simples e"` + `<br />` + `"robusta"`), removendo o corte sob o card do terminal e mantendo alinhamento visual exato com a referência do design."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '31. **Correção da Quebra de Linha do Título Dev' not in c_content:
    for marker in ['\n---\n', '\r\n---\r\n']:
        if marker in c_content:
            parts = c_content.split(marker, 1)
            new_ctx = parts[0].rstrip() + "\n" + item_31_context.strip() + "\n\n---" + parts[1]
            with open(context_path, 'w', encoding='utf-8') as f:
                f.write(new_ctx)
            print("Updated CONTEXTO.md")
            break

