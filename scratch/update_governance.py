import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

# Find the end of Passo 34 first occurrence
p34_end = "  - [x] Comparativo visual gerado [threesteps_unbold_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/threesteps_unbold_comparison.png).\n  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK."

passos_35_text = """

---

### [x] Passo 35: Remoção de Negrito no Botão CTA "Abrir minha conta" (`CtaButton.tsx`, `Footer.tsx`)
- [x] **Remoção de Negrito nos Botões Principais de Ação:**
  - [x] O componente base `CtaButton.tsx` foi atualizado de `font-normal` para `font-light text-black` (peso 300), aplicando a fonte `HelveticaNeueLight.otf`.
  - [x] O texto `"Abrir minha conta"` em todas as instâncias (`Hero`, `ThreeSteps`, `PreFooterCta`) e `"Falar com especialista"` em `Footer.tsx` agora são renderizados sem qualquer aspecto de negrito, idênticos à captura do usuário (`media_1793453396470_cfbbb98e.png`).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando `fontWeight: '300'` para os 3 botões "Abrir minha conta".
  - [x] Comparativo visual gerado [abrir_minha_conta_unbold_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/abrir_minha_conta_unbold_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

if p34_end in passos:
    idx = passos.index(p34_end) + len(p34_end)
    new_passos = passos[:idx].strip() + "\n" + passos_35_text.strip() + "\n"
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(new_passos)
    print("Updated PASSOS.md")
else:
    # try CRLF
    p34_end_crlf = p34_end.replace('\n', '\r\n')
    if p34_end_crlf in passos:
        idx = passos.index(p34_end_crlf) + len(p34_end_crlf)
        new_passos = passos[:idx].strip() + "\n\n" + passos_35_text.strip() + "\n"
        with open(passos_path, 'w', encoding='utf-8') as f:
            f.write(new_passos)
        print("Updated PASSOS.md (CRLF)")
    else:
        print("Could not find p34_end in PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_27_text = """
27. **Remoção de Negrito no Botão CTA "Abrir minha conta" (`CtaButton.tsx`, `Footer.tsx`):**
    - **Tipografia Leve nos Botões de Ação:** O componente reutilizável `CtaButton.tsx` teve sua tipografia alterada para `font-light text-black` (peso 300), utilizando a fonte leve `HelveticaNeueLight.otf`. Isso converte as ações principais ("Abrir minha conta" no Hero, ThreeSteps e PreFooterCta, além de "Falar com especialista" no Footer) para peso leve e elegante sem negrito.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    target = '26. **Remoção de Negrito nos Títulos dos 3 Passos (`ThreeSteps.tsx`):**'
    if target in content and '27. **Remoção de Negrito no Botão CTA' not in content:
        # find the end of item 26
        # item 26 ends before "\n---\n" or "\n## 3."
        for marker in ['\n---\n', '\r\n---\r\n']:
            if marker in content:
                parts = content.split(marker, 1)
                new_content = parts[0].rstrip() + "\n" + item_27_text.strip() + "\n\n---" + parts[1]
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {os.path.basename(path)}")
                return
    print(f"Skipped {os.path.basename(path)}")

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_30_context = """30. **Remoção de Negrito no Botão CTA "Abrir minha conta" (`CtaButton.tsx`, `Footer.tsx`):** Padronização do componente `CtaButton` com `font-light text-black` (peso 300) com `HelveticaNeueLight.otf`, aplicando tipografia leve e eliminando qualquer aspecto pesado no botão principal da landing page e no rodapé."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

target_ctx = '29. **Remoção de Negrito nos Títulos dos Passos (`ThreeSteps.tsx`):**'
if target_ctx in c_content and '30. **Remoção de Negrito no Botão CTA' not in c_content:
    for marker in ['\n---\n', '\r\n---\r\n']:
        if marker in c_content:
            parts = c_content.split(marker, 1)
            new_ctx = parts[0].rstrip() + "\n" + item_30_context.strip() + "\n\n---" + parts[1]
            with open(context_path, 'w', encoding='utf-8') as f:
                f.write(new_ctx)
            print("Updated CONTEXTO.md")
            break

