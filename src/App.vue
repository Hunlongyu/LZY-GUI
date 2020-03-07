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

<script>
import HelloWorld from './components/HelloWorld.vue'
import fly from 'flyio'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    getFlyio () {
      fly.get('https://www.baidu.com').then((res) => {
        console.log(res, 'fly')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.getFlyio()
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
