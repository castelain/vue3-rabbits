<script setup>
import { ref, onMounted } from "vue";
import { getCategoryHeaders } from "@/apis/layout/index";

const categoryHeaders = ref([]);

onMounted(async () => {
  const res = await getCategoryHeaders();
  categoryHeaders.value = res.result;
});

const activeIndex = ref(null);

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
  background-color: white;
}
</style>