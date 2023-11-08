<script lang="ts" setup>
import ContentLayoutAuth from '~/shared/components/layout/auth-layout/ContentLayoutAuth.vue'
import ContentSiderAuth from '~/shared/components/layout/auth-layout/ContentSiderAuth.vue'
</script>

<template>
  <a-layout>
    <a-layout-content>
      <ContentLayoutAuth>
        <slot />
      </ContentLayoutAuth>
    </a-layout-content>

    <a-layout-sider
      :width="640"
      style="background-color: transparent;"
    >
      <ContentSiderAuth />
    </a-layout-sider>
  </a-layout>
</template>
