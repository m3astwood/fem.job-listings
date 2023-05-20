<script setup>
import JobEntry from './components/JobEntry.vue'
</script>

<template>
  <ul>
    <JobEntry 
      style="
      --primary-color: hsl(var(--prim-cyan)); 
      --secondary-color: hsl(var(--dark-cyan));
      --tag-bg-color: hsl(var(--prim-cyan) / 10%); 
      --divider-color: hsl(var(--dark-cyan) / 45%);
      --shadow-color: hsl(var(--prim-cyan) / 30%);
    "></JobEntry>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-auto-flow: rows;
  gap: 3em;
  padding: 1.5em;
  margin-block-start: 2em;
}
</style>
