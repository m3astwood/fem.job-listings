import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useJobListStore = defineStore("jobList", () => {
  const filters = ref([]);
  const list = ref([]);

  const filteredList = computed(() => {
    return list.value.filter((j) => {
      if (filters.value.length > 0) {
        let fList = filters.value.map((f) => j[f.type].includes(f.name));
        if (fList.every((f) => f)) {
          return j;
        }
      } else {
        return j;
      }
    });
  });

  function addFilter(data) {
    const filterList = [...filters.value, data].filter((val, idx, self) =>
      idx === self.findIndex((v) => (
        v.name === val.name && v.type == val.type
      ))
    );

    filters.value = filterList;
  }

  async function getJobs() {
    try {
      const req = await fetch("https://api.npoint.io/11c3acdb4b08e878fc21");
      const json = await req.json();

      console.log(json);

      list.value = json;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  return { list, filters, filteredList, addFilter, getJobs };
});
