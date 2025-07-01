<script setup lang="ts">
  import Kiss from './dry/Kiss.vue'
  import Dev from './dry/Dev.vue'
  import Prod from './dry/Prod.vue'
  import Inspect from './dry/Inspect.vue'

  const sampleObject = { name: 'John', age: 30, active: true }
  const sampleArray = [1, 2, 'three', { nested: 'object' }]
  const sampleFunction = function greet(name: string) { return `Hello ${name}!` }
</script>

<template>
  Don't Repeat Yourself — Components<hr/>

  <kiss>
    Ignore this!
  </kiss> <br/>
  <dev>This is rendered only in dev</dev> <br/>
  <prod>This is rendered only in prod</prod> <br/>
  
  <h3>Inspect Component Examples:</h3>
  
  <p>String:</p>
  <Inspect :data="'Hello World'" /> <br/>
  
  <p>Number:</p>
  <Inspect :data="42" /> <br/>
  
  <p>Object:</p>
  <Inspect :data="sampleObject" /> <br/>
  
  <p>Array:</p>
  <Inspect :data="sampleArray" /> <br/>
  
  <p>Function:</p>
  <Inspect :data="sampleFunction" /> <br/>
  
  <p>Null:</p>
  <Inspect :data="null" /> <br/>
  
  <p>No data:</p>
  <Inspect /> <br/>
</template>