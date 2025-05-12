<script setup>
const props = defineProps(['item'])
console.log(typeof props.item)
</script>

<template>
  <ul>
    <li v-for="el in props.item" :key="el.id">
      <div class="flex">
        {{ el }}
      </div>
    </li>
  </ul>
</template>
