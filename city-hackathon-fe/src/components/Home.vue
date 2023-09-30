<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <t-input value="Hello world" name="my-input" />
    </h3>
  </div>
</template>

<script setup>
import TInput from 'vue-tailwind/dist/components'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

// methods() {

//    async getApplications() {
//     try{
//       const response = await fetch("https://someurl.com/", {
//         headers: {
//           'Accept': 'application/json',
//         },
//       });
//       const data = await response.json();

//     } catch (error){
//       console.log("theres been an error", error)
//     }
//   }
// }
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
