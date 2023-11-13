<script lang="ts" setup>
const rendered = ref(false)
</script>

<template>
  <footer
    :style="{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
    }"
  >
    <a-typography-title
      :level="5"
      :style="{ fontWeight: 400, margin: 0 }"
    >
      © 2023, Made by{{ ' ' }}
      <a-skeleton-input
        v-if="rendered"
        :active="true"
        :style="{
          width: '100px',
          height: '30px',
          minWidth: 'unset',
          marginTop: '-5px',
        }"
      />
      <a
        href="https://www.code.id/"
        target="_blank"
        rel="noreferrer"
        style="color: #67348D;"
      >
        Code Development Indonesia
      </a>
    </a-typography-title>
    <a-typography-text>
      CODE.ID V1.0.0
    </a-typography-text>
  </footer>
</template>
