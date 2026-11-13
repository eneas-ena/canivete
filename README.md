# Canivete

O "canivete suíço" ministerial do Bispo: tudo num lugar só.

**Abrir o app:** https://eneas-ena.github.io/canivete/

## O que tem aqui

- **Hoje** (`index.html`): a chave do dia (sermões do próximo domingo no Calendário do KTL e estudos de célula da semana), a agenda do UNI, o mural e o devocional do Vida Plena, o dólar, o aviso de backup e sugestões da IA.
- **Memória** (`memoria.html`): digite um texto bíblico ou um tema e veja o que já foi pregado, ensinado e escrito sobre ele.
- Os cômodos (Palavra, Púlpito, Rebanho, Formação, Mesa) levam aos outros apps.

O Canivete só **lê** os outros apps; para editar, os botões abrem o app de origem.

## Banco de dados (Supabase, projeto quiz-biblico)

Rodar uma vez, nesta ordem: `memoria_etapa1.sql`, `memoria_etapa1b.sql`, `memoria_etapa1c.sql`, `canivete_hoje.sql`.
Para atualizar a Memória depois de salvar sermões novos no KTL: `select * from memoria.sincronizar();`

## Como publicar uma nova versão

1. Nesta página do repositório, clique em **Add file → Upload files**.
2. Arraste os arquivos novos, com os mesmos nomes dos antigos.
3. Clique em **Commit changes**.

---
Desenvolvido por Bispo Enéas Araújo.
