<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" aria-label="Formulário para agendamento de banho para gatos">
        <input  type="text" class="input" placeholder="Qual é o nome da tarefa que você quer executar?" >
      </div>
      <div class="column">
        <Temporizador />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import Temporizador from "@/components/Temporizador.vue";

export default defineComponent({
  name: `Formulario`,
  components: {
    Temporizador
  }
});
</script>

<style scoped>

</style>