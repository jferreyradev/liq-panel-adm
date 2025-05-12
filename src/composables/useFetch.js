// fetch.js
import { ref, computed } from 'vue'

export function useFetch(url, options = {}) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(null)

  async function myFetch() {
    console.log('fetch to: ', url)
    loading.value = true
    try {
      const resp = await fetch(url, { ...options })
      data.value = await resp.json()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  if (!options.cached) {
    myFetch()
  }

  return { data, loading, error, myFetch }
}

const cacheMap = ref(new Map())

export const useFetchCache = (key, url, options) => {
  const dataFetch = useFetch(url, { cached: true, ...options })
  const update = () => cacheMap.value.set(key, dataFetch.data.value)
  const clear = () => cacheMap.value.set(key, null)
  const setActive = () => {
    active.value = true
    myCachedfetch()
  }
  const active = ref(true)

  console.log(options.preload)

  if (Object.hasOwn(options, 'active')) {
    active.value = options.preload
  }

  const myCachedfetch = async () => {
    console.log('data cache')
    try {
      await dataFetch.myFetch()
      update()
    } catch (err) {
      console.log(err)
      clear()
    }
  }

  const data = computed(() => cacheMap.value.get(key))

  if (active.value && data.value == null) myCachedfetch()
  else dataFetch.loading = false

  return { ...dataFetch, data, clear, setActive }
}
