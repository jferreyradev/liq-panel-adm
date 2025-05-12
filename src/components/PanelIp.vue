<script setup>
import { useFetch, useFetchCache, useFetchWatch, useFetchBatchCache } from '@/composables/useFetch'
import { onMounted, ref } from 'vue'
import { useEndPoints } from '@/composables/useEndPoints'
import IconCopy from './icons/IconCopy.vue'
import BaseItem from './BaseItem.vue'
import BaseTable from './BaseTable.vue'

const { endPoints } = useEndPoints()


//const { data, loading, error, setActive } = useFetchCache('ip', endPoints.publicIp.url, {})

//const { data, loading, error } = useFetchBatchCache('ip', endPoints.publicIp.url, {})

const { data, loading, error, myFetch } = useFetch(endPoints.publicIp.url, {skip:false, cache:true, id:'ip'})

//const { data, loading, error, myFetch } = useFetchBatch(endPoints.publicIp.url, {})

//const { data, loading, error } = useFetchWatch(endPoints.publicIp.url, {})

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
  <button class="btn" @click="myFetch()">load</button>

  <ul>
    <li v-for="item in data" :key="item.key">
      <BaseItem :item="item.value"></BaseItem>
    </li>
  </ul>
</template>
