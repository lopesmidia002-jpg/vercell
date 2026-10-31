import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_38_text = """

---

### [x] Passo 38: Calibração de Espaçamento dos Ícones de Destaque no CTA Pré-Footer (`PreFooterCta.tsx`)
- [x] **Redução de Espaçamento entre os Ícones e Recursos:**
  - [x] O contêiner de destaques (`"Pix 24/7"`, `"Infraestrutura completa"` e `"API e sandbox"`) teve seu espaçamento horizontal reduzido de `gap-x-5 sm:gap-x-7` (28px) para `gap-x-3.5 sm:gap-x-[18px]` (18px).
  - [x] O respiro interno entre cada ícone SVG neon e o seu rótulo de texto foi ajustado para `gap-1.5`.
  - [x] A redução concentrou o conjunto na largura de 369px, proporcionando maior respiro e eliminando qualquer proximidade indesejada com o logotipo 3D da borda direita (`media_1793453655428_c0209d52.png`).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando espaçamento exato de 18.0px entre os blocos e perfeita centralização no card escuro.
  - [x] Comparativo visual gerado [prefooter_icons_spacing_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/prefooter_icons_spacing_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

passos_updated = passos.rstrip() + "\n" + passos_38_text.strip() + "\n"
with open(passos_path, 'w', encoding='utf-8') as f:
    f.write(passos_updated)
print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_30_text = """
30. **Calibração de Espaçamento dos Ícones de Destaque Pré-Footer (`PreFooterCta.tsx`):**
    - **Espaçamento Mais Compacto e Harmônico:** Redução do gap horizontal dos 3 itens de destaque ("Pix 24/7", "Infraestrutura completa" e "API e sandbox") para `gap-x-3.5 sm:gap-x-[18px]` e respiro de `gap-1.5` entre ícone e texto, evitando dispersão excessiva e afastando os elementos do logotipo 3D do canto inferior direito.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '30. **Calibração de Espaçamento dos Ícones' not in content:
        for marker in ['\n---\n', '\r\n---\r\n']:
            if marker in content:
                parts = content.split(marker, 1)
                new_content = parts[0].rstrip() + "\n" + item_30_text.strip() + "\n\n---" + parts[1]
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {os.path.basename(path)}")
                return

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_33_context = """33. **Espaçamento Calibrado dos Ícones Pré-Footer (`PreFooterCta.tsx`):** Ajuste de `gap-x-[18px]` e `gap-1.5` nos 3 destaques de rodapé (Pix 24/7, Infraestrutura completa, API e sandbox), aproximando os ícones e eliminando proximidade com o visual 3D."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '33. **Espaçamento Calibrado dos Ícones' not in c_content:
    for marker in ['\n---\n', '\r\n---\r\n']:
        if marker in c_content:
            parts = c_content.split(marker, 1)
            new_ctx = parts[0].rstrip() + "\n" + item_33_context.strip() + "\n\n---" + parts[1]
            with open(context_path, 'w', encoding='utf-8') as f:
                f.write(new_ctx)
            print("Updated CONTEXTO.md")
            break

