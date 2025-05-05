<script setup>
import { useFetchWatch } from '@/composables/useFetchWatch'
import { ref } from 'vue'

const pipUrl = ref('https://josrferreyr-apiserverde-79.deno.dev/')

const { data, loading, error } = useFetchWatch(pipUrl)

/*
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
*/

async function setClipboard(text) {
  if (text) {
    console.log('clipboard')

    const type = 'text/plain'
    const clipboardItemData = {
      [type]: text,
    }
    const clipboardItem = new ClipboardItem(clipboardItemData)
    await navigator.clipboard.write([clipboardItem])
  }
}
</script>

<template>
  <div>
    <span v-if="loading" class="loading loading-dots loading-md"></span>

    <table class="table" v-if="data">
      <thead>
        <tr>
          <th scope="col">Servicio</th>
          <th scope="col">IP pública</th>
          <th scope="col">Ultima actualización</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-base-300" v-for="item in data" :key="item.value.date">
          <td>{{ item.value.name }}</td>
          <td>
            <div class="flex justify-end">
              <div class="text-end">{{ item.value.ip }}</div>
              <button @click="setClipboard(item.value.ip)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td class="text-end">{{ item.value.date }}</td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="3">Servicios</th>
          <td>3</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style></style>
