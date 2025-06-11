<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const activeMenu = route.path;
console.log(5566, activeMenu)

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    router
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="salary-calculation">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>薪酬计算</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/nav/salary-calculation/operation">
          运营
        </el-menu-item>
        <el-menu-item index="/nav/salary-calculation/customer-service">
          客服
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <!-- <el-menu-item index="/nav/2">
      <el-icon>
        <IconMenu />
      </el-icon>
      <template #title>
        Navigator Two
      </template>
    </el-menu-item> -->
    <!-- <el-menu-item index="3" disabled>
      <el-icon>
        <Document />
      </el-icon>
      <template #title>
        Navigator Three
      </template>
    </el-menu-item> -->
    <!-- <el-menu-item index="/nav/4">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>
        Navigator Four
      </template>
    </el-menu-item> -->
  </el-menu>
</template>
