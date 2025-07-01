<script setup lang="ts">
  import Kiss from './dry/Kiss.vue'
  import Dev from './dry/Dev.vue'
  import Prod from './dry/Prod.vue'
  import Inspect from './dry/Inspect.vue'

  const inspectExample = { 
    name: 'John', 
    age: 30, 
    active: true, 
    data: null, 
    greet: function(name: string) { return `Hello ${name}!` } 
  }
</script>

<template>
  Don't Repeat Yourself — Components<hr/>

  <kiss>
    Ignore this!
  </kiss> <br/>
  <dev>This is rendered only in dev</dev> <br/>
  <prod>This is rendered only in prod</prod> <br/>
  <Inspect :data="inspectExample" /> <br/>
</template>
