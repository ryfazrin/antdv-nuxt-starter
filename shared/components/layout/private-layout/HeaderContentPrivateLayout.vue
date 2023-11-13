
<script lang="ts" setup>
import AvatarHeader from './AvatarHeader.vue'
import DynamicBreadcrumb from './DynamicBreadcrumb.vue'
</script>

<template>
  <a-space
    direction="horizontal"
    align="center"
    style="
      display: flex;
      justify-content: space-between;
      padding: 20px 30px 10px 30px;
    "
  >
    <DynamicBreadcrumb />
    <AvatarHeader />
  </a-space>
</template>
