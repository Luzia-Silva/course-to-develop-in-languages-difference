<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <!-- Elemento filho-->
    <!--Passamos para o elemento via props o elemento pai-->
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <!-- O @click  é nativo do proprio vue e ele pega os clicks do usário-->
    <Button @click="iniciar">
      <!-- Se o cronometroRodando igual a disabled='false', se ele onclick=> "iniciar" fica igual há disabled='true'-->

    </Button>
    <!--o disabled com os :  na frente faz com que ele pegue o estado de cronometroRodando-->
    <button class="button" @click="finalizar" >
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Cronometro from "@/components/Cronometro";
import Button from "@/components/Button";

export default defineComponent({
  name: `Temporizador`,
  emits: ['aoTemporizadorFinalizado'], //Ele emite os eventos
  components: {
    Button,
    Cronometro
  },
  //São os dados/variavés
  data (){
    return{
      tempoEmSegundos:0,
      cronometro: 0,
    }
  },
  // São as funções que o usuário pode fazer os metodos
  methods: {
    iniciar(){
      this.cronometroRodando = true;
      //significa que a função "funcao" será executada assim cada vez que se atingir o determinado tempo.
      //this.cronometro -> este cronometro está executando.
      this.cronometro = setInterval(()=>{
        //a cada um segundo "este = this" incrementa 1
        this.tempoEmSegundos +=1;
      }, 1000)
    },
    finalizar(){
      this.cronometroRodando = false;
      //para o cronometro
      clearInterval(this.cronometro)
      //é um metodo
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)//emitindo evento ao finalizar
      this.tempoEmSegundos = 0
    }
  }
})
</script>

<style scoped>

</style>