<script setup>
  
</script>

<template>
  <div class="layout-nav">
    <ul class="link-group">
      <li>请先登录</li>
      <li>帮助中心</li>
      <li>关于我们</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .layout-nav {
    width: 100vh;
    height: 36px;
    padding: 8px 16px;
    background-color: $mainBgColor;
    .link-group {
      list-style: none;
      color: white;
      display: flex;
      justify-content: flex-end;
      gap: 4px;
      li:not(:last-child) {
        border-right: 1px solid #999;
        padding: 0 4px;
      }
    }
  }
</style>