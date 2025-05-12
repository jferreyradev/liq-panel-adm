import { ref, watchEffect, toValue } from 'vue'

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
