<script lang="ts" setup>
import AntdConfig from '~/shared/styles/AntdConfig.vue'
</script>

<template>
  <AntdConfig>
    <a-layout>
      <a-layout-content
        :style="{ margin: '24px 16px 0', overflow: 'initial' }"
      >
        <slot />
      </a-layout-content>
    </a-layout>
  </AntdConfig>
</template>
