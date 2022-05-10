<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
@import "@/assets/base.css";
</style>
