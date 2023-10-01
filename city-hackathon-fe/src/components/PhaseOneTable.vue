<template>
    <div>
      <h1>Phase One Table</h1>
      <div class="mb-3">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      v-model="searchTerm"
      type="text"
      class="w-full p-2 rounded border border-gray-300"
      placeholder="Search..."
    />
  </div>
</div>
<div id="datatable"></div>
    <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block w-full">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">ID</th>
                <th scope="col" class="px-6 py-4">Name</th>
                <th scope="col" class="px-6 py-4">Status</th>
                <th scope="col" class="px-6 py-4">Stage</th>
                <th scope="col" class="px-6 py-4">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='item in items' :key="item.application_data.UID" class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ item.application_data.applicant_ID }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{item.applicant_data.name}}</td>
                <td class="whitespace-nowrap px-6 py-4">Phase {{item.application_data.is_complete ?4:item.application_data.step>0?item.application_data.step: 1}}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ item.application_data.is_complete ? "Complete": "Incomplete" }}</td>
                <td class="nowrap px-6 py-4">
                  <router-link :to="'/application/'+item.application_data.UID">
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    View
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    </div>
  </template>
  
<script>
export default {
  name: "PhaseOneTable",

  data() {
    return {
      complete_items: [],
      items: [],
      searchTerm: "",
      error: null
    }
  },
  mounted() {
     this.getApplications()
  },
  computed: {
    filteredItems() {
      const searchTerm = this.searchTerm;
      // eslint-disable-next-line no-debugger
      debugger
      
      return this.complete_items.filter((item) => {
        return (
          item.application_data.applicant_ID.includes(searchTerm) ||
          item.applicant_data.name.includes(searchTerm) ||
          (item.application_data.is_complete ? "Complete" : "Incomplete").includes(searchTerm)
          // Add more conditions for additional columns if needed
        );
      });
    },
  },

  methods: {
    async getApplications() {
      try {
        const response = await fetch("http://10.200.0.193:3000/applications", {
          headers: {
            'Accept': 'application/json',
          },
        });
        const data = await response.json()
      this.items = data.data;
      this.complete_items = data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        alert("Error fetching data")
      }
    },
   
  },
}
</script>
  
  
  <style>
  @media (min-width: 1024px) {
    .phase-one {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  