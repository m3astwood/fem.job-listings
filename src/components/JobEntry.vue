<script setup>
  const props = defineProps({
    job: Object
  });

  const emit = defineEmits([ 'filterSelection' ])

  function filterTag(event) {
    const { tagName, tagType } = event.target.dataset
    emit('filterSelection', { tagName, tagType })
  }
</script>

<template>
  <li class="jobEntry" :class="{ feat: job.featured }">
    <div class="logo">
      <img :src="job.logo">
    </div>

    <header>
      <div class="top">
        <p class="companyName">{{ job.company }}</p>

        <div class="highlight">
          <span v-if="job.new" class="pill new">NEW!</span>
          <span v-if="job.featured" class="pill feat">FEATURED</span>
        </div>
      </div>

      <h2>{{ job.position }}</h2>

      <div class="details">
        <span class="postedAt">{{ job.postedAt }}</span>
        <span class="contract">{{ job.contract }}</span>
        <span class="location">{{ job.location }}</span>
      </div>
    </header>

    <!-- will include role, level, langauges, tools -->
    <ul class="tags">
      <li :data-tag-name="job.role" data-tag-type="role" @click="filterTag">{{ job.role }}</li>
      <li :data-tag-name="job.level" data-tag-type="level" @click="filterTag">{{ job.level }}</li>
      <li v-for="lang in job.languages" :key="lang.id" :data-tag-name="lang" data-tag-type="languages" @click="filterTag">{{ lang }}</li>
      <li v-for="tool in job.tools" :key="tool.id" :data-tag-name="tool" data-tag-type="tools" @click="filterTag">{{ tool }}</li>
    </ul>
  </li>
</template>

<style scoped>
ul, li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.jobEntry {
  --default-color: black;
  position: relative;
  display: grid;
  grid-auto-flow: rows;
  gap: 0.5em;
  border-radius: 0.25em;
  background-color: white;
  padding-block-start: 2.5em;
  padding-block-end: 1.5em;
  padding-inline: 1.5em;
  box-shadow: 0px 10px 20px var(--shadow-color, #66666630);
}

.jobEntry.feat::before {
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0.35em;
  background-color: var(--primary-color, black);
  border-radius: 0.25em 0 0 0.25em;
}

.logo {
  --d: 3.25em;
  position: absolute;
  top: calc(var(--d) / 2 * -1);
  width: var(--d);
  left: 1.5em;
  aspect-ratio: 1 / 1;
  border-radius: 100vmax;
  background-color: var(--shadow-color, #66666630);
  overflow: hidden;
}

.logo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

header {
  display: grid;
  grid-auto-flow: row;
  gap: 0.5em;
  align-items: center;
}

.top {
  display: flex;
}

.highlight {
  display: flex;
  margin-inline-start: 1em;
  gap: 0.5em;
}

.pill {
  background: grey;
  padding: 0.125em 0.5em;
  border-radius: 100vmax;
  font-weight: 700;
  color: white;
}

.pill.new {
  background-color: var(--primary-color);
}

.pill.feat {
  background-color: var(--default-color);
}

.companyName, h2 {
  font-size: 1.0125em;
  font-weight: 700;
}

.companyName {
  color: var(--primary-color, black);
}

h2 {
  color: var(--default-color, inherit);
  cursor: pointer;
}

h2:hover {
  color: var(--primary-color, darkgrey);
}

.details {
  display: flex;
  gap: 0.25em;
  font-weight: 500;
  font-size: 1.125em;
  color: var(--secondary-color, darkgrey);
}

.details > *:not(:last-child)::after {
  content: ' |'
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1em;
  border-block-start: 1px solid var(--divider-color, var(--secondary-color, grey));
  padding-block-start: 1.25em;
  margin-block-start: 0.5em;
  color: var(--primary-color, black);
}

.tags > li {
  background-color: var(--tag-bg-color, #00000025);
  font-size: 1.125em;
  font-weight: 700;
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
}

.tags > li:hover {
  background-color: var(--tag-bg-hover, grey);
  color: white;
}

@media(min-width: 760px) {
  .jobEntry {
    gap: 2em;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr 1fr;
    align-items: start;
  }

  .logo {
    position: static;
    width: 7em;
    aspect-ratio: 1 / 1;
  }

  .tags {
    border: none;
    margin-inline-start: auto;
  }

  .companyName {
    font-size: 1.25em;
  }

  h2 {
    font-size: 1.5em;
  }
}

</style>
