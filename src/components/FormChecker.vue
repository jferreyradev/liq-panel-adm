<script setup>
import { useEndPoints } from '@/composables/useEndPoints'
import { computed } from 'vue'
import FormDataFetch from '@/components/FormDataFetch.vue'

const { endPoints, setEndPoint, env } = useEndPoints()

//const urls = ref([])

//const { data, error, loading } = useFetch(() => `${url.value}/api/view/configServer`)


const urls = computed(()=>{
    const arr = [] 
    for (const key in endPoints) {  
    if (Object.prototype.hasOwnProperty.call(endPoints, key)) {
      const element = endPoints[key]      
      arr.push(element.base)
    }
  }
  return arr
})

function check() {
  //console.log(endPoints)
  
  for (const key in endPoints) {  
    if (Object.prototype.hasOwnProperty.call(endPoints, key)) {
      const element = endPoints[key]
      console.log(element.titulo, element.base)
      urls.value.push(element.base)
    }
  }    
}

function getUrl(param) {
    return `${param}/api/view/configServer`
}

</script>

<template>
  <button @click="check">checker</button>
  <div v-for="item in urls" :key="item" > 
    <FormDataFetch :url= getUrl(item)>{{ item }}</FormDataFetch>
  </div> 

</template>
