<template>
  <div>
    <h1 class="text-center">Mein Profil</h1>
    <b-container class="pt-3">
      <b-form-group id="input-group-3" label="Anrede:">
        <b-form-select
          id="input-3"
          v-model="form.salutation"
          :options="salutations"
        ></b-form-select>
      </b-form-group>
      <b-form-group label="Nachname"><b-form-input value="Muster"/></b-form-group>
      <b-form-group label="Vorname"><b-form-input value="Manuela"/></b-form-group>
      <b-form-group label="Strasse"><b-form-input value="Musterstrasse 3"/></b-form-group>
      <b-form-group label="Postleitzahl"><b-form-input value=""/></b-form-group>
      <b-form-group label="Email"><b-form-input value="manuela.muster@gmail.com"/></b-form-group>
      <b-form-group label="Geburtsdatum"><b-form-input value="1987-01-01"/></b-form-group>
      <b-form-group label="Nationalität"><b-form-input value="Deutschland"/></b-form-group>
      <b-form-group label="Zivilstand"><b-form-input value=""/></b-form-group>
      <b-form-group label="Mobile"><b-form-input value=""/></b-form-group>
      <b-form-group label="Arbeitserfahrung"><b-form-input value=""/></b-form-group>
      <b-form-group label="Arbeitserfahrung">
        <b-form-textarea
          id="textarea"
          v-model="textareas.exp"
          rows="3"
          max-rows="10"
        ></b-form-textarea>
      </b-form-group>
       <b-form-group label="EDV-Kenntnisse"><b-form-input value=""/></b-form-group>
        <b-form-group label="Sprachkenntnisse"><b-form-input value=""/></b-form-group>
      </b-container>
      <!--
<ul>
    <label for="Zivilstand">Zivilstand</label><br>
    <select name="Zivilstand" id="Zivilstand">
    <option value="Ledig">Ledig</option>
    <option value="verheiratet" selected>verheiratet</option>
    <option value="geschieden">geschieden</option>
    <option value="verwitwet">verwitwet</option>
    <option value="in eingetragener Partnerschaft">in eingetragener Partnerschaft</option>
    <option value="aufgelöste Partnerschaft">aufgelöste Partnerschaft</option>
    </select><br>

    <label for="Mobile">Mobile:</label><br>
    <input type="tel" name="Mobile" id="Mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required value="079 999 99 99"><br>

    <label for="Arbeitserfahrung">Arbeitserfahrung:</label><br>
    <textarea name="Arbeitserfahrung" id="Arbeitserfahrung" cols="40" rows="5">
    08/09-12/12 Gymnasium Muttenz
    09/13-08/17 HSO Wirtschaftsinformatik</textarea><br>

    <label for="EDV-Kenntnisse">EDV-Kenntnisse:</label><br>
    <textarea name="EDV-Kenntnisse" id="EDV-Kenntnisse" cols="30" rows="5">
    Word: Gut
    Excel: Sehr Gut
    Powerpoint: Sehr gut
    </textarea><br>

    <label for="Sprachkenntnisse">Sprachkenntnisse:</label><br>
    <textarea name="" id="" cols="30" rows="4">
    Englisch: Muttersprache 
    Französisch: Gut
    </textarea><br>

    <label for="Hobbies">Hobbies:</label><br>
    <textarea name="Hobbies" id="Hobbies" cols="30" rows="4">
    Zeichnen
    Freunde treffen
    </textarea><br>

    <input type="button" value="Abbrechen">
    <input type="button" value="Speichern">

</ul>
    -->
  </div>
</template>

<script>
export default {
    data(){
      return{
        textareas: {
          exp: 
            "08/09-12/12 Gymnasium Muttenz\n" +
            "09/13-08/17 HSO Wirtschaftsinformatik"
        },
        form: {
          salutation: "Doktor"
        },
        salutations: [{ text: 'Auswählen', value: null }, 'Herr', 'Frau', 'Doktor'],
      }
    },
  name: 'MyProfile'
}
</script>