<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <Sidebar></Sidebar>
      <section class="main">
        <router-view/>
      </section>
      <Example></Example>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Example from "./components/example";

export default {
  components: {
    Header,
    Sidebar,
    Example
  }
};
</script>

<style lang="stylus">
@import './assets/style/index.styl';
</style>
