import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_46_text = """

---

### [x] Passo 46: Alinhamento dos Computadores no Canto Inferior Direito do Card Painel e Monitoramento (`BentoGrid.tsx`)
- [x] **Posicionamento e Sangria no Canto Inferior Direito:**
  - [x] Substituída a centralização anterior (`mx-auto` com vãos brancos de 89px) por alinhamento à direita (`ml-auto self-end`) com sangria negativa nas bordas (`-mr-8 sm:-mr-10 lg:-mr-12 -mb-11 sm:-mb-13 lg:-mb-16`).
  - [x] Dimensões do contêiner do mockup ampliadas para `w-[115%] sm:w-[112%] lg:w-[860px]` e altura `lg:h-[320px]`, configurado com `object-contain object-right-bottom`.
  - [x] O MacBook direito agora encosta perfeitamente na borda direita do card (margem direita reduzida de 104px para 0px, sendo recortado suavemente pelo `overflow-hidden`), a base dos computadores assenta diretamente no rodapé do card (margem inferior = 0px), e o extremo esquerdo do conjunto de laptops alinha-se verticalmente com o início do texto do título ("Painel e"), reproduzindo fielmente a composição do mockup original (`media_1793474433276_c81e37fb.jpg`).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria numérica CDP confirmando margem direita de 0px e margem inferior de 0px no contêiner do card.
  - [x] Comparativo visual gerado [card6_laptops_bottom_right_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/card6_laptops_bottom_right_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

if 'Passo 46: Alinhamento dos Computadores no Canto Inferior Direito' not in passos:
    passos_updated = passos.rstrip() + "\n" + passos_46_text.strip() + "\n"
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_updated)
    print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_38_text = """
38. **Alinhamento dos Computadores no Canto Inferior Direito do Card Painel e Monitoramento (`BentoGrid.tsx`):**
    - **Posicionamento Flutuante no Canto Inferior Direito:** Reestruturação da área do mockup dos 3 MacBooks no Card 6 de `BentoGrid.tsx`, substituindo a centralização `mx-auto` por alinhamento à direita e ao fundo (`ml-auto self-end object-right-bottom`), com margens negativas que eliminam o vão branco lateral (margem direita = 0px) e assentam os laptops na borda inferior do card, idêntico à captura original.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '38. **Alinhamento dos Computadores no Canto Inferior Direito' not in content:
        marker = '## 4. Variáveis de Ambiente'
        if marker in content:
            parts = content.split(marker, 1)
            new_content = parts[0].rstrip() + "\n" + item_38_text.strip() + "\n\n---\n\n" + marker + parts[1]
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(path)}")

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_41_context = """41. **Posicionamento dos Computadores no Canto Inferior Direito do Card Painel e Monitoramento (`BentoGrid.tsx`):** Deslocamento da imagem dos 3 MacBooks para o canto inferior direito com sangria zerada na lateral direita e base do card (`ml-auto self-end object-right-bottom`), eliminando vãos brancos e alinhando a composição com o mockup original."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '41. **Posicionamento dos Computadores no Canto Inferior Direito' not in c_content:
    marker = '## 6. Governança e Repositório'
    if marker in c_content:
        parts = c_content.split(marker, 1)
        new_ctx = parts[0].rstrip() + "\n" + item_41_context.strip() + "\n\n---\n\n" + marker + parts[1]
        with open(context_path, 'w', encoding='utf-8') as f:
            f.write(new_ctx)
        print("Updated CONTEXTO.md")

