<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '../composables/useFetch.js'

const pipUrl = ref('https://josrferreyr-apiserverde-79.deno.dev/')
//const { data, error } = useFetch(pipUrl)

const data = ref()
const loading = ref()

function getInitialData(url) {
  loading.value = true

  fetch(url, {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log('Success:', response)
      data.value = response
    })
    .catch((error) => console.error('Error:', error))
    .finally(() => (loading.value = false))
}

onMounted(() => {
  getInitialData(pipUrl.value)
})
</script>

<template>
  <div>
    <span v-if="loading" class="loading loading-dots loading-xs"></span>

    <table class="table" v-if="data">
      <thead>
        <tr>
          <th scope="col">Entidad</th>
          <th scope="col">IP pública</th>
          <th scope="col">Ultima actualización</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-base-300" v-for="item in data" :key="item.value.date">
          <td>{{ item.value.name }}</td>
          <td>{{ item.value.ip }}</td>
          <td>{{ item.value.date }}</td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="3">Entidades</th>
          <td>3</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style>
/*
.box {
  display: flex;
  border: 1px solid;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-align: right;
}

td:first-of-type {
  text-align: left;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tbody > tr:hover {
  background-color: gold;
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
  */
</style>
