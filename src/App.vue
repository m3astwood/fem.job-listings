<script setup>
import { ref } from 'vue'
import { useJobListStore } from './stores/jobList.js'
import JobEntry from './components/JobEntry.vue'
import FilterList from './components/FilterList.vue'

const jobStore = useJobListStore()

jobStore.getJobs()
</script>

<template>
  <FilterList 
    v-if="jobStore.filters.length > 0" 
    v-model="jobStore.filters"

    style="
      --primary-color: hsl(var(--prim-cyan)); 
      --secondary-color: hsl(var(--dark-cyan));
      --tag-bg-color: hsl(var(--prim-cyan) / 10%); 
      --tag-hover-button: hsl(var(--darker-cyan)); 
      --divider-color: hsl(var(--dark-cyan) / 45%);
      --shadow-color: hsl(var(--prim-cyan) / 30%);
  "></FilterList>
  <ul>
    <JobEntry 
      v-for="job in jobStore.filteredList" 
      :id="job.id" 
      :job="job"

      @filterSelection="jobStore.addFilter"

      style="
      --primary-color: hsl(var(--prim-cyan)); 
      --secondary-color: hsl(var(--dark-cyan));
      --default-color: hsl(var(--darker-cyan));
      --tag-bg-color: hsl(var(--prim-cyan) / 10%); 
      --tag-bg-hover: hsl(var(--prim-cyan)); 
      --divider-color: hsl(var(--dark-cyan) / 45%);
      --shadow-color: hsl(var(--prim-cyan) / 30%);
    "></JobEntry>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-auto-flow: row;
  gap: 3em;
  padding: 1.5em;
  max-width: 1300px;
  margin-inline: auto;
}

ul:first-child {
  margin-block-start: 1em;
}


</style>
