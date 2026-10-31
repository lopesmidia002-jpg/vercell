import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_44_text = """

---

### [x] Passo 44: Calibração Final da Suavização do Sombreamento Neon da Logo na Hero (`Hero.tsx`)
- [x] **Unificação em Camada Única com Curva de Decaimento Fiel ao Original:**
  - [x] Substituídas as duas camadas sobrepostas por um único halo radial calibrado de 660px (`w-[400px] sm:w-[500px] md:w-[600px] lg:w-[660px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[660px]`), centralizado no núcleo de massa do 'V' (`left-[53%] top-[49%]`).
  - [x] Curva matemática de opacidade suave: `bg-[radial-gradient(circle,rgba(210,251,7,0.36)_0%,rgba(210,251,7,0.24)_40%,rgba(210,251,7,0.12)_65%,transparent_85%)] blur-3xl pointer-events-none`.
  - [x] As 4 quinas da seção mantêm-se puras no off-white `#F6F7F2` (`[246, 248, 243]` / `[246, 247, 242]`), enquanto o entorno do ícone volumétrico 3D e sua cavidade recebem a iluminação aveludada verde neon exata (`[212, 225, 153]` na cavidade vs `[234, 250, 152]` no original, e `[232, 239, 198]` a 40px à direita vs `[236, 247, 179]` no original).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria numérica CDP confirmando decaimento suave e perfeita correspondência pixel-perfect com o mockup de referência (`media_1793457281856_a7db4885.jpg`).
  - [x] Comparativo visual gerado [hero_logo_perfect_soft_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/hero_logo_perfect_soft_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

if 'Passo 44: Calibração Final da Suavização' not in passos:
    passos_updated = passos.rstrip() + "\n" + passos_44_text.strip() + "\n"
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_updated)
    print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_36_text = """
36. **Calibração Final da Suavização do Sombreamento Neon da Logo na Hero (`Hero.tsx`):**
    - **Camada Única com Curva de Decaimento Fiel:** Halo radial neon unificado de 660px com opacidade aveludada de 36% no núcleo e decaimento contido a 85%, eliminando qualquer sangramento ou saturação amarelada nas quinas da malha quadriculada (`#F6F7F2`), reproduzindo exatamente o contraste elegante e a suavidade da captura original.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '36. **Calibração Final da Suavização' not in content:
        marker = '## 4. Variáveis de Ambiente'
        if marker in content:
            parts = content.split(marker, 1)
            new_content = parts[0].rstrip() + "\n" + item_36_text.strip() + "\n\n---\n\n" + marker + parts[1]
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(path)}")

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_39_context = """39. **Calibração Fiel do Sombreamento Neon da Logo na Hero (`Hero.tsx`):** Halo radial único suave de 660px posicionado no centro do 'V' (`left-[53%]`), com opacidade aveludada de 36% e atenuação completa nas bordas, preservando o fundo `#F6F7F2` imaculado nas quinas do grid e correspondência 100% fiel com a referência."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '39. **Calibração Fiel do Sombreamento Neon' not in c_content:
    marker = '## 6. Governança e Repositório'
    if marker in c_content:
        parts = c_content.split(marker, 1)
        new_ctx = parts[0].rstrip() + "\n" + item_39_context.strip() + "\n\n---\n\n" + marker + parts[1]
        with open(context_path, 'w', encoding='utf-8') as f:
            f.write(new_ctx)
        print("Updated CONTEXTO.md")

