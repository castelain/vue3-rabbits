<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const categories = [
  {
    name: '首页',
    key: '1'
  },
  {
    name: '居家',
    key: '2'
  },
  {
    name: '美食',
    key: '3'
  },
];
const handleSelect = (key, keyPath) => {
  console.log("handleSelect: ", key, keyPath);
};
</script>

<template>
  <div class="layout-header">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item :index="category.key" v-for="category of categories" :key="category.key">
        {{ category.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  background-color: white;
}
</style>