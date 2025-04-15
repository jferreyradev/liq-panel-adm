<script setup>
import { useEndPoints } from '@/composables/useEndPoints'
import { useFetchWatch } from '@/composables/useFetchWatch'

const { env, apiBase } = useEndPoints()

const { data, error, loading } = useFetchWatch(() => `${apiBase.value}/api/view/configServer`)

</script>

<template>
  <div v-if="env" class="card md:card-side bg-base-100 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">{{ env }}</h2>
      <div>
        <span v-if="loading" class="loading loading-dots loading-xs"></span>
        <textarea v-if="data" class="textarea" rows="15" cols="50">{{ data }} </textarea>        
        <div v-else>{{ error }}</div>
      </div>
    </div>
  </div>
</template>
