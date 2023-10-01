<template>
  <div class="flex justify-between mt-8">
      <h2 class="text-4xl font-bold dark:text-white flex align-middle justify-center">Phase {{selected_phase}} - Pre Check Applications</h2>
      <router-link to="/">
        <a href="#">Go Back</a>
      </router-link>
    </div>
  <div class="inline-flex rounded-md shadow-sm my-12 " role="group">
   
      <button  @click="change_phase(1)" class=" rounded-l-lg px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:bg-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        phase 1
      </button>
      <button  @click="change_phase(2)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:bg-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        phase 2
      </button>
      <button  @click="change_phase(3)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:bg-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        phase 3
      </button>
      <button  @click="change_phase(4)" class=" rounded-r-md px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 focus:bg-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        phase 4
      </button>
</div>
  <div>
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
                <th scope="col" class="px-6 py-4">Stage</th>
                <th scope="col" class="px-6 py-4">Status</th>
                <th scope="col" class="px-6 py-4">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='item in items' :key="item.application_data.UID" class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ item.application_data.applicant_ID }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{item.applicant_data.name}}</td>
                <td class=" px-6 py-4">
                  <span v-if="selected_phase===4" class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Phase {{ selected_phase }}</span>
                  <span v-if="selected_phase===3" class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Phase {{ selected_phase }}</span>
                  <span v-if="selected_phase===2" class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Phase {{ selected_phase }}</span>
                  <span v-if="selected_phase===1"  class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Phase {{ selected_phase }}</span>                  
                
                </td>

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
  name: 'PhaseOneTable',

  data() {
    return {
      complete_items: [],
      items: [],
      searchTerm: '',
      error: null,
      selected_phase: 1,
    }
  },
  mounted() {
    this.getApplications()
  },
  computed: {
    
  },

  methods: {
    async getApplications() {
      try {
        const response = await fetch('http://10.200.0.193:3000/applications', {
          headers: {
            Accept: 'application/json'
          }
        })
        const data = await response.json()
        this.items = data.data
        this.complete_items = data.data
        this.change_phase(this.selected_phase)
      } catch (error) {
        console.error('Error fetching data:', error)
        alert('Error fetching data')
      }
    },
    filteredItems() {
      const searchTerm = this.searchTerm.toLowerCase()
      const copy_complete = this.complete_items;
      const filtered =  copy_complete.filter((item) => {
        return (
          item.application_data.applicant_ID.toLowerCase().includes(searchTerm) ||
          item.applicant_data.name.toLowerCase().includes(searchTerm) ||
          (item.application_data.is_complete ? 'Complete' : 'Incomplete')
            .toLowerCase()
            .includes(searchTerm)
        )
      }
     
      )
      this.items = [...filtered]
    },
    change_phase(selected){
      this.selected_phase = selected;
      const copy_complete = this.complete_items;
      const filtered =  copy_complete.filter((item) => {
        return (
          (item.application_data.is_complete ?4:Math.floor(Math.random() * (3 - 1 + 1) + 1)) === selected
        )
      });
      this.items = [...filtered]
    }
  }
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
