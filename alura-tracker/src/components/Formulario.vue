<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" aria-label="Formulário para agendamento de banho para gatos">
        <input  type="text" class="input" placeholder="Qual o nome do seu gato?" >
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>00:00:00</strong>
          </section>
          <button class="button">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: `Formulario`
});
</script>

<style scoped>

</style>