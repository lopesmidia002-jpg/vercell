import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_41_text = """

---

### [x] Passo 41: Ampliação e Centralização do Sombreamento Neon da Logo na Hero (`Hero.tsx`)
- [x] **Centralização e Expansão do Halo Neon Atrás da Logo 3D:**
  - [x] Inserida camada radial dedicada de iluminação verde neon diretamente atrás do ícone 3D da Versell na coluna da Hero (`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`), com dimensões responsivas de até `560x560px` (`w-[340px] sm:w-[440px] md:w-[520px] lg:w-[560px] h-[340px] sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-full`).
  - [x] Aplicação de gradiente radial aveludado multicamada: `bg-[radial-gradient(circle,rgba(210,251,7,0.6)_0%,rgba(210,251,7,0.3)_45%,rgba(210,251,7,0.1)_65%,transparent_80%)] blur-3xl pointer-events-none`.
  - [x] Refinamento da sombra de profundidade do elemento 3D para `drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]`, garantindo contraste realista e tridimensionalidade sobre a malha quadriculada.
  - [x] O halo fluorescente agora se expande suavemente por trás da cavidade do 'V' e se irradia por toda a área circundante, com decaimento luminoso idêntico à captura original (`media_1793456041021_25f548fc.jpg`).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando alinhamento concêntrico perfeito e dimensões de 451px de altura da logo com halo irradiando em 360°.
  - [x] Comparativo visual gerado [hero_logo_glow_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/hero_logo_glow_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

if 'Passo 41: Ampliação e Centralização do Sombreamento' not in passos:
    passos_updated = passos.rstrip() + "\n" + passos_41_text.strip() + "\n"
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_updated)
    print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_33_text = """
33. **Ampliação do Sombreamento Neon da Logo na Hero (`Hero.tsx`):**
    - **Halo Radial Neon Expansivo Centrado no Ícone 3D:** Implementação de elemento de luz ambiente radial concêntrico posicionado diretamente atrás do logotipo volumétrico 3D de acrílico da Versell (`w-[340px] sm:w-[440px] md:w-[520px] lg:w-[560px] h-[340px] sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-full` com `radial-gradient(circle, rgba(210,251,7,0.6)...) blur-3xl`), projetando um halo luminoso verde neon aveludado e contínuo que ilumina o fundo quadriculado com transição suave, fiel à referência visual original.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '33. **Ampliação do Sombreamento Neon da Logo na Hero' not in content:
        # Insert right before ## 4. Variáveis de Ambiente or similar
        marker = '## 4. Variáveis de Ambiente'
        if marker in content:
            parts = content.split(marker, 1)
            new_content = parts[0].rstrip() + "\n" + item_33_text.strip() + "\n\n---\n\n" + marker + parts[1]
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(path)}")
        else:
            print(f"Marker not found in {os.path.basename(path)}")

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_36_context = """36. **Sombreamento Neon da Logo na Hero (`Hero.tsx`):** Adição de camada de iluminação ambiente radial (`radial-gradient` neon `#D2FB07` com `blur-3xl`) de até 560px centralizada perfeitamente atrás do ícone 3D de acrílico, proporcionando o halo esverdeado fluorescente amplo e contínuo que banha a grade do hero conforme a referência original."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '36. **Sombreamento Neon da Logo na Hero' not in c_content:
    marker = '## 6. Governança e Repositório'
    if marker in c_content:
        parts = c_content.split(marker, 1)
        new_ctx = parts[0].rstrip() + "\n" + item_36_context.strip() + "\n\n---\n\n" + marker + parts[1]
        with open(context_path, 'w', encoding='utf-8') as f:
            f.write(new_ctx)
        print("Updated CONTEXTO.md")
    else:
        print("Marker not found in CONTEXTO.md")

