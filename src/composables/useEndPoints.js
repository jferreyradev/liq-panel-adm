import { ref } from 'vue'

const endPoints = {
  desarrollo: {
    titulo: 'Desarrollo',
    boletas: 'https://api-boletas-9jn3t0ca7a3j.deno.dev',
    base: 'https://midliq-api-hdprsd64qb7n.deno.dev',
    sp: 'https://josrferreyr-deno-api-su-79--desarrollo.deno.dev',
  },
  prodConcepcion: {
    titulo: 'Concepción',
    boletas: 'https://api-boletas.deno.dev',
    base: 'https://midliq-api.deno.dev', //'https://midliq-api-yr8qdhkr86sq.deno.dev',
    sp: 'https://josrferreyr-deno-api-su-79.deno.dev',
  },
  prodTafiViejo: {
    titulo: 'Tafi Viejo',
    boletas: 'https://dno-mid-tafiviejo-boletas.deno.dev',
    base: 'https://dno-mid-tafiviejo.deno.dev',
    sp: 'https://dno-mid-tafiviejo-boletas.deno.dev',
  },
}

const apiBoletas = ref()
const apiBase = ref()
const apiSp = ref()
const env = ref()

export function useEndPoints() {
  function setEndPoint(ep) {
    console.log(ep.base)
    apiBase.value = ep.base
    apiBoletas.value = ep.boletas
    apiSp.value = ep.sp
    env.value = ep.titulo
  }

  return {
    apiBase,
    apiBoletas,
    apiSp,
    setEndPoint,
    env,
    endPoints,
  }
}
