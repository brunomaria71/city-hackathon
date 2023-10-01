<template>
  <div class="phaseOne">
    <div class="flex justify-between mb-8">
      <h5 class="text-black font-bold text-2xl">Phase One - Pre Check Applications</h5>
      <p>Go Back</p>
    </div>
    <PhaseOneTable />
  </div>
</template>

<script setup>
import PhaseOneTable from '../components/PhaseOneTable.vue'
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
