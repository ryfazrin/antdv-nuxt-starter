<script lang="ts" setup>
import ContentLayoutAuth from '~/shared/components/layout/auth-layout/ContentLayoutAuth.vue'
</script>

<template>
  <a-layout>
    <a-layout-content>
      <ContentLayoutAuth>
        <slot />
      </ContentLayoutAuth>
    </a-layout-content>

    <!-- TODO sider -->
    <!-- <a-layout-sider :width="640" style="background-color: transparent;"></a-layout-sider> -->
  </a-layout>
</template>
