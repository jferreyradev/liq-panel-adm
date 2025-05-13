// fetch.js
import { ref, computed, watchEffect, toValue } from 'vue'

const cacheMap = ref(new Map())

const skipMap = ref(new Map())

export function useFetch(url, options = {}, conf = {}) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(null)
  const skip = ref(null)
  //const data = computed(() => cacheMap.value.get(key))

  if ('skip' in conf) {
    skip.value = skipMap.value.get(conf.id)
    console.log(skip.value)
    if (skip.value == null) skip.value = conf.skip
  }

  console.log(skip.value)

  async function myFetch() {
    loading.value = true
    try {
      if (conf.cache) data.value = cacheMap.value.get(conf.id)

      if (!data.value) {
        console.log('fetch to: ', url)
        const resp = await fetch(url, { ...options })
        data.value = await resp.json()
        console.log(data.value)
      }
      if (conf.cache && data.value) cacheMap.value.set(conf.id, data.value)
    } catch (err) {
      error.value = err
    } finally {
      console.log(data.value)
      loading.value = false
    }
  }

  if (!skip.value) {
    myFetch()
  } else {
    skipMap.value.set(conf.id, false)
  }

  return { data, loading, error, myFetch }
}

// Fetch con cache

export const useFetchCache = (key, url, options) => {
  const dataFetch = useFetch(url, { cached: true, ...options })
  const update = () => cacheMap.value.set(key, dataFetch.data.value)
  const clear = () => cacheMap.value.set(key, null)
  const data = computed(() => cacheMap.value.get(key))

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

  if (data.value == null) myCachedfetch()
  else dataFetch.loading = false

  return { ...dataFetch, data, clear }
}

///

export function useFetchBatchCache(key, url, options = {}) {
  const dataFetch = useFetch(url, { cached: true, ...options })
  const update = () => cacheMap.value.set(key, dataFetch.data.value)
  const clear = () => cacheMap.value.set(key, null)

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

  if (data.value == null) myCachedfetch()
  else dataFetch.loading = false

  return { ...dataFetch, data, clear }
}

// Fetch con observación de cambios

export function useFetchWatch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(null)

  watchEffect(async () => {
    // reset state before fetching..
    data.value = null
    error.value = null
    loading.value = true

    // resolve the url value synchronously so it's tracked as a
    // dependency by watchEffect()
    const urlValue = toValue(url)

    try {
      // artificial delay / random error
      //await timeout()
      // unref() will return the ref value if it's a ref
      // otherwise the value will be returned as-is

      console.log('fetch to: ', urlValue)
      const res = await fetch(urlValue)
      data.value = await res.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })

  return { data, error, loading }
}

// artificial delay
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve()
      } else {
        reject(new Error('Random Error'))
      }
    }, 300)
  })
}
