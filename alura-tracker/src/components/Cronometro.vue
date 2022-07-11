<template>
  <section>
    <strong>{{tempoDecorrido}}</strong>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  // eslint-disable-next-line
  name:`Cronometro`,
  //As props são propriedades que recebem de um elemento pai suas props
  props:{
    tempoEmSegundos:{
      type: Number,
      default: 0
    }
  },
  //Informação dinâmica -> Ele monitora a informação e se atualiza com o tempo
  computed:{
    tempoDecorrido() : string{
      // a metodo Date calcula em milesegundo, por isso houve a multiplicação por 1000
      return new Date(this.tempoEmSegundos * 1000).toISOString().substring(19,11)
    }
  },
})
</script>

<style scoped>

</style>