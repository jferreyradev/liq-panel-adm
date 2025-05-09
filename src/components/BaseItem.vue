<script setup>
const props = defineProps(['item'])

</script>

<template>

  <div v-for="el in props.item" :key="el.id" >
      {{ el }}
  </div>

</template>
