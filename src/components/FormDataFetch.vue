<script setup>
import { ref, watchEffect } from 'vue'
import { useFetchWatch } from '@/composables/useFetchWatch.js'

const urlval = ref()

const { data, error, loading } = useFetchWatch(() => urlval.value ) // `${urlval.value}/api/view/configServer`)

const props = defineProps(['url'])

watchEffect(() => {
  // runs only once before 3.5
  // re-runs when the "foo" prop changes in 3.5+
  console.log('watchEffect from datafetch ', props.url)
  urlval.value = props.url
})
</script>

<template>
  <div v-if="loading">Cargando...</div>
  <div v-else-if="data">{{ data[0].AMBIENTE }} {{ data[0] }}</div>
</template>
