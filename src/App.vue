<template>
  <div id="app">
    <app-header></app-header>
    <home></home>
  </div>
</template>


<script>
import Home from './components/Home'
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    Home,
    AppHeader,
  },
};
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
