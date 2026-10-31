import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_39_text = """

---

### [x] Passo 39: Calibração de Espaçamento do Botão "Voltar para o Topo" com o Texto no Rodapé (`Footer.tsx`)
- [x] **Redução de Espaçamento Vertical entre CNPJ e Badge:**
  - [x] Substituída a classe `justify-between` da coluna "Fale Conosco" por `justify-start`, eliminando o distanciamento artificial de 109px que empurrava o botão até a borda inferior do grid (`media_1793453729225_3061870f.png`).
  - [x] O botão pílula `"Voltar para o Topo"` agora é posicionado diretamente abaixo do CNPJ com espaçamento exato e compacto de 28px (`mt-7`), idêntico à referência original (`media_1793453741505_9964db23.png`).
  - [x] O título da coluna foi ajustado para `"Fale Conosco"` em caixa alta/baixa com `font-normal text-base text-white mb-4`, alinhando-se com a referência.
- [x] **Validação Visual e Docker:**
  - [x] Medição CDP confirmando redução do gap vertical de 109px para 28px entre a linha do CNPJ e o topo do botão.
  - [x] Comparativo visual gerado [footer_badge_spacing_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/footer_badge_spacing_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

passos_updated = passos.rstrip() + "\n" + passos_39_text.strip() + "\n"
with open(passos_path, 'w', encoding='utf-8') as f:
    f.write(passos_updated)
print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_31_text = """
31. **Calibração de Espaçamento do Botão "Voltar para o Topo" no Rodapé (`Footer.tsx`):**
    - **Aproximação Vertical do Botão com o Texto:** Remoção de `justify-between` na coluna "Fale Conosco", aplicando `justify-start` com `mt-7` (gap de 28px), eliminando o vão exagerado de 109px e deixando o botão pílula neon posicionado harmoniosamente logo abaixo dos dados de contato e CNPJ, além de padronizar a tipografia do cabeçalho da coluna para "Fale Conosco" em peso regular.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '31. **Calibração de Espaçamento do Botão' not in content:
        for marker in ['\n---\n', '\r\n---\r\n']:
            if marker in content:
                parts = content.split(marker, 1)
                new_content = parts[0].rstrip() + "\n" + item_31_text.strip() + "\n\n---" + parts[1]
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {os.path.basename(path)}")
                return

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_34_context = """34. **Espaçamento Calibrado do Botão Topo (`Footer.tsx`):** Troca de `justify-between` por `justify-start` com `mt-7` (gap de 28px entre CNPJ e botão), aproximando o botão "Voltar para o Topo" do bloco de texto e ajustando o título para "Fale Conosco" sem caixa alta integral."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '34. **Espaçamento Calibrado do Botão Topo' not in c_content:
    for marker in ['\n---\n', '\r\n---\r\n']:
        if marker in c_content:
            parts = c_content.split(marker, 1)
            new_ctx = parts[0].rstrip() + "\n" + item_34_context.strip() + "\n\n---" + parts[1]
            with open(context_path, 'w', encoding='utf-8') as f:
                f.write(new_ctx)
            print("Updated CONTEXTO.md")
            break

