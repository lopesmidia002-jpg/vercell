import os

passos_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\PASSOS.md"
doc_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTACAO.md"
doc2_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\DOCUMENTAÇÃO.md"
context_path = r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\CONTEXTO.md"

# 1. PASSOS.md
passos_42_text = """

---

### [x] Passo 42: Expansão do Sombreamento Neon no Lado Direito da Logo na Hero (`Hero.tsx`)
- [x] **Ampla Irradiação Fluorescente no Lado Direito e em 360°:**
  - [x] Removido o elemento de luz ambiente deslocado na seção geral (`right-1/4`), que concentrava luminosidade apenas à esquerda da logo.
  - [x] Ampliado o halo principal radial concêntrico atrás da logo para até `940x940px` (`w-[520px] sm:w-[680px] md:w-[800px] lg:w-[940px] h-[520px] sm:h-[680px] md:h-[800px] lg:h-[940px]`), expandindo a curva de atenuação até 90% (`rgba(210,251,7,0.7)` no centro a `transparent` a 90%).
  - [x] Adicionada uma segunda camada de foco luminoso neon direcionada sob a haste direita e cavidade da logo (`left-[56%] top-[48%]`, dimensões de até `620x620px` com `blur-2xl`), garantindo que a malha quadriculada à direita da haste vertical do 'V' receba irradiação fluorescente intensa e vibrante, exatamente idêntica à referência original (`media_1793456559508_bac6cd77.jpg`).
- [x] **Validação Visual e Docker:**
  - [x] Auditoria CDP confirmando distribuição equilibrada de brilho (decaimento simétrico de [234, 247, 174] a 80px à esquerda e [233, 246, 169] a 80px à direita da logo).
  - [x] Comparativo visual gerado [hero_logo_right_glow_comparison.png](file:///C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/hero_logo_right_glow_comparison.png).
  - [x] Container Docker rodando em perfeito estado com compilação limpa, HTTP 200 OK.
"""

with open(passos_path, 'r', encoding='utf-8') as f:
    passos = f.read()

if 'Passo 42: Expansão do Sombreamento Neon no Lado Direito' not in passos:
    passos_updated = passos.rstrip() + "\n" + passos_42_text.strip() + "\n"
    with open(passos_path, 'w', encoding='utf-8') as f:
        f.write(passos_updated)
    print("Updated PASSOS.md")

# 2. DOCUMENTACAO.md and DOCUMENTAÇÃO.md
item_34_text = """
34. **Expansão do Sombreamento Neon no Lado Direito da Logo na Hero (`Hero.tsx`):**
    - **Halo Duplo de 360° com Cobertura Integral da Haste Direita:** Ampliação do raio do gradiente radial concêntrico para até 940px e adição de camada de foco neon a 56% horizontal cobrindo toda a haste vertical direita e a abertura do 'V', banhando o lado direito da grade com luz fluorescente contínua, sem cortes abruptos e em perfeita correspondência com a captura original.
"""

def update_doc(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '34. **Expansão do Sombreamento Neon no Lado Direito' not in content:
        marker = '## 4. Variáveis de Ambiente'
        if marker in content:
            parts = content.split(marker, 1)
            new_content = parts[0].rstrip() + "\n" + item_34_text.strip() + "\n\n---\n\n" + marker + parts[1]
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(path)}")

update_doc(doc_path)
update_doc(doc2_path)

# 3. CONTEXTO.md
item_37_context = """37. **Expansão do Sombreamento Neon da Logo na Hero no Lado Direito (`Hero.tsx`):** Eliminação de assimetrias luminosas através da expansão do halo radial para 940px e inclusão de camada complementar sob a haste direita (`left-[56%]`), estendendo o degradê neon verde fluorescente tanto para a esquerda quanto para a direita da logo de forma uniforme e fiel ao mockup."""

with open(context_path, 'r', encoding='utf-8') as f:
    c_content = f.read()

if '37. **Expansão do Sombreamento Neon da Logo na Hero no Lado Direito' not in c_content:
    marker = '## 6. Governança e Repositório'
    if marker in c_content:
        parts = c_content.split(marker, 1)
        new_ctx = parts[0].rstrip() + "\n" + item_37_context.strip() + "\n\n---\n\n" + marker + parts[1]
        with open(context_path, 'w', encoding='utf-8') as f:
            f.write(new_ctx)
        print("Updated CONTEXTO.md")

