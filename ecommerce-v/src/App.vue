<template>
  <div>
    <Header msg="Welcome to Your Vue.js App" />
    <div class="container">
      <div id="app">
        <div id="nav"></div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "./components/header/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
