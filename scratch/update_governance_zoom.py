import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc_alt_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
ctx_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

passos_addition = """
---

### [x] Passo 48: Redução do Zoom dos Computadores no Card Painel e Monitoramento (`BentoGrid.tsx`)
- [x] **Redução de Escala e Alinhamento Pixel-Perfect com o Original:**
  - [x] Redimensionado o contêiner do mockup dos MacBooks (`MacBook-Air-2022-3.webp`) de `lg:w-[860px]` / `lg:h-[320px]` para `lg:w-[670px]` / `lg:h-[270px]`, eliminando a ampliação excessiva ("zoom") que ocupava 94% da largura do card.
  - [x] Ajustadas as margens de sangria no canto inferior direito para `-mr-6 sm:-mr-14 lg:-mr-[75px]` e `-mb-8 sm:-mb-16 lg:-mb-[95px]`, assentando e rebaixando o teclado e trackpad do laptop central abaixo do rodapé do card, exatamente como na captura original (`media_1793475387104_d83a993c.png`).
  - [x] A lateral esquerda do card agora mantém um respiro limpo e elegante sob o texto explicativo, enquanto a lateral direita apresenta o recorte suave do laptop direito na borda arredondada, idêntico à referência visual original.
  - [x] Responsividade preservada para mobile (`w-full h-52 -mr-6 -mb-8`) e tablet (`sm:w-[540px] sm:h-64 sm:-mr-14 sm:-mb-16`).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando redução da proporção dos laptops na largura do card de 94% para ~68%, reproduzindo fielmente as proporções e o zoom do mockup original.
  - [x] Comparativo visual gerado [card6_laptop_zoom_reduced_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/card6_laptop_zoom_reduced_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

doc_item = """
---
40. **Redução do Zoom e Reajuste dos Computadores no Card Painel e Monitoramento (`BentoGrid.tsx`):**
    - **Escala Proporcional e Sangria Rebaixada:** Redução das dimensões do contêiner do mockup de laptops de `lg:w-[860px]` / `lg:h-[320px]` para `lg:w-[670px]` / `lg:h-[270px]` com sangria `lg:-mr-[75px]` e `lg:-mb-[95px]`. Essa calibração reduziu o zoom excessivo dos computadores, mantendo uma área limpa de ~32% na margem esquerda sob o texto descritivo e rebaixando o teclado/trackpad do laptop central para fora do card, atingindo correspondência idêntica com o mockup de referência original.
"""

ctx_item = """
---
43. **Redução do Zoom dos Computadores no Card Painel e Monitoramento (`BentoGrid.tsx`):** Redução da escala do mockup de laptops para `w-full sm:w-[540px] lg:w-[670px]` e altura `h-52 sm:h-64 lg:h-[270px]` com sangria calculada (`-mr-6 sm:-mr-14 lg:-mr-[75px]` e `-mb-8 sm:-mb-16 lg:-mb-[95px]`), eliminando o zoom exagerado e posicionando os laptops harmoniosamente no canto inferior direito com corte suave nas bordas, idêntico à captura original.
"""

# Update PASSOS.md
with open(passos_path, 'r', encoding='utf-8') as f:
    passos_content = f.read()
if "Passo 48" not in passos_content:
    passos_content += passos_addition
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_content)
    print("Updated PASSOS.md")

# Update DOCUMENTACAO.md and DOCUMENTAÇÃO.md
for p in [doc_path, doc_alt_path]:
    with open(p, 'r', encoding='utf-8') as f:
        doc_content = f.read()
    if "Redução do Zoom e Reajuste dos Computadores" not in doc_content:
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
if "Redução do Zoom dos Computadores no Card Painel e Monitoramento" not in ctx_content:
    if "## 6. Governança e Repositório" in ctx_content:
        parts = ctx_content.split("## 6. Governança e Repositório")
        ctx_content = parts[0].rstrip() + "\n" + ctx_item + "\n\n## 6. Governança e Repositório" + parts[1]
    else:
        ctx_content += "\n" + ctx_item
    with open(ctx_path, 'w', encoding='utf-8') as f:
        f.write(ctx_content)
    print("Updated CONTEXTO.md")

