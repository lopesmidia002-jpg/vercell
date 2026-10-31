import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc_alt_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
ctx_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

passos_addition = """
---

### [x] Passo 50: Deslocamento dos Laptops para a Direita no Card Painel e Monitoramento (`BentoGrid.tsx`)
- [x] **Alinhamento e Sangria Horizontal no Canto Direito Fiel ao Mockup Original:**
  - [x] Ajustada a margem direita de sangria do contêiner do mockup de computadores de `lg:-mr-[75px]` para `lg:-mr-[155px]`, deslocando todo o conjunto em +80px horizontalmente para a direita.
  - [x] O entalhe (notch) do laptop central agora posiciona-se a 52.3% da largura do card (exatamente alinhado com a referência original), e a extremidade esquerda do laptop esquerdo inicia-se a 33% da margem esquerda, logo abaixo de `"seus webhooks pelo Finance, o"`.
  - [x] O laptop direito agora apresenta o corte exato no gráfico circular roxo pela borda arredondada direita do card, mantendo o respiro limpo na área sob a descrição textual na metade esquerda e reproduzindo com fidelidade total o mockup de referência (`media_1793476836082_47adfed7.png`).
  - [x] Responsividade mantida em todos os breakpoints: mobile (`-mr-8`), tablet (`sm:-mr-20`) e desktop (`lg:-mr-[155px]`).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando deslocamento da margem esquerda dos laptops de 154px para 234px e sangria direita de -106px sobre o card de 798px.
  - [x] Comparativo visual gerado [card6_laptops_shift_right_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/card6_laptops_shift_right_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

doc_item = """
---
42. **Deslocamento dos Laptops para a Direita no Card Painel e Monitoramento (`BentoGrid.tsx`):**
    - **Alinhamento Preciso no Canto Inferior Direito:** Reajuste da margem de sangria direita para `lg:-mr-[155px]`, deslocando o mockup em +80px para a direita. O notch do laptop central foi reposicionado em 52.3% da largura do card, o laptop direito passa a ser cortado na altura do gráfico circular roxo e o laptop esquerdo inicia-se sob "seus webhooks pelo Finance, o", liberando um respiro amplo na margem esquerda e espelhando exatamente a composição da referência visual original.
"""

ctx_item = """
---
45. **Deslocamento dos Laptops para a Direita no Card Painel e Monitoramento (`BentoGrid.tsx`):** Calibração de sangria horizontal (`lg:-mr-[155px]`) deslocando o mockup em 80px à direita. O conjunto de computadores posiciona-se agora na metade direita do card (notch a 52.3% da largura), com o laptop direito suavemente recortado pela quina do card e o laptop esquerdo iniciando-se alinhado com a segunda linha descritiva.
"""

# Update PASSOS.md
with open(passos_path, 'r', encoding='utf-8') as f:
    passos_content = f.read()
if "Passo 50" not in passos_content:
    passos_content += passos_addition
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_content)
    print("Updated PASSOS.md")

# Update DOCUMENTACAO.md and DOCUMENTAÇÃO.md
for p in [doc_path, doc_alt_path]:
    with open(p, 'r', encoding='utf-8') as f:
        doc_content = f.read()
    if "Deslocamento dos Laptops para a Direita no Card Painel e Monitoramento" not in doc_content:
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
if "Deslocamento dos Laptops para a Direita no Card Painel e Monitoramento" not in ctx_content:
    if "## 6. Governança e Repositório" in ctx_content:
        parts = ctx_content.split("## 6. Governança e Repositório")
        ctx_content = parts[0].rstrip() + "\n" + ctx_item + "\n\n## 6. Governança e Repositório" + parts[1]
    else:
        ctx_content += "\n" + ctx_item
    with open(ctx_path, 'w', encoding='utf-8') as f:
        f.write(ctx_content)
    print("Updated CONTEXTO.md")

