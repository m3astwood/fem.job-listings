<script setup>
  import logoImg from '../assets/images/photosnap.svg'
</script>

<template>
  <li class="jobEntry">
    <div class="logo">
      <img :src="logoImg">
    </div>
    <header>
      <h2>Photosnap</h2>
      <p class="sub">Senior Frontend Developer</p>

      <div class="highlight">
        <span class="pill new">NEW!</span>
        <span class="pill feat">FEATURED</span>
      </div>
    </header>

    <div class="details">
      <span class="postedAt">1d ago</span>
      <span class="contract">Full Time</span>
      <span class="location">USA only</span>
    </div>

    <!-- will include role, level, langauges, tools -->
    <ul class="tags">
      <li>Frontend</li>
      <li>Senior</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
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

.jobEntry::before {
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0.35em;
  background-color: var(--primary-color, black);
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
  object-position: center;
}

header {
  display: grid;
  gap: 0.5em;
  grid-template-areas: 'h m m m' 's s s s';
  align-items: center;
}

.highlight {
  grid-area: m;
  display: flex;
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

h2, .sub {
  font-size: 1.0125em;
  font-weight: 700;
}

header > h2 {
  grid-area: h;
  color: var(--primary-color, black);
}

header > .sub {
  grid-area: s;
  color: var(--default-color, inherit);
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
}

</style>
