<template>
  <div class="phaseOne">
    <h1>This is Phase One</h1>
    <PhaseOneTable/>
  </div>
</template>

<script setup>
import PhaseOneTable from "../components/phaseOneTable.vue"
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
