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
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ id }}</td>
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
              <tr class="border-b dark:border-neutral-500">
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
//   import {
//   Datatable,
//   initTE,
// } from "tw-elements";

// initTE({ Datatable });

// const data = {
//   columns: [
//     {
//       label: 'Name',
//       field: 'name'
//     },
//     'Position',
//     'Office',
//     'Age',
//     'Start date',
//     'Salary',
//   ],
//   rows: [
//     ["Tiger Nixon", "System Architect", "Edinburgh", "61", "2011/04/25", "$320,800"],
//     ["Garrett Winters", "Accountant", "Tokyo", "63", "2011/07/25", "$170,750"],
//     ["Ashton Cox", "Junior Technical Author", "San Francisco", "66", "2009/01/12", "$86,000"],
//     ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22", "2012/03/29", "$433,060"],
//     ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
//     ["Brielle Williamson", "Integration Specialist", "New York", "61", "2012/12/02", "$372,000"],
//     ["Herrod Chandler", "Sales Assistant", "San Francisco", "59", "2012/08/06", "$137,500"],
//     ["Rhona Davidson", "Integration Specialist", "Tokyo", "55", "2010/10/14", "$327,900"],
//     ["Colleen Hurst", "Javascript Developer", "San Francisco", "39", "2009/09/15", "$205,500"],
//     ["Sonya Frost", "Software Engineer", "Edinburgh", "23", "2008/12/13", "$103,600"],
//     ["Jena Gaines", "Office Manager", "London", "30", "2008/12/19", "$90,560"],
//     ["Quinn Flynn", "Support Lead", "Edinburgh", "22", "2013/03/03", "$342,000"],
//     ["Charde Marshall", "Regional Director", "San Francisco", "36", "2008/10/16", "$470,600"],
//     ["Haley Kennedy", "Senior Marketing Designer", "London", "43", "2012/12/18", "$313,500"]
//   ],
// };

// const instance = new Datatable(document.getElementById('datatable'), data)

// document.getElementById('datatable-search-input').addEventListener('input', (e) => {
//   instance.search(e.target.value);
// });
  data() {
    return {
      error: null
    }
  },
  mounted() {

  },

  methods: {
    async getApplications() {
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            'Accept': 'application/json',
          },
        });
        const data = await response.json()
        this.getJoke = data.joke
        this.jokeId = data.id
      } catch (error) {
        console.error('Error fetching joke:', error);
        alert("Error fetching jokes")
      }
    },
    async getJokeById(jokeId) {
      try {
        const response = await fetch(`https://icanhazdadjoke.com/j/${jokeId}`, {
          headers: {
            'Accept': 'application/json',
          },
        });
        const data = await response.json()
        this.gotJokeById = data.joke
      } catch (error) {
        console.error('Error fetching joke:', error);
        alert("Error fetching jokes")
      }
    },

    async addToFavs(id) {
      await this.getJokeById(id)
      if (!this.favJokesList.includes(id)) {
        this.favJokesList.push({
          id: this.jokeId,
          joke: this.gotJokeById
        })
      }
    }
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
  