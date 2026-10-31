import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_43_text = """

---

### [x] Passo 43: Suavização da Iluminação Neon de Fundo da Logo na Hero (`Hero.tsx`)
- [x] **Calibração de Intensidade e Decaimento Suave:**
  - [x] Reduzida a opacidade do halo radial principal de 70% para 42% no núcleo (`rgba(210,251,7,0.42)` a 0%, `0.22` a 35% e `0.08` a 60%), contendo a dispersão excessiva nas quinas e mantendo o fundo quadriculado limpo e nítido (`[245, 247, 236]` próximo ao topo/laterais).
  - [x] Ajustada a camada de foco da haste direita para `rgba(210,251,7,0.3)` a 0% e `0.12` a 45% com dimensões de até `500x500px`, conferindo um acabamento aveludado, elegante e equilibrado que abraça a logo e sua cavidade sem saturar a malha quadriculada.
  - [x] O efeito agora reflete com rigor a iluminação suave e aveludada do design original (`media_1793456559508_bac6cd77.jpg`).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando redução da saturação nas quinas de `[241, 247, 209]` para `[245, 247, 236]`, alinhada com os `[245, 246, 238]` da referência.
  - [x] Comparativo visual gerado [hero_logo_softened_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/hero_logo_softened_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

if 'Passo 43: Suavização da Iluminação Neon' not in passos:
    passos_updated = passos.rstrip() + "\n" + passos_43_text.strip() + "\n"
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_updated)
    print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_35_text = """
35. **Suavização da Iluminação Neon de Fundo da Logo na Hero (`Hero.tsx`):**
    - **Gradiente Aveludado e Calibração de Opacidade:** Redução da opacidade central do halo radial para 42% e da camada da haste direita para 30%, proporcionando uma iluminação suave, harmoniosa e aveludada em 360° ao redor do ícone volumétrico sem estourar as quinas da malha quadriculada, preservando a pureza do fundo `#F6F7F2` e a fidelidade pixel-perfect ao mockup de referência.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '35. **Suavização da Iluminação Neon' not in content:
        marker = '## 4. Variáveis de Ambiente'
        if marker in content:
            parts = content.split(marker, 1)
            new_content = parts[0].rstrip() + "\n" + item_35_text.strip() + "\n\n---\n\n" + marker + parts[1]
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(path)}")

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_38_context = """38. **Suavização da Iluminação Neon da Logo na Hero (`Hero.tsx`):** Calibração de opacidade para 42% no halo principal e 30% na camada de realce sob a haste direita, atingindo uma difusão aveludada contida e equilibrada que ilumina suavemente o entorno e a cavidade do 'V' sem espalhar verde-limão saturado nas quinas do grid."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '38. **Suavização da Iluminação Neon' not in c_content:
    marker = '## 6. Governança e Repositório'
    if marker in c_content:
        parts = c_content.split(marker, 1)
        new_ctx = parts[0].rstrip() + "\n" + item_38_context.strip() + "\n\n---\n\n" + marker + parts[1]
        with open(context_path, 'w', encoding='utf-8') as f:
            f.write(new_ctx)
        print("Updated CONTEXTO.md")

