<template>
  <div>
    <h1 class="text-center">Meine Matches</h1>
    <b-container class="pt-3">
      <b-table :items="items" thead-class="hidden_header" bordered="true">
        <template v-slot:cell(img)="data">
          <b-img :src="data.value" style="height: 100px;"></b-img>   
        </template>
        <template v-slot:cell(job)="data">
          <h3>{{data.value.title}}</h3>
          <b class="text_info">{{data.value.desc}}</b>     
        </template>
        <template v-slot:cell(open_button)="">
          <b-button variant="primary">Anzeigen</b-button>  
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'MyMatches',
  data() {
      return {
        fields: ["img", "job", "open_button"],
        items: [
          { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_VZ.svg/250px-Logo_VZ.svg.png", 
            job: {title: "VZ VermögensZentrum AG", desc: "Junior Finanzplaner/-in (70-100%), Meilen"}, 
            open_button: 'button' },
          { img: "https://media-exp1.licdn.com/dms/image/C4D0BAQE_o7JkOELZuA/company-logo_400_400/0?e=1593648000&v=beta&t=0ho2BIfs12GefLkAxMb6cJMp0QiphDQ8X9eSznjE6KQ", 
            job: {title: "SBB CFF FFS", desc: "Kaufmännische(r) Angestellte(r) für Bahnsicherungsanlagen (Zürich)"}, 
            open_button: 'button' },
          { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/CSS_Versicherung.jpg/279px-CSS_Versicherung.jpg", 
            job: {title: "CSS Versicherungen", desc: "Sachbearbeiter/in Inkasso (100%)"}, 
            open_button: 'button' },
          { img: "https://ledwerkstatt.ch/wp-content/uploads/2018/07/Baumann-K%C3%B6lliker.png", 
            job: {title: "BAUMANN KOELLIKER AG", desc: "Technischer Sachbearbeiter (M/W), (100%)"}, 
            open_button: 'button' },
          { img: "https://s3.eu-central-1.amazonaws.com/uberall-userpics-prod/838173/rGQAG2JcgG.png", 
            job: {title: "MANOR", desc: "Detailhandelsfachmann/-frau EFZ Beratung Parfümerie"}, 
            open_button: 'button' },
          { img: "https://www.coop.ch/etc/designs/seitenrahmen/images/format-logos-svg/logo-coop.svg", 
            job: {title: "Coop", desc: "Verkäufer/in Food (100%)"}, 
            open_button: 'button' }
        ]
      }
    }
}
</script>