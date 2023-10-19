<script lang="ts" setup>
import Dashboard from '~/features/basic-query/ui/index.vue'
</script>

<template>
  <a-space direction="vertical" :size="20" class="flex">
    <a-space
      direction="horizontal"
      align="center"
      style="
        display: flex;
        justify-content: space-between;
        padding: 15px 0px;
      "
    >
      <a-space
        direction="vertical"
        :size="8"
      >
        <a-typography-title :level="3" style="margin: 0">
          Basic Query
        </a-typography-title>
        <a-typography-text>Kamu bisa menambahkan data user dengan cara klik tambah</a-typography-text>
      </a-space>
      <a-space
        direction="horizontal"
        :size="12"
      >
        <CustomButton
          type-button="add"
        >
          New
        </CustomButton>
      </a-space>
    </a-space>
    <!-- Dashboard component -->
    <CustomCard>
      <Dashboard />
    </CustomCard>
  </a-space>
</template>
