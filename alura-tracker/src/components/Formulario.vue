<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" aria-label="Formulário para agendamento de banho para gatos">
        <input  type="text" class="input" placeholder="Qual o nome do seu gato?" >
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{tempoDecorrido}}</strong>
          </section>
          <!--          O @click  é nativo do proprio vue e ele pega os clicks do usário-->
          <button class="button" @click="iniciar">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalizar">
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

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: `Formulario`,
  //São os dados/variavés
  data (){
    return{
      tempoEmSegundos:0,
      cronometro: 0
    }
  },
  //Informação dinâmica -> Ele monitora a informação e se atualiza com o tempo
  computed:{
    tempoDecorrido() : string{
      // a metodo Date calcula em milesegundo, por isso houve a multiplicação por 1000
      return new Date(this.tempoEmSegundos * 1000).toISOString().substring(19,11)
    }
  },
  // São as funções que o usuário pode fazer os metodos
  methods: {
    iniciar(){
      //significa que a função "funcao" será executada assim cada vez que se atingir o determinado tempo.
      //this.cronometro -> este cronometro está executando.
      this.cronometro = setInterval(()=>{
        //a cada um segundo "este = this" incrementa 1
        this.tempoEmSegundos +=1;
      }, 1000)
    },
    finalizar(){
      //para o cronometro
      clearInterval(this.cronometro)
    }
  }
});
</script>

<style scoped>

</style>