<template>
    <div>
      <Application :application-id="$route.params.appId" />
    </div>
  </template>
  
  <script>
  import Application from '../components/Application.vue';
  
  export default {
    components: {
      Application,
    },
  };
  </script>