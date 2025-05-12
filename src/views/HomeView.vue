<script setup>
import FormPublicIp from '../components/FormPublicIp.vue'
import FormSelectAmbient from '@/components/FormSelectAmbient.vue'
import FormData from '@/components/FormData.vue'
import FormChecker from '@/components/FormChecker.vue'
import PanelIp from '@/components/PanelIp.vue'
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-3xl font-bold">Panel para control de las liquidaciones</h1>
        <div class="p-5">
          <PanelIp></PanelIp>
          <!-- <FormPublicIp></FormPublicIp>
          <FormSelectAmbient></FormSelectAmbient>
          <FormData></FormData>
          <FormChecker></FormChecker> -->
        </div>
      </div>
    </div>
  </div>
</template>
