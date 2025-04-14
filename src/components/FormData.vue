<script setup>
import { useEndPoints } from '@/composables/useEndPoints'
import { useFetch } from '@/composables/useFetch'

const { env, apiBase } = useEndPoints()

const { data, error, loading } = useFetch(() => `${apiBase.value}/api/view/configServer`)
</script>

<template>
  <div v-if="env" class="card md:card-side bg-base-100 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">{{ env }}</h2>
      <div>
        <textarea class="textarea" rows="15" cols="50" v-if="data">{{ data }} </textarea>
        <span v-else-if="loading" class="loading loading-dots loading-xs"></span>
        <div v-else>{{ error }}</div>
      </div>
    </div>
  </div>
</template>
