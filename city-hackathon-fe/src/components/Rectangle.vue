<template>
  <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 my-11" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="grid max-w-screen-xl grid-cols-1 gap-6 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-5 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">{{ this.application_stats.incomplete_applications }}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Incomplete</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold"> {{ this.application_stats.in_question }}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">In Question</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">{{ this.application_stats.in_progress }}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">In progress</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">{{ this.application_stats.completed_applications }}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Completed Applications</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">{{ this.application_stats.approvals }}/80</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Approvals</dd>
                </div>
            </dl>
        </div>
  <!--First-->
  <div class="flex mt-5">
    <div
      class="w-1/4 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Incomplete
      </h5>
      <p class="mb-4 text-5xl">1K</p>
      <p class="text-neutral">View</p>
    </div>
    <!-- Second -->
    <div
      class="block w-1/4 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        In - Question
      </h5>
      <p class="mb-4 text-red-600 text-5xl">5K</p>
      <p class="text-neutral">Phase 2</p>
    </div>
    <!-- Third -->
    <div
      class="w-1/4 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Phase 2
      </h5>
      <p class="mb-4 text-5xl">15K</p>
      <p class="text-neutral">In Progress</p>
    </div>
    <!--Fourth -->
    <div
      class="w-1/4 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Phase 3
      </h5>
      <p class="mb-4 text-5xl">200</p>
      <p class="text-neutral">Total Per Application</p>
    </div>
  </div>
</template>

<script>
// Initialization for ES Users
// import { Ripple, initTE } from 'tw-elements'

// initTE({ Ripple })
export default {

  data() {
    return {
      application_stats: {
        "incomplete_applications": 0,
            "in_question": 0,
            "in_progress": 0,
            "completed_applications":0,
            "approvals": 0
        },
    }
  },
  mounted() {
    this.getApplications()
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
        const collection = data.data
        const return_value = {
            "incomplete_applications": 0,
            "in_question": 0,
            "in_progress": 0,
            "completed_applications":0,
            "approvals": 0
        }
        collection.forEach((application)=>{
            const app = application.application_data;
            return_value.incomplete_applications += app.is_complete?0:1;
            return_value.in_question += app.webinar_date?0:1;
            return_value.in_progress += app.webinar_date?1:0;
            return_value.completed_applications += app.is_complete?1:0;
            return_value.approvals += app.approved?1:0;
        })
        this.application_stats = {...return_value}
      } catch (error) {
        console.error('Error fetching data:', error)
        alert('Error fetching data')
      }
    },
}
}
</script>
