import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_45_text = """

---

### [x] Passo 45: Posicionamento do Sombreamento Neon à Direita da Logo na Hero (`Hero.tsx`)
- [x] **Deslocamento do Centro de Iluminação para a Haste Direita:**
  - [x] Alinhado o centro do halo radial neon diretamente sob a haste vertical direita da logo (`left-[64%] sm:left-[66%] md:left-[68%] top-[48%]`), recriando o deslocamento assimétrico de +112px observado na análise espectral do mockup original (`media_1793457704474_48c4751f.jpg`).
  - [x] Dimensões ajustadas para até `740x740px` (`w-[420px] sm:w-[540px] md:w-[660px] lg:w-[740px] h-[420px] sm:h-[540px] md:h-[660px] lg:h-[740px]`) com curva `bg-[radial-gradient(circle,rgba(210,251,7,0.40)_0%,rgba(210,251,7,0.26)_38%,rgba(210,251,7,0.12)_62%,transparent_82%)] blur-3xl`.
  - [x] Com este deslocamento, a luz fluorescente projeta-se generosamente para o lado direito da haste do 'V' (`[225, 237, 171]` a +30px e `[233, 244, 182]` a +60px), enquanto a margem esquerda da logo e o bloco de textos/botões da Hero permanecem sobre a malha quadriculada limpa no off-white `#F6F7F2` (`[245, 246, 239]`), idêntico à referência original.
- [x] **Validação Visual e Docker:**
  - [x] Auditoria numérica CDP confirmando decaimento assimétrico idêntico ao original (fundo limpo à esquerda a -100px com `[245, 247, 235]` e brilho sustentado à direita a +100px com `[239, 247, 193]`).
  - [x] Comparativo visual gerado [hero_logo_right_shift_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/hero_logo_right_shift_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

if 'Passo 45: Posicionamento do Sombreamento Neon à Direita' not in passos:
    passos_updated = passos.rstrip() + "\n" + passos_45_text.strip() + "\n"
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_updated)
    print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_37_text = """
37. **Posicionamento do Sombreamento Neon à Direita da Logo na Hero (`Hero.tsx`):**
    - **Deslocamento Assimétrico Alinhado com a Haste Direita:** Reajuste da posição horizontal do halo radial para `left-[68%]` (ao invés de centralizado no contêiner da coluna), concentrando o brilho verde neon atrás da haste vertical direita e irradiando suavemente para o espaço à direita da logo, enquanto a lateral esquerda preserva o contraste límpido do fundo `#F6F7F2`, atingindo correspondência rigorosa com o mockup de referência.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '37. **Posicionamento do Sombreamento Neon à Direita' not in content:
        marker = '## 4. Variáveis de Ambiente'
        if marker in content:
            parts = content.split(marker, 1)
            new_content = parts[0].rstrip() + "\n" + item_37_text.strip() + "\n\n---\n\n" + marker + parts[1]
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(path)}")

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_40_context = """40. **Deslocamento do Sombreamento Neon para a Direita da Logo na Hero (`Hero.tsx`):** Centralização do halo radial verde neon posicionada a 68% horizontal da coluna (`left-[68%]`), concentrando a luminosidade sob a haste direita e expandindo o brilho suave para o lado direito da seção, mantendo a esquerda limpa conforme o mockup original."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '40. **Deslocamento do Sombreamento Neon para a Direita' not in c_content:
    marker = '## 6. Governança e Repositório'
    if marker in c_content:
        parts = c_content.split(marker, 1)
        new_ctx = parts[0].rstrip() + "\n" + item_40_context.strip() + "\n\n---\n\n" + marker + parts[1]
        with open(context_path, 'w', encoding='utf-8') as f:
            f.write(new_ctx)
        print("Updated CONTEXTO.md")

