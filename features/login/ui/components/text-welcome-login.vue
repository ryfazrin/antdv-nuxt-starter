<script lang="ts" setup>
import { theme } from 'ant-design-vue'

const { token } = theme.useToken()
const { colorTextSecondary } = token.value
</script>

<template>
  <a-space
    direction="vertical"
    :size="0"
    style="
      display: flex;
    "
  >
    <a-typography-title :level="3" style="margin: 0;">
      Hi, welcome back👋
    </a-typography-title>
    <a-typography-text :style="{ color: colorTextSecondary }">
      Please enter your email and password
    </a-typography-text>
  </a-space>
</template>

<style lang="scss" scoped></style>
