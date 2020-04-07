<template>
    <div>
        <h1 class="text-center">Präferenzen</h1>
        <b-container class="pt-5" fluid>
            <b-row>
              <b-col col lg="2"></b-col>
              <b-col md="auto">
                <b-form-group>
                    <h5>Anstellungsart</h5>
                    <b-form-checkbox-group 
                      id="checkbox-group-1" 
                      v-model="selected" 
                      :options="emp_options"
                      stacked
                      name="emp_type">
                    </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col col lg="1"></b-col>
              <b-col md="auto">
                <b-form-group>
                    <h5>Berufsfeld</h5>
                    <b-form-checkbox-group 
                      id="checkbox-group-2" 
                      v-model="selected" 
                      :options="occup_options"
                      stacked  
                      name="job_type">
                   </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col col lg="1"></b-col>
              <b-col md="auto">
                <h5>Arbeitskriterien</h5>
                <b-form-group label="Arbeitspendsum">
                  <b-form-input type="range" min="0" max="10" value="0"></b-form-input>
                </b-form-group>
                <b-form-group label="Teamwork">
                  <b-form-input   type="range" min="0" max="10" value="0"></b-form-input>
                </b-form-group>
                <b-form-group label="Karriere Chancen">
                  <b-form-input  type="range" min="0" max="10" value="0"></b-form-input>
                </b-form-group>
                <b-form-group label="Weiterbildung">
                  <b-form-input  type="range" min="0" max="10" value="0"></b-form-input>
                </b-form-group>
                <b-form-group label="Work from Home">
                  <b-form-input  type="range" min="0" max="10" value="0"></b-form-input>
                </b-form-group>
                <b-form-group label="Flexible Arbeitsstunden">
                  <b-form-input  type="range" min="0" max="10" value="0"></b-form-input>
                </b-form-group>
                <b-form-group label="Firmengrösse">
                  <b-form-input  type="range" min="0" max="10" value="0"></b-form-input>
                </b-form-group>
              </b-col>  
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  data() {
      return {
        emp_options: [
          { text: 'Festanstellung', value: 'permanent' },
          { text: 'Temporär', value: 'temporary' },
          { text: 'Praktikum', value: 'internship' },
          { text: 'Lehrstelle', value: 'apprenticeship' }
        ],
        occup_options: [
          { text: 'Administration / HR / Consulting', value: 'admin' },
          { text: 'Bau / Architektur / Engineering', value: 'construction' },
          { text: 'Chemie / Pharma / Biotechnologie', value: 'natural_science' },
          { text: 'Elektronik / Technik / Uhren', value: 'elektro_engineering' },
          { text: 'Finanzen / Treuhand / Immobilien', value: 'finances' },
          { text: 'Grafik / Typografie / Druck', value: 'grafic' },
          { text: 'Marketing / Kommunikation / Redaktion', value: 'communication' },
          { text: 'Medizin / Pflege / Therapie', value: 'med_care' },
          { text: 'Verkauf / Kundendienst / Innendienst', value: 'sale' },
          { text: 'Banking / Versicherungswesen', value: 'banking_insurance' },
          { text: 'Bewachung / Polizei / Zoll / Rettung', value: 'security' },
          { text: 'Einkauf / Logistik / Handel', value: 'logistics' },
          { text: 'Fahrzeuge / Handwerk / Lager / Transport', value: 'transportation' },
          { text: 'Gastronomie / Lebensmittel / Tourismous', value: 'catering' },
          { text: 'Informatik / Telekommunikation', value: 'it' },
          { text: 'Maschinen- / Anlagebau / Produktion', value: 'sys_engineering' },
          { text: 'Sport / Wellness / Kultur', value: 'sports' },
          { text: 'Verwaltung / Bildung / Soziales', value: 'admin' }
        ]
      }
  },
  name: 'MyPreferences'
}
</script>