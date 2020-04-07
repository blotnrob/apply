<template>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
        <b-navbar-brand href="/">APPly</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <NavigationItem v-for="(item, index) in items" :key="index" :path="item.path" :label="item.label" />
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
import NavigationItem from './navigation/NavigationItem'

export default {
  name: 'NavigationBar',
  components: {
    NavigationItem
  },
  data() {
    return {
      items: [
        { path: '/my-profile', label: 'Mein Profil' },
        { path: '/my-documents', label: 'Dokumente' },
        { path: '/my-preferences', label: 'Präferenzen' },
        { path: '/my-templates', label: 'Vorlagen' },
        { path: '/my-matches', label: 'Meine Matches' },
        { path: '/my-potential-jobs', label: 'Potenzielle Arbeitgeber' },
      ]
    }
  }
}
</script>
