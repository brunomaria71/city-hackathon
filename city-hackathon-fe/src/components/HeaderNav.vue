<template>
    <nav class="bg-sky-400 border-gray-200 dark:bg-white rounded-md">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center">
    <img :src="habitat_logo" class="h-14 mr-3" alt="Habitat for humanity Logo" />
  </a>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-14 h-14 rounded-full" :src="headshot"  alt="user photo">
      </button>
      
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-row font-medium p-2 justify-between w-full align-middle">
      <li>
        <router-link to="/">
            <a href="" class="block py-2 pl-3 pr-4 mx-5 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 focus:text-gray-900" aria-current="page">Dashboard</a>
        </router-link>
      </li>
      <li>
        <router-link to="/applications">
            <a href="" class="block py-2 pl-3 pr-4 mx-5 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-900 md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-gray-900">Applications</a>
        </router-link>
      </li>
      <li>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>
<script>
import habitat_logo from '@/assets/habitat.png'; // Adjust the path based on your project structure
import headshot from '@/assets/Headshots.jpg';

export default {
  data() {
    return {
      habitat_logo  ,
      headshot
    };
  },
  mounted() {
    console.log('Image URL:', this.habitat_logo);  // Update this.habitat_logo
  }
};
</script>