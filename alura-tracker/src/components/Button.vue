<template>
  <button class="button" :disabled="contagem">
    <span class="icon">
      <i class="fas fa-play"></i>
    </span>
    <span>{{name}}</span>

  </button>
</template>

<script lang='ts'>
import {defineComponent} from "vue";

export default defineComponent({
  name: `Button`,
  props:{
    cronometroRodando:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    cronometroExecutando(){

    }
  }
})
</script >

<style scoped>

</style>