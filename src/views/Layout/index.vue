<script setup>
  import LayoutNav from '@/views/Layout/components/LayoutNav';
  import LayoutHeader from '@/views/Layout/components/LayoutHeader';
  import LayoutFooter from '@/views/Layout/components/LayoutFooter';

</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <div class="main">
    <RouterView />
  </div>
  <LayoutFooter />
</template>

<style lang="scss" scoped>
  .main {
    background-color: $defaultBgColor;
  }
</style>