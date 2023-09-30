
<template>
    <div>
      <h1>Phase One Table</h1>
      <div class="mb-3">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      id="datatable-search-input"
      type="search"
      class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1" />
  </div>
</div>
<div id="datatable"></div>
    <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <!-- <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8"> -->
      <div class="inline-block w-full">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">ID</th>
                <th scope="col" class="px-6 py-4">First</th>
                <th scope="col" class="px-6 py-4">Last</th>
                <th scope="col" class="px-6 py-4">Status</th>
                <th scope="col" class="px-6 py-4">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ applicantId }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{firstName}}</td>
                <td class="whitespace-nowrap px-6 py-4">{{lastName}}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ status }}</td>
                <td class="nowrap px-6 py-4">
                    <button
  type="button"
  @click="mobileMenuOpen = false"
  class="inline-block rounded bg-gray-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
  Button
</button>
                </td>
              </tr>
              <!-- <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                <td class="whitespace-nowrap px-6 py-4">@fat</td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">Larry</td>
                <td class="whitespace-nowrap px-6 py-4">Wild</td>
                <td class="whitespace-nowrap px-6 py-4">@twitter</td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    </div>
  </template>
  
  <script>
  import {
  Datatable,
  initTE,
  } from "tw-elements";

initTE({ Datatable });

export default {
  name: "PhaseOneTable",

  data() {
    return {
      applicantId:'',
      error: null
    }
  },
  mounted() {
     this.getApplications()
    // debugger; // eslint-disable-line no-debugger

  },

  methods: {
    async getApplications() {
      // debugger; // eslint-disable-line no-debugger
      try {
        const response = await fetch("http://10.200.0.193:3000/applications", {
          headers: {
            'Accept': 'application/json',
          },
        });
        const data = await response.json()
        console.log(data)
        this.applicantId = data.data.applicant_ID
      } catch (error) {
        console.error('Error fetching data:', error);
        alert("Error fetching data")
      }2
    },
  },
// instance()  {new Datatable(document.getElementById('datatable'), data)},

// searchTable() {document.getElementById('datatable-search-input').addEventListener('input', (e) => {
//   instance.search(e.target.value);
// })},
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
  