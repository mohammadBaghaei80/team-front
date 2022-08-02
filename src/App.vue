<script setup>
import { RouterView } from "vue-router";
import Header from "./components/dashboard/Header.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
</script>
<!-- Test Case For Github -->
<template>
  <RouterView name="Header"></RouterView>
  <RouterView name="Sidebar"></RouterView>
  <RouterView />
</template>
<script>
export default {
  name: "App",
};
</script>
<style></style>
