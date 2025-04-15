<script setup>
import FormPublicIp from '../components/FormPublicIp.vue'
import FormSelectAmbient from '@/components/FormSelectAmbient.vue'
import FormData from '@/components/FormData.vue'
import FormChecker from '@/components/FormChecker.vue'

</script>

<template>
  <main class="min-h-full justify-center m-10 p-5">
    <h1 class="text-3xl font-bold">Panel para control de las liquidaciones</h1>
    <div class="p-5">
      <FormPublicIp></FormPublicIp>
      <FormSelectAmbient></FormSelectAmbient>
      <FormData></FormData>
    </div>
    <div>
      <FormChecker></FormChecker>
    </div>
  </main>
</template>
