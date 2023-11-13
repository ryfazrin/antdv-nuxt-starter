<script lang="ts" setup>
import { theme } from 'ant-design-vue'

const props = defineProps<{
  isSidebarCollapsed: boolean
}>()

const { token } = theme.useToken()
const { colorTextSecondary } = token.value
</script>

<template>
  <a-space
    direction="horizontal"
    :size="16"
    align="center"
    :style="{
      display: 'flex',
      marginTop: '24px',
      marginBottom: '10px',
      paddingLeft: isSidebarCollapsed ? '12px' : '0px',
      transition: 'all 0.5s ease',
      padding: isSidebarCollapsed ? '8px' : '10px',
    }"
  >
    <a-spin :spinning="false">
      <a-avatar
        :size="40"
        alt="avatar-sider-menu"
        src="https://dummyimage.com/40x40/67348D/fff&text=Pic"
      >
        <!-- {{ (user?.name as string)?.charAt(0) }} -->
        SA
      </a-avatar>
    </a-spin>
    <a-space
      v-if="!isSidebarCollapsed"
      direction="vertical"
      :size="0"
    >
      <a-typography-title :level="5" style="margin: 0px;">
        <!-- {{ user?.name }} -->
        Superadmin
      </a-typography-title>
      <a-typography-text :style="{ color: colorTextSecondary }">
        <!-- {{ user?.role_name }} -->
        Admin
      </a-typography-text>
    </a-space>
  </a-space>
</template>

<style lang="scss"></style>
