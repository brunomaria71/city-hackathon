<template>
  <div class="phaseOne">
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
