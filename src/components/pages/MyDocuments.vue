<template>
    <div>
    <h1 class="text-center">Dokumente</h1>
    <b-container class="pt-3">
      <b-row>
          <b-col col lg="2"></b-col>
          <b-col>
            <b-table id="docTable" :items="items" thead-class="hidden_header" borderless>
              <template v-slot:cell(doc)="data">
                <b-form-input :value="data.value"></b-form-input>
              </template>
              <template v-slot:cell(del_button)="data">
                <b-button @click="deleteRow(items,data.value)" variant="danger">Löschen</b-button>
              </template>
            </b-table>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
        fields: ["empty", "doc", "del_button"],
        items: [
          {doc: "Curriculum Vitae", del_button: "0"},
          {doc: "Zeugnisse", del_button: "1"}
        ],
        deleteRow: (items, key) => {
          items.splice(key, 1);
        }
      }
    },

  name: 'MyDocuments'
}
</script>