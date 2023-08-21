<script setup>
  
</script>

<template>
  <div class="layout-nav">
    <ul class="link-group">
      <li>
        <i class="iconfont icon-user"></i>
        请先登录
      </li>
      <el-divider direction="vertical" />
      <li>帮助中心</li>
      <el-divider direction="vertical" />
      <li>关于我们</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .layout-nav {
    // width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 36px;
    padding: 8px 16px;
    background-color: $mainBgColor;
    font-size: 14px;
    .link-group {
      list-style: none;
      color: white;
      display: flex;
      // justify-content: flex-end;
      gap: 8px;
      // li:not(:last-child) {
      //   border-right: 1px solid #999;
      //   padding: 0 8px;
      // }
    }
  }
</style>