<script setup>
import { ref, onMounted } from "vue";
import { useScroll } from '@vueuse/core'

import { getCategoryHeaders } from "@/apis/layout/index";

const categoryHeaders = ref([]);

const { y } = useScroll(window);

onMounted(async () => {
  const res = await getCategoryHeaders();
  categoryHeaders.value = [{
    name: '首页',
    id: '0'
  }, ...res.result];
});

const activeIndex = ref(null);

const handleSelect = (key, keyPath) => {
  console.log("handleSelect: ", key, keyPath);
};
</script>

<template>
  <div class="layout-header" :class="{ show: y > 78 }" >
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        :index="category.id"
        v-for="category of categoryHeaders"
        :key="category.id"
      >
          {{ category.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 10;
  transform: translateY(-100%);
  opacity: 0;
}
.show {
  transform: none;
  opacity: 1;
  transition: all 0.4s linear;
}
</style>