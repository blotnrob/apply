<template>
  <div>
    <h1 class="text-center">Potenzielle Arbeitgeber</h1>
    <b-container class="pt-3">
      <b-row>
        <b-col>
          <h3>Junior Finanzplaner/-in (70-100%), Meilen</h3>
          <h4>VZ VermögensZentrum AG</h4>
        </b-col>
        <b-col>
          <b-button 
          v-for="(button,index) in buttons"
          :key="index"
          :variant="button.variant"
          pill
          >
          {{button.name}}
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="pt-3">
    <h5>Ihre Aufgaben</h5>
    <ul>
    <li> 
        Sie arbeiten eng mit einem erfahrenen Financial Consultant zusammen. Jeden Tag lernen Sie Neues dazu und setzen es direkt in die Praxis um.
    </li>
    <li>
        Sie begleiten unsere Consultants in Besprechungen und unterstützen sie bei der Betreuung unserer Vermögensverwaltungskunden.
    </li>
    <li>
        Sie bereiten die Gespräche professionell vor und verarbeiten die Ergebnisse.
    </li>
    <li>
        Im Team erarbeiten Sie für unsere Kundinnen und Kunden individuelle Konzepte, die alle finanziellen Aspekte berücksichtigen. Sie suchen in jedem Fall die beste Lösung und helfen auch bei der Umsetzung mit.
    </li>
    </ul>
    </b-container>
    <b-container class="pt-3">
        <h5>Ihre Profil</h5>
        <ul>
        <li> 
            Sie haben Ihre kaufmännische Lehre abgeschlossen und erste Berufserfahrung gesammelt.
        </li>
        <li>
            Sie interessieren sich für Finanzplanung, Börsen und Kapitalmärkte.
        </li>
        <li>
            Sie haben Freude am Kontakt mit Kundinnen und Kunden, kommunizieren gut und gern, sind wissbegierig und motiviert.
        </li>
        <li>
            Sie möchten sich in einem leistungsorientierten Umfeld beweisen und sukzessive Verantwortung übernehmen – schliesslich wollen Sie weiterkommen.
        </li>
        </ul>
    </b-container>
    <b-container class="pt-3">
      <h5>Ihre Perspektiven</h5>
            <ul>
            <li> 
                Wir möchten unsere unkomplizierte, offene Kultur beibehalten. Das bedeutet für Sie die Chance, ein einzigartiges Unternehmen mitzuprägen und weiterzuentwickeln.
            </li>
            <li>
                Auch für Ihre Weiterbildung sind Sie bei uns an der richtigen Adresse: Wir fördern Sie individuell und unterstützen Sie im Rahmen des Jobprofils auch bei einer externen Weiterbildung, zum Beispiel an einer Fachhochschule oder bei einer Fachausbildung mit eidgenössischem Abschluss.
            </li>
            </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
        buttons: [
          {name: "Interessiert mich", variant: "success"},
          {name: "Match löschen", variant: "danger"}
        ]
      }
  },
  name: 'MyPotentialJobs'
}

</script>