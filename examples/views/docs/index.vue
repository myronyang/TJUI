<template>
  <div class="docs-wrapper bg_gray">
    <Header></Header>
    <div class="container">
      <Sidebar></Sidebar>
      <section class="main-wrap">
        <div class="main-inner">
          <router-view />
        </div>
      </section>
      <Example></Example>
      <Back-top></Back-top>
      
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Example from "@/components/example";
import BackTop from "@/components/back-top";


export default {
  components: {
    Header,
    Sidebar,
    Example,
    BackTop
  }
};
</script>
