import { ref } from 'vue';
import { defineStore } from 'pinia';

// API Endpoint
// https://api.npoint.io/11c3acdb4b08e878fc21

export const useJobListStore = defineStore('jobList', () => {
  const list = ref([]);

  return { list };
});
