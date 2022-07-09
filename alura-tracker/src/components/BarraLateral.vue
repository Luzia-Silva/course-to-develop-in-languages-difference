<template>
  <header>
    <h1>
      <img src="../assets/logo.jpg" alt="cat logo">
    </h1>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: 'BarraLateral'
})
</script>

<style scoped>
/*Todo os estilo do componente por isso uso o scoped,
   porque será aplicado nessa tela*/
header {
  background: #a5dad2 ;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>