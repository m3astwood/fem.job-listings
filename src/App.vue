<script setup>
import { useJobListStore } from './stores/jobList.js'
import JobEntry from './components/JobEntry.vue'
import FilterList from './components/FilterList.vue'

const jobStore = useJobListStore()

getList()

async function getList() {
  try {
    const req = await fetch('https://api.npoint.io/11c3acdb4b08e878fc21')
    const json = await req.json()

    console.log(json)

    jobStore.list = json
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <FilterList 
    v-if="jobStore.filters.length > 0" 
    :filters="jobStore.filters"

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
      v-for="job in jobStore.list" 
      :id="job.id" 
      :job="job"

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
  grid-auto-flow: rows;
  gap: 3em;
  padding: 1.5em;
}

ul:first-child {
  margin-block-start: 1em;
}


</style>
