<template>
    <b-nav-item :href="path">{{ label }}</b-nav-item>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    label: {
      type: String,
      default: null
    },
    path: {
      type: String,
      default: null
    }
  }
}
</script>