import { ref } from 'vue'
import endPoints from "../endPoints.json";

console.log(endPoints)

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

  function getArrayEnv() {
    return Object.keys(endPoints)
  }

  return {
    apiBase,
    apiBoletas,
    apiSp,
    setEndPoint,
    env,
    endPoints, getArrayEnv
  }
}
