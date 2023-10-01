<template>
  <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 my-11" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="grid max-w-screen-xl grid-cols-1 gap-6 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-5 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1k</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Incomplete</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">5k</dt>
                    <dd class="text-gray-500 dark:text-gray-400">In Question</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1.5k</dt>
                    <dd class="text-gray-500 dark:text-gray-400">In progress</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">200</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Completed Applications</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">20/50</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Approvals</dd>
                </div>
            </dl>
        </div>
</template>

<script>
// Initialization for ES Users
import { Ripple, initTE } from 'tw-elements'

initTE({ Ripple })
</script>
