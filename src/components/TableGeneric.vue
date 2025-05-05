<script setup>
const props = defineProps({
  id: Number,
  title: String,
  headers: Array,
  columns: Array,
  data: Array,
})

const emit = defineEmits(['handleClick'])

function handleClick(el) {
  //console.log(el)
  emit('handleClick', el)
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">{{ props.title }}</h1>
  </div>

  <div class="overflow-x-auto">
    <table v-if="props.data" class="table table-xs">
      <thead>
        <tr v-if="props.columns">
          <th v-for="column in props.columns" :key="column.id">{{ column }}</th>
        </tr>
        <tr v-else-if="props.headers">
          <th v-for="header in props.headers" :key="header.id">{{ header.text }}</th>
        </tr>
      </thead>
      <tbody v-if="props.columns">
        <tr
          v-for="item in props.data"
          :key="item"
          class="hover:bg-gray-400"
          @click="handleClick(item.id)"
        >
          <td v-for="(column, colIndex) in props.columns" :key="colIndex">
            {{ item[column] }}
          </td>
        </tr>
      </tbody>
      <tbody v-else-if="props.headers">
        <tr
          v-for="item in props.data"
          :key="item.id"
          class="hover:bg-gray-400"
          @click="handleClick(item)"
        >
          <td v-for="(header, colIndex) in props.headers" :key="colIndex">
            {{ item[header.value] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
