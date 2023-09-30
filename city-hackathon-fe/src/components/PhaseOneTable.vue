<template>
    <div>
      <h1>Phase One Table</h1>
      <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">ID</th>
                <th scope="col" class="px-6 py-4">First</th>
                <th scope="col" class="px-6 py-4">Last</th>
                <th scope="col" class="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ id }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{firstName}}</td>
                <td class="whitespace-nowrap px-6 py-4">{{lastName}}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ status }}</td>
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
  