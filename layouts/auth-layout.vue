<script lang="ts" setup>
</script>

<template>
  <a-config-provider>
    <a-layout>
      <a-layout-content
        :style="{ margin: '24px 16px 0', overflow: 'initial' }"
      >
        <slot />
      </a-layout-content>
    </a-layout>
  </a-config-provider>
</template>
