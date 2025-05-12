<script setup>
import { useFetch, useFetchCache } from '@/composables/useFetch'
import { onMounted, ref } from 'vue'
import { useEndPoints } from '@/composables/useEndPoints'
import IconCopy from './icons/IconCopy.vue'
import BaseItem from './BaseItem.vue'
import BaseTable from './BaseTable.vue'

const { endPoints } = useEndPoints()

const { data, loading, error, setActive } = useFetchCache('ip', endPoints.publicIp.url, {
  active: false,
})

//const { data, loading, error } = useFetch(endPoints.publicIp.url, {})

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
  <h2>Ip Publicas</h2>
  <button class="btn" @click="setActive()">load</button>

  <ul>
    <li v-for="item in data" :key="item.key">
      <BaseItem :item="item.value"></BaseItem>
    </li>
  </ul>
</template>
