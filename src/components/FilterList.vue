<script setup>
  const props = defineProps({
    modelValue: Array
  })

  const emit = defineEmits(['update:modelValue'])

  function clearFilters() {
    emit('update:modelValue', [])
  }

  function removeFilter(filter) {
    const returnArray = props.modelValue.filter(entry => entry.name != filter.name)

    emit('update:modelValue', returnArray)
  }
</script>

<template>
  <div class="filters">
    <ul>
      <li v-for="filter in modelValue" :key="filter.id">
        <span>
        {{ filter.name }} 
        </span>
        <button>
          <span @click="removeFilter(filter)">
            X
          </span>
        </button>
      </li>
    </ul>
    <button @click.prevent="clearFilters">Clear</button>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  position: relative;
  top: -2.5em;
  width: min(calc(100% - 3em), calc(1300px - 3em));
  margin-inline: auto;
  background: white;
  padding: 1.5em;
  border-radius: 0.25em;
  box-shadow: 0px 10px 20px var(--shadow-color, grey);
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 0;
  margin: 0;
}

li {
  display: block;
  list-style: none;
  background: var(--tag-bg-color, lightgrey);
  border-radius: 0.25em;
  color: var(--primary-color, black);
  font-size: 1.125em;
  font-weight: 700;
  overflow: hidden;
}

li > span {
  padding: 0.25em 0.5em;
}

li > button {
  border: none;
  display: inline-grid;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color, grey);
  color: white;
  padding: 0 0.5em;
  height: 100%;
  cursor: pointer;
}

li > button:hover {
  background-color: var(--tag-hover-button, black) !important;
}

button {
  border: none;
  background: white;
  color: grey;
  margin-inline-start: auto;
  font-weight: 700;
  font-size: 1.125em;
  cursor: pointer;
}
div > button:hover {
  text-decoration: underline;
  color: var(--primary-color, black);
}
</style>
