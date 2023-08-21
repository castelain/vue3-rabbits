<script setup>
  
</script>

<template>
  <div class="layout-footer">
    <ul class="link-group">
      <li>关于我们</li>
      <li>帮助中心</li>
      <li>售后服务</li>
      <li>配送与验收</li>
      <li>商务合作</li>
      <li>搜索推荐</li>
      <li>友情链接</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .layout-footer {
    width: 100vh;
    height: 72px;
    padding: 8px 16px;
    background-color: $mainBgColor;
    .link-group {
      width: 100%;
      list-style: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      li:not(:last-child) {
        border-right: 1px solid #999;
        padding: 0 4px;
      }
    }
  }
</style>