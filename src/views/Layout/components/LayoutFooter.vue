<script setup>
  
</script>

<template>
  <div class="layout-footer">
    <ul class="link-group">
      <li>关于我们</li>
      <el-divider direction="vertical" />
      <li>帮助中心</li>
      <el-divider direction="vertical" />
      <li>售后服务</li>
      <el-divider direction="vertical" />
      <li>配送与验收</li>
      <el-divider direction="vertical" />
      <li>商务合作</li>
      <el-divider direction="vertical" />
      <li>搜索推荐</li>
      <el-divider direction="vertical" />
      <li>友情链接</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .layout-footer {
    // width: 100vw;
    height: 72px;
    padding: 8px 16px;
    background-color: $mainBgColor;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    .link-group {
      width: 100%;
      list-style: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      // li:not(:last-child) {
      //   border-right: 1px solid #999;
      //   padding: 0 8px;
      // }
    }
  }
</style>