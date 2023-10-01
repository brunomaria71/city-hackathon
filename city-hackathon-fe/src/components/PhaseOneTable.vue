<template>
  <div>
    <h1>Phase One Table</h1>
    <div class="mb-3">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <input v-model="searchTerm" type="text" class="w-full p-2 rounded border border-gray-300"
          placeholder="Search..." />
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
                  <th scope="col" class="px-6 py-4">Info</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='item in filteredItems' :key="item.UID" class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">{{ item.application_data.applicant_ID }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ item.applicant_data.name }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ item.application_data.is_complete ? "Complete" : "Incomplete"
                  }}</td>
                  <td class="nowrap px-6 py-4">
                    <button type="button" @click="mobileMenuOpen = false"
                      class="inline-block rounded bg-gray-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Button
                    </button>
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
      const searchTerm = this.searchTerm.toLowerCase();
      return this.items.filter((item) => {
        return (
          item.application_data.applicant_ID.toLowerCase().includes(searchTerm) ||
          item.applicant_data.name.toLowerCase().includes(searchTerm) ||
          (item.application_data.is_complete ? "Complete" : "Incomplete").toLowerCase().includes(searchTerm)
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
  