<script setup lang="ts">
  import Kiss from './dry/Kiss.vue'
  import Dev from './dry/Dev.vue'
  import Prod from './dry/Prod.vue'
</script>

<template>
  Don't Repeat Yourself — Components<hr/>

  <kiss>
    Ignore this!
  </kiss> <br/>
  <dev>This is rendered only in dev</dev> <br/>
  <prod>This is rendered only in prod</prod> <br/>
</template>