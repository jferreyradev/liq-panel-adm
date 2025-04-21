<script setup>
import { useEndPoints } from '@/composables/useEndPoints'
import { ref, watch } from 'vue'

const picked = ref()

const { endPoints, setEndPoint, env } = useEndPoints()

//console.log(endPoints)
for (const key in endPoints) {
  console.log(key)
  if (Object.prototype.hasOwnProperty.call(endPoints, key)) {
    const element = endPoints[key]
    console.log(element)
  }
}
watch(picked, async () => {
  console.log('set', picked.value)
  setEndPoint(picked.value)
})
</script>

<template>
  <div>
    <div v-if="endPoints">
      <div class="flex justify-start" v-for="ep in endPoints" :key="ep">
        <input class="radio" type="radio" :id="ep" :value="ep" v-model="picked" />
        <label class="label" :for="ep">{{ ep.titulo }}</label>
      </div>
    </div>
  </div>
</template>
