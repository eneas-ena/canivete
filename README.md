# Canivete

O "canivete suíço" ministerial do Bispo: tudo num lugar só.

**Abrir o app:** https://eneas-ena.github.io/canivete/

## O que tem aqui

- **Hoje** (`index.html`): a chave do dia (sermões do próximo domingo no Calendário do KTL e estudos de célula da semana), a agenda do UNI, o mural e o devocional do Vida Plena, o dólar, o aviso de backup e sugestões da IA.
- **Memória** (`memoria.html`): digite um texto bíblico ou um tema e veja o que já foi pregado, ensinado e escrito sobre ele.
- **Ateliê do Sermão** (`atelie.html`): abre o DOCX gerado pela IA, diagrama na receita do Bispo (bullets, frases de impacto, bronze), deixa revisar negritos e baixa o DOCX pronto. Também gera os slides (capa, texto bíblico da NAA guardada pelo Pregador, pontos, frases de impacto, conclusão), com escolha de cor, em PDF para o Pregador. O botão "Enviar ao Pregador" abre o Pregador Visual com um sermão novo já preenchido (Word, slides, título, data e texto base).
- **Ateliê do Estudo** (`estudo.html`): escolhe um devocional do mês (Vida Plena), mostra se o texto já virou estudo, gera o estudo dos adultos com o prompt do Bispo e a versão dos adolescentes (RDA), deixa revisar na folha, baixa PDF e DOCX com os nomes de sempre e salva os dois no KTL.
- Os cômodos (Palavra, Púlpito, Rebanho, Formação, Mesa) levam aos outros apps.

O Canivete só **lê** os outros apps; para editar, os botões abrem o app de origem.

## Banco de dados (Supabase, projeto quiz-biblico)

Rodar uma vez, nesta ordem: `memoria_etapa1.sql`, `memoria_etapa1b.sql`, `memoria_etapa1c.sql`, `canivete_hoje.sql`, `canivete_salvar.sql` (Salvar no KTL + Memória sempre em dia), `canivete_estudo.sql` (Ateliê do Estudo), `canivete_planejar.sql` (Planejar), `canivete_salvar2.sql` (Salvar no KTL atualiza também a descrição e o esboço do culto), `canivete_outros.sql` (Outros cultos), `memoria_etapa2.sql` (cursos, apostilas e pesquisas na Memória; página importar.html).
Para atualizar a Memória depois de salvar sermões novos no KTL: `select * from memoria.sincronizar();`

## Como publicar uma nova versão

1. Nesta página do repositório, clique em **Add file → Upload files**.
2. Arraste os arquivos novos, com os mesmos nomes dos antigos.
3. Clique em **Commit changes**.

---
Desenvolvido por Bispo Enéas Araújo.
