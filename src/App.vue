<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Api from './utils/api'

@Component({
  components: {
    HelloWorld
  }
})
export default class extends Vue {
  getFly () {
    const api = new Api()
    api.login('17756011557', 'CNc$iZ1G2%@Y')
  }

  created () {
    this.getFly()
    console.log('created')
  }

  mounted () {
    console.log('mounted')
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
