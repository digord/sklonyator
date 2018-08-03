<template>
  <div id="app">
    <div>0 {{ $sklonyator(0, ['заявка', 'заявки', 'заявок']) }}</div>
    <div>1 {{ $sklonyator(1, ['заявка', 'заявки', 'заявок']) }}</div>
    <div>2 {{ $sklonyator(2, ['заявка', 'заявки', 'заявок']) }}</div>
    <div>5 {{ $sklonyator(5, ['заявка', 'заявки', 'заявок']) }}</div>
    <hr>
    <div v-for="n in 10">{{ n }} {{ $sklonyator(n, ['письмо', 'письма', 'писем']) }}</div>

    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
