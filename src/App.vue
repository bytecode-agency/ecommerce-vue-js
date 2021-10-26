<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
  import Header from "./shared/molecules/Header";
  import Footer from "./shared/molecules/Footer";
  export default {
    name: "App",
    components: { Footer, Header },
  };
</script>
