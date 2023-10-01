<template>
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
import { Ripple, initTE } from 'tw-elements'

initTE({ Ripple })
</script>
