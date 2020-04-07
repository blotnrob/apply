<template>
  <div>
    <h1 class="text-center">Vorlagen</h1>
    <b-container class="pt-3">
      <b-table :items="items" thead-class="hidden_header" bordered="true">
        <template v-slot:cell(lang)="">
          <b-form-select v-model="selected" :options="options"></b-form-select> 
        </template>
        <template v-slot:cell(download)="">
          <b-button variant="primary">Herunterladen</b-button>  
        </template>
      </b-table>
    </b-container>
  </div>

</template>

<script>
export default {
  data() {
      return {
        fields: ["doc", "lang", "downlaod"],
        items: [
          {doc: "Lebenslauf", lang: "lang", download: "button"},
          {doc: "Motivationsschreiben Architektur", lang: "lang", download: "button"},
          {doc: "Motivationsschreiben Bankwesen", lang: "lang", download: "button"},
          {doc: "Motivationsschreiben Biotechnologie", lang: "lang", download: "button"},
          {doc: "Motivationsschreiben Logistik", lang: "lang", download: "button"},
          {doc: "Motivationsschreiben Maschinenbau", lang: "lang", download: "button"},
          {doc: "Motivationsschreiben Polizei", lang: "lang", download: "button"},
          {doc: "Motivationsschreiben Versicherungswesen", lang: "lang", download: "button"}
        ],
        selected: "de",
        options: [
          { value: "de", text: 'Deutsch' },
          { value: "fr", text: 'Französisch' },
          { value: "en", text: 'Englisch' }
        ]
      }
    },
  name: 'MyTemplates'
}
</script>