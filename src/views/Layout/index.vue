<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
</script>

<template>
  <div class="layout">
    <LayoutNav />
    <LayoutHeader />
    <div class="main">
      <RouterView />
    </div>
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    background-color: $defaultBgColor;
  }
}
</style>