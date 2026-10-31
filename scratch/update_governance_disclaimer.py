import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_40_text = """

---

### [x] Passo 40: Ajuste da Linha Divisória do Texto Regulatório no Rodapé (`Footer.tsx`)
- [x] **Remoção da Borda Superior e Aplicação da Linha Inferior:**
  - [x] Removida a borda inferior do grid de links do rodapé (`border-b border-white/10` em line 17), que gerava uma listra divisória indesejada acima do texto regulatório (`media_1793453853905_525bed21.png`).
  - [x] Mantida a linha horizontal divisória exclusivamente abaixo do texto regulatório (`border-b border-white/10` em line 218), em estrita conformidade com o design original (`media_1793453866358_7fa30f21.png`).
  - [x] Atualizada a redação do disclaimer institucional para correspondência exata: `"A Versell Technology Ltda (CNPJ 38.322.428/0001-23)... autorizada pelo Banco Central do Brasil... Bass Pago Instituição de Pagamento (CNPJ 37.293.930/0001-90)"`.
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando ausência de linha acima do parágrafo regulatório e presença da borda única abaixo dele.
  - [x] Comparativo visual gerado [footer_disclaimer_border_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/footer_disclaimer_border_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

passos_updated = passos.rstrip() + "\n" + passos_40_text.strip() + "\n"
with open(passos_path, 'w', encoding='utf-8') as f:
    f.write(passos_updated)
print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_32_text = """
32. **Ajuste da Linha Divisória do Texto Regulatório no Rodapé (`Footer.tsx`):**
    - **Listra Posicionada Exclusivamente Abaixo do Disclaimer:** Remoção da borda superior acima do parágrafo de conformidade legal e aplicação da listra divisória sutil (`border-b border-white/10`) estritamente abaixo do texto regulatório, além da atualização da razão social e CNPJ de acordo com a captura original do rodapé.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '32. **Ajuste da Linha Divisória' not in content:
        for marker in ['\n---\n', '\r\n---\r\n']:
            if marker in content:
                parts = content.split(marker, 1)
                new_content = parts[0].rstrip() + "\n" + item_32_text.strip() + "\n\n---" + parts[1]
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {os.path.basename(path)}")
                return

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_35_context = """35. **Listra Divisória do Rodapé (`Footer.tsx`):** Eliminação da linha branca superior e manutenção da listra divisória unicamente abaixo do texto regulatório institucional, com atualização de razão social e CNPJs institucionais idênticos à referência."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '35. **Listra Divisória do Rodapé' not in c_content:
    for marker in ['\n---\n', '\r\n---\r\n']:
        if marker in c_content:
            parts = c_content.split(marker, 1)
            new_ctx = parts[0].rstrip() + "\n" + item_35_context.strip() + "\n\n---" + parts[1]
            with open(context_path, 'w', encoding='utf-8') as f:
                f.write(new_ctx)
            print("Updated CONTEXTO.md")
            break

